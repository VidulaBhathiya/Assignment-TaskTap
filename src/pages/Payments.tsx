import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const paymentMethods = [
  { icon: "🏦", title: "Bank Transfer", desc: "Direct bank transfer to our verified business account. Safe and secure for all countries." },
  { icon: "💳", title: "Card Payment", desc: "Visa, MasterCard, and other major credit/debit cards accepted via secure payment gateway." },
  { icon: "📱", title: "Mobile Payment", desc: "Pay conveniently through mobile payment platforms including local options in your country." },
  { icon: "💬", title: "WhatsApp Pay", desc: "Discuss and arrange payment directly via WhatsApp for a personalised experience." },
];

const pricingFactors = [
  {
    title: "Academic Level",
    desc: "Diploma, Bachelor's, or Master's - the depth of research and academic rigor required varies by level.",
  },
  {
    title: "Word Count",
    desc: "The total volume of work (pages or word count) directly influences the overall project scope.",
  },
  {
    title: "Deadline",
    desc: "Urgent requests may include a priority fee, while longer deadlines are usually more budget-friendly.",
  },
  {
    title: "Complexity",
    desc: "Subject difficulty and requirements such as APA, Harvard, or IEEE referencing affect the final cost.",
  },
];

const Payments = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-[70px]">
        {/* Page Header */}
        <section className="bg-hero py-20 px-[5%]">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-3">
              Fair & Personalized Pricing
            </span>
            <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-black leading-tight mb-4" style={{ color: 'hsl(0 0% 98%)' }}>
              How We Calculate Your Price
            </h1>
            <p className="text-base leading-relaxed max-w-[540px]" style={{ color: 'hsl(0 0% 100% / 0.7)' }}>
              Every academic task is unique. We review your requirements carefully to provide the most fair and accurate quote.
            </p>
          </div>
        </section>

        {/* Quote-Based Pricing */}
        <section className="py-[90px] px-[5%]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
                <h2 className="font-heading text-[clamp(1.4rem,2.6vw,2rem)] font-black text-foreground mb-4">
                  Your quote is based on 4 key factors
                </h2>
                <div className="space-y-4">
                  {pricingFactors.map((factor) => (
                    <div key={factor.title} className="rounded-xl bg-muted/60 border border-border p-4">
                      <h3 className="text-sm font-bold text-foreground mb-1">{factor.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{factor.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
                <h2 className="font-heading text-[clamp(1.4rem,2.6vw,2rem)] font-black text-foreground mb-3">
                  Get Started
                </h2>
                <p className="text-sm mb-6 text-muted-foreground">
                  Choose an option below to proceed with your assignment.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="rounded-xl border border-border bg-muted/60 p-4">
                    <h3 className="text-sm font-bold text-foreground mb-1">Option 1: Get a Free Quote</h3>
                    <p className="text-sm text-muted-foreground">
                      Upload your assignment brief and receive a personalized quote within 30 minutes.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/60 p-4">
                    <h3 className="text-sm font-bold text-foreground mb-1">Option 2: Chat with an Expert</h3>
                    <p className="text-sm text-muted-foreground">
                      Need a quick estimate? Connect via WhatsApp for immediate assistance.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="/order"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary to-accent text-secondary-foreground font-bold text-sm no-underline shadow-[0_4px_15px_hsl(42_80%_55%/0.45)] hover:-translate-y-0.5 transition-all"
                  >
                    Get a Free Quote
                  </a>
                  <a
                    href="https://wa.me/94783001095"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-500 text-white font-bold text-sm no-underline hover:bg-green-600 hover:-translate-y-0.5 transition-all"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                <p className="text-xs mt-6 leading-relaxed text-muted-foreground">
                  Note: To provide the best value, we review every requirement individually before confirming the final price. This ensures you only pay for exactly what you need.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-[90px] px-[5%] bg-muted/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-[clamp(1.6rem,3vw,2.4rem)] font-black text-foreground text-center mb-4">
              Payment Methods
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
              We accept multiple payment options to make things easy for students worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentMethods.map((m) => (
                <div key={m.title} className="bg-card rounded-2xl p-7 shadow-card border border-border text-center">
                  <div className="text-4xl mb-4">{m.icon}</div>
                  <h4 className="font-body text-base font-bold text-foreground mb-2">{m.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Money-back guarantee */}
        <section className="bg-gradient-to-r from-secondary to-accent text-center py-16 px-[5%]">
          <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-black text-secondary-foreground mb-3">
            💰 100% Money-Back Guarantee
          </h2>
          <p className="text-base max-w-lg mx-auto mb-6" style={{ color: 'hsl(220 60% 10% / 0.75)' }}>
            Not satisfied? We offer a full refund under our terms and conditions. Your trust matters to us.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-full bg-white text-secondary-foreground font-bold text-base no-underline shadow-[0_6px_25px_hsl(0_0%_0%/0.15)] hover:-translate-y-[3px] transition-all"
          >
            Contact Us →
          </a>
        </section>
      </div>
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Payments;
