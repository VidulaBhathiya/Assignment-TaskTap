import heroBg from "@/assets/hero-bg.jpg";
import { Mail, MessageCircle } from "lucide-react";

const stats = [
  { num: "500+", label: "Projects Delivered" },
  { num: "98%", label: "Satisfaction Rate" },
  { num: "6", label: "Countries Supported" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[100px] pb-[60px] px-[5%]">
      <img
        src={heroBg}
        alt="Academic excellence background"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero opacity-90" />

      {/* Decorative blobs */}
      <div className="absolute -top-[1000px] -right-[50px] w-[500px] h-[500px] rounded-full bg-secondary opacity-[0.12] blur-[80px]" />
      <div className="absolute -bottom-[50px] left-[30%] w-[300px] h-[300px] rounded-full bg-primary/30 opacity-[0.15] blur-[80px]" />

      <div className="relative z-10 max-w-[760px] mx-auto text-center">
        <div className="inline-flex items-center justify-center gap-2 bg-secondary/20 border border-secondary/40 text-secondary px-4 py-1.5 rounded-full text-[13px] font-bold tracking-wide mb-6 animate-fade-up mx-auto w-fit">
          Trusted Academic Support 
        </div>

        <h1 className="font-heading text-[clamp(2.4rem,5vw,3.8rem)] font-black leading-[1.1] mb-5 animate-fade-up [animation-delay:100ms] opacity-0" style={{ color: 'hsl(0 0% 98%)' }}>
          Turn Academic Pressure{" "}
          <span className="text-gradient-gold">into</span> Confident Results
        </h1>

        <p className="text-[17px] leading-[1.7] font-semibold mb-9 animate-fade-up [animation-delay:200ms] opacity-0 max-w-[720px] mx-auto" style={{ color: 'hsl(0 0% 100% / 0.8)' }}>
          From assignments and case studies to dissertations, our expert team delivers original, well researched work tailored to your brief and deadline.
        </p>

        <div className="flex gap-7 flex-wrap justify-center animate-fade-up [animation-delay:300ms] opacity-0">
            <a
            href="https://wa.me/947XXXXXXXX"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-black font-bold hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Message on WhatsApp
          </a>
          <a
            href="#services"
            className="inline-flex items-center px-10 py-7.5 rounded-full border-2 border-white/50 text-[15px] font-bold no-underline hover:border-white hover:bg-white/10 transition-all"
            style={{ color: 'hsl(0 0% 100%)' }}
          >
            View Our Services
          </a>
        </div>

        <div className="flex gap-10 mt-[50px] flex-wrap justify-center animate-fade-up [animation-delay:400ms] opacity-0">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-[2rem] font-black text-secondary">{s.num}</div>
              <div className="text-xs font-bold tracking-wide" style={{ color: 'hsl(0 0% 100% / 0.6)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating card */}
      <div className="absolute right-[4%] bottom-[30%] z-10 hidden lg:block animate-float">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-7 py-5" style={{ color: 'hsl(0 0% 100%)' }}>
          <div className="text-[11px] opacity-60 tracking-widest uppercase">ON-TIME DELIVERY</div>
          <div className="text-[22px] font-bold mt-1 text-secondary">✓ 100% Guaranteed</div>
        </div>
      </div>
    </section>














  );
};

export default HeroSection;
