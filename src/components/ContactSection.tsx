import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const contactInfo = [
  { icon: "💵", label: "Affordable price", value: "Student-Friendly Rates" },
  { icon: "💬", label: "WhatsApp / Chat", value: "Message us directly for instant support" },
  { icon: "📧", label: "Email", value: "assignmenttasktap@gmail.com" },
  { icon: "⏰", label: "Response Time", value: "Within 1–2 hours, 7 days a week" },
  { icon: "🔒", label: "Privacy", value: "100% confidential your data is safe with us" },
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    details: "",
  });

  const validateForm = () => {
    const hasRequiredFields = form.name.trim() && form.email.trim() && form.subject.trim() && form.details.trim();
    if (!hasRequiredFields) {
      toast.error("Please fill in all fields before continuing.");
      return false;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!validEmail) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  // 📧 Email
  const handleEmail = () => {
    if (!validateForm()) return;

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nDetails:\n${form.details}`
    );

    window.location.href = `mailto:assignmenttasktap@gmail.com?subject=${subject}&body=${body}`;
  };

  // 💬 WhatsApp
  const handleWhatsApp = () => {
    if (!validateForm()) return;

    const message = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nDetails:\n${form.details}`
    );

    window.open(`https://wa.me/94783001095?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-[80px] px-[5%]">
      <div className="max-w-6xl mx-auto">

        <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-3">
          Get In Touch
        </span>

        <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-foreground mb-4">
          Start Your Order Today
        </h2>

        <p className="text-base text-muted-foreground max-w-[540px]">
          Fill out the form and contact us instantly via Email or WhatsApp.
        </p>

        <div className="flex gap-[100px] flex-wrap mt-12">

          {/* LEFT INFO */}
          <div className="flex-1 min-w-[260px]">
            {contactInfo.map((c) => (
              <div key={c.label} className="flex gap-4 mb-7 items-start">
                <div className="w-[46px] h-[46px] rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-lg">
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase">{c.label}</div>
                  <div className="text-[15px] font-semibold text-foreground mt-0.5">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="flex-[1.4] min-w-[100px]">
            <div className="bg-muted rounded-2xl p-9">

              {/* Name */}
              <input
                id="contact-name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full mb-4 px-4 py-3 rounded-lg border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Your Name"
                required
              />

              {/* Email */}
              <input
                id="contact-email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full mb-5 px-4 py-3 rounded-lg border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Email Address"
                required
              />

              {/* Subject */}
              <input
                id="contact-subject"
                type="text"
                placeholder="Subject / Course"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full mb-4 px-4 py-3 rounded-lg border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Subject or Course"
                required
              />

              {/* Details */}
              <textarea
                id="contact-details"
                placeholder="Assignment Details & Deadline"
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className="w-full mb-6 px-4 py-8 rounded-lg border border-border min-h-[100px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Assignment Details and Deadline"
                required
              />

              {/* BUTTONS */}
              <div className="flex gap-4">

                {/* Email */}
                <button
                  type="button"
                  onClick={handleEmail}
                  className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#0F172A] text-white font-bold hover:scale-105 transition flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </button>

                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 py-3 rounded-full bg-green-500 text-white font-bold hover:scale-105 transition flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;