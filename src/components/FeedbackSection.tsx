import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

const FEEDBACK_TABLE = "feedback";

const FeedbackSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isSupabaseConfigured || !supabase) {
      toast.error("Feedback service is temporarily unavailable. Please try again later.");
      return;
    }

    if (!name.trim() || !message.trim()) {
      toast.error("Please fill in your name and feedback.");
      return;
    }

    if (message.trim().length < 10) {
      toast.error("Please add a little more detail to your feedback.");
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from(FEEDBACK_TABLE).insert({
      name: name.trim(),
      email: email.trim() || null,
      message: message.trim(),
      rating,
    });

    setIsSubmitting(false);

    if (error) {
      toast.error("Could not submit feedback. Please try again.");
      return;
    }

    toast.success("Thank you. Your feedback has been submitted.");
    setName("");
    setEmail("");
    setMessage("");
    setRating(5);
  };

  return (
    <section id="feedback" className="py-[90px] px-[5%] bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-3">
            Student Feedback
          </span>
          <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-foreground leading-tight mb-3">
            Share Your Experience
          </h2>
          <p className="text-muted-foreground">
            Your feedback helps us improve our assignment support for every student.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-7 md:p-9 border border-border shadow-card space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="feedback-name" className="text-sm font-semibold text-foreground">Name</label>
              <Input
                id="feedback-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="feedback-email" className="text-sm font-semibold text-foreground">Email (Optional)</label>
              <Input
                id="feedback-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground" id="feedback-rating-label">Rating</label>
            <div className="flex items-center gap-2 flex-wrap">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  aria-label={`Rate ${value} out of 5`}
                  aria-pressed={rating === value}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                    rating === value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="feedback-message" className="text-sm font-semibold text-foreground">Feedback</label>
            <Textarea
              id="feedback-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what went well and what we can improve"
              className="min-h-[130px]"
              minLength={10}
              required
            />
            <p className="text-xs text-muted-foreground">Minimum 10 characters.</p>
          </div>

          <Button type="submit" className="w-full md:w-auto px-8" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackSection;
