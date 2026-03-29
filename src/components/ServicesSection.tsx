const services = [
  { icon: "📝", title: "Assignment Writing", desc: "Custom, well-researched assignments crafted to meet your university's specific guidelines and marking criteria." },
  { icon: "📊", title: "Case Study Writing", desc: "In-depth analysis and structured case studies with critical evaluation and real-world application." },
  { icon: "🔬", title: "Research Papers", desc: "Thoroughly researched academic papers with proper citations, methodology, and scholarly references." },
  { icon: "📋", title: "Assessments", desc: "Comprehensive assessment support including essays, reports, portfolios, and reflective writing." },
  { icon: "🎓", title: "Thesis Writing", desc: "Expert guidance and writing support for dissertations and theses at Bachelor's and Master's level." },
  { icon: "✏️", title: "Proofreading & Editing", desc: "Professional editing to enhance clarity, grammar, structure, and academic language quality." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-[90px] px-[5%] bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-3">
          What We Offer
        </span>
        <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-foreground leading-tight mb-4">
          Our Academic Services
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-[540px]">
          Comprehensive writing support tailored to your academic level and subject area.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card border border-border hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <div className="w-[54px] h-[54px] rounded-[14px] mb-5 flex items-center justify-center text-2xl bg-muted">
                {s.icon}
              </div>
              <h3 className="font-body text-[17px] font-bold text-foreground mb-2.5">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
