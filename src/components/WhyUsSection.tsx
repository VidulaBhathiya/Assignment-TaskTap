const reasons = [
  { icon: "✅", title: "100% Accurate & Original", desc: "Every assignment is written from scratch, fully plagiarism-free, and verified before delivery." },
  { icon: "🔒", title: "Strictly Confidential", desc: "Your identity and order details are kept completely private. We never share your information." },
  { icon: "⏰", title: "On-Time Delivery, Every Time", desc: "We respect your deadlines. Rush orders welcome. Delivery guaranteed before your submission date." },
  { icon: "🌍", title: "Global Academic Standards", desc: "Writers familiar with UK, Australian, Canadian, and Sri Lankan university requirements." },
];

const badges = [
  { num: "500+", label: "Assignments Completed" },
  { num: "98%", label: "Satisfaction Rate" },
  { num: "6", label: "Countries Served" },
  { num: "24/7", label: "Customer Support" },
];

const WhyUsSection = () => (
  <section id="why" className="py-[90px] px-[5%]">
    <div className="max-w-6xl mx-auto">
      <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-3">
        Why Choose Us
      </span>
      <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-foreground leading-tight mb-4">
        The Assignment TaskTap Difference
      </h2>

      <div className="flex gap-[60px] flex-wrap mt-12">
        <div className="flex-1 min-w-[280px]">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4 mb-7 items-start">
              <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-xl bg-gradient-to-br from-primary to-primary/70 text-white">
                {r.icon}
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground mb-1.5">{r.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-[1.2] min-w-[280px]">
          <div className="grid grid-cols-2 gap-4">
            {badges.map((b) => (
              <div key={b.label} className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-7 text-center">
                <div className="font-heading text-[2.2rem] font-black text-secondary">{b.num}</div>
                <div className="text-xs mt-1" style={{ color: 'hsl(0 0% 100% / 0.8)' }}>{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
