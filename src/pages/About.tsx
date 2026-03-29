import Navbar from "@/components/Navbar";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FlagsStrip from "@/components/FlagsStrip";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const values = [
  { icon: "🎯", title: "Academic Excellence", desc: "We deliver work that meets the highest academic standards with thorough research and proper referencing." },
  { icon: "🤝", title: "Student First", desc: "Everything we do revolves around your success. Your satisfaction is our top priority." },
  { icon: "🔐", title: "Trust & Privacy", desc: "Complete confidentiality guaranteed. We never share your personal or order information." },
  { icon: "⚡", title: "Reliability", desc: "On-time delivery every time. We understand the importance of your deadlines." },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-[70px]">
        {/* Page Header */}
        <section className="bg-hero py-20 px-[5%]">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-3">
              Who We Are
            </span>
            <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-black leading-tight mb-4" style={{ color: 'hsl(0 0% 98%)' }}>
              About Assignment TaskTap
            </h1>
            <p className="text-base leading-relaxed max-w-[540px]" style={{ color: 'hsl(0 0% 100% / 0.7)' }}>
              Your trusted academic writing partner, helping university students achieve their full potential since 2022.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-[90px] px-[5%]">
          <div className="max-w-5xl mx-auto flex gap-12 flex-wrap items-center">
            <div className="flex-1 min-w-[300px]">
              <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-3">Our Mission</span>
              <h2 className="font-heading text-[clamp(1.6rem,3vw,2.4rem)] font-black text-foreground leading-tight mb-5">
                Empowering Students Worldwide
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Assignment TaskTap was founded with a simple belief: every student deserves access to quality academic support, regardless of their location or background.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We connect students with experienced academic writers who understand university standards across Sri Lanka, Australia, UK, Canada, India, and UAE. Our team is passionate about helping you succeed.
              </p>
            </div>
            <div className="flex-1 min-w-[280px]">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "500+", label: "Assignments Done" },
                  { num: "98%", label: "Satisfaction Rate" },
                  { num: "6", label: "Countries Served" },
                  { num: "24/7", label: "Support Available" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-center">
                    <div className="font-heading text-[2rem] font-black text-secondary">{stat.num}</div>
                    <div className="text-xs mt-1" style={{ color: 'hsl(0 0% 100% / 0.8)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-[90px] px-[5%] bg-muted/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-[clamp(1.6rem,3vw,2.4rem)] font-black text-foreground text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-card rounded-2xl p-7 shadow-card border border-border text-center hover:-translate-y-1 transition-transform">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h4 className="font-body text-base font-bold text-foreground mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FlagsStrip />
        <WhyUsSection />
        <TestimonialsSection />
      </div>
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default About;
