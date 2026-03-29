const steps = [
  { num: 1, title: "Submit Your Brief", desc: "Share your assignment details, deadline, and any specific guidelines or requirements." },
  { num: 2, title: "Get a Quote", desc: "Receive a fair, transparent price instantly based on your requirements and deadline." },
  { num: 3, title: "Expert Writing", desc: "Our specialists craft your work with proper research, structure, and academic rigor." },
  { num: 4, title: "Receive & Succeed", desc: "Get your completed assignment delivered on time. Request revisions if needed — free!" },
];

const HowItWorks = () => (
  <section id="how" className="py-[90px] px-[5%] bg-primary relative overflow-hidden">
    <div className="max-w-5xl mx-auto text-center">
      <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-3">
        Simple Process
      </span>
      <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-tight mb-4" style={{ color: 'hsl(0 0% 98%)' }}>
        How It Works
      </h2>
      <p className="text-base leading-relaxed max-w-[540px] mx-auto" style={{ color: 'hsl(0 0% 100% / 0.65)' }}>
        Getting your assignment done has never been easier. Just follow these 4 simple steps.
      </p>

      <div className="relative flex flex-wrap justify-center gap-0 mt-12">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-9 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/50 via-secondary to-primary/50 z-0" />

        {steps.map((s) => (
          <div key={s.num} className="flex-1 min-w-[180px] text-center relative z-10 px-2.5">
            <div className="w-[72px] h-[72px] rounded-full mx-auto mb-5 bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-heading text-2xl font-black text-secondary-foreground shadow-[0_6px_20px_hsl(42_80%_55%/0.4)]">
              {s.num}
            </div>
            <h4 className="text-[15px] font-bold mb-2" style={{ color: 'hsl(0 0% 100%)' }}>{s.title}</h4>
            <p className="text-[13px] leading-relaxed" style={{ color: 'hsl(0 0% 100% / 0.6)' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
