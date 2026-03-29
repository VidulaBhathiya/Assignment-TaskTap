const testimonials = [
  {
    text: "Absolutely outstanding service! My HND Business Management assignment was delivered 2 days early, well-researched and perfectly formatted. Scored distinction!",
    name: "Ashan Perera",
    info: "HND Student · Sri Lanka",
    initial: "A",
  },
  {
    text: "I was struggling with my Nursing research paper. TaskTap delivered an incredible piece — well-cited, clinical, and exactly what my tutor expected. Highly recommended!",
    name: "Priya Sharma",
    info: "Bachelor's Nursing · UK",
    initial: "P",
  },
  {
    text: "My Master's dissertation on International Relations was expertly handled. Professional, confidential, and the revision support was second to none. 10/10!",
    name: "Mohammed Al-Rashid",
    info: "Master's Student · UAE",
    initial: "M",
  },
];

const TestimonialsSection = () => (
  <section className="py-[90px] px-[5%] bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-3">
          Student Reviews
        </span>
        <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-foreground leading-tight">
          What Our Students Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <div className="text-secondary text-base tracking-widest mb-3.5">★★★★★</div>
            <p className="text-sm text-muted-foreground leading-relaxed italic mb-5">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-base">
                {t.initial}
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.info}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
