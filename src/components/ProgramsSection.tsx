const programs = [
  { icon: "🏅", title: "Diploma Programs", desc: "Foundation & professional diploma qualifications" },
  { icon: "🎖️", title: "Higher Diploma / HND", desc: "Higher National Diploma & advanced diplomas" },
  { icon: "🎓", title: "Bachelor's Degrees", desc: "Undergraduate degree level assignments & essays" },
  { icon: "🏆", title: "Master's Degrees", desc: "Postgraduate dissertations, theses & research" },
];

const specializations = [
  "Law & Criminology",
  "Computer Science & IT Management",
  "Nursing & Health Studies",
  "Public Health & Social Care",
  "Project Management",
  "International Relations",
  "Marketing / HRM / Tourism & Hospitality",
  "Psychology & Professional Courses",
];

const ProgramsSection = () => (
  <section id="programs" className="py-[90px] px-[5%]">
    <div className="max-w-6xl mx-auto">
      <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-3">
        Academic Coverage
      </span>
      <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-foreground leading-tight mb-4">
        Programs & Specializations
      </h2>
      <p className="text-base text-muted-foreground leading-relaxed max-w-[540px]">
        We support students across all qualification levels and a wide range of subject areas.
      </p>

      <div className="flex gap-[60px] flex-wrap mt-12">
        {/* Programs */}
        <div className="flex-1 min-w-[280px] flex flex-col gap-4">
          {programs.map((p) => (
            <div
              key={p.title}
              className="flex items-center gap-4 bg-card rounded-[14px] p-5 shadow-card border-l-4 border-primary hover:translate-x-1.5 transition-transform"
            >
              <span className="text-[28px]">{p.icon}</span>
              <div>
                <h4 className="text-[15px] font-bold text-foreground">{p.title}</h4>
                <p className="text-[13px] text-muted-foreground mt-0.5">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="flex-1 min-w-[280px]">
          <h3 className="font-heading text-foreground text-[1.3rem] mb-5">We Specialize In:</h3>
          <div className="flex flex-col gap-3">
            {specializations.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 px-[18px] py-3.5 bg-card rounded-xl text-sm font-medium text-foreground shadow-card hover:bg-muted transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProgramsSection;
