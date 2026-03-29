import { MessageCircle } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-[80px] px-[5%]">
      
      <div className="max-w-5xl mx-auto">

        <div className="bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">

          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#FBBF24]/20 blur-[100px]" />

          {/* Heading */}
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-black text-white mb-4">
            Struggling with Assignments?
          </h2>

          {/* Sub text */}
          <p className="text-white/70 mb-8 max-w-[500px] mx-auto">
            Get expert academic help in minutes. Chat with our team and receive a free quote instantly.
          </p>

          {/* Button */}
          <a
            href="https://wa.me/947XXXXXXXX"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-black font-bold hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Message on WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
};

export default CTABanner;
