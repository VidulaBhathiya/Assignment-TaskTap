import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary pt-[50px] pb-7 px-[5%]">
    <div className="max-w-6xl mx-auto">
      <div className="flex gap-[50px] flex-wrap mb-10">
        {/* Brand */}
        <div className="flex-[1.5] min-w-[240px]">
          <Link to="/" className="inline-flex items-center gap-3 mb-3 no-underline">
            <div className="h-[54px] w-[54px] rounded-full overflow-hidden ring-2 ring-white/20 bg-white/10 shrink-0">
              <img
                src="/logo.png"
                alt="Assignment TaskTap"
                className="h-full w-full object-cover object-[50%_30%] scale-[1.35]"
              />
            </div>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-extrabold tracking-[0.06em] text-white">ASSIGNMENT</span>
              <span className="text-sm font-black tracking-[0.06em] text-secondary mt-0.5">TASKTAP</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed mt-3.5" style={{ color: 'hsl(0 0% 100% / 0.7)' }}>
            Expert Academic Writing Support for University Students. Serving Sri Lanka, Australia, UK, Canada, India & UAE with accurate, confidential, on-time support.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[140px]">
          <h4 className="text-sm font-bold mb-4 tracking-wide" style={{ color: 'hsl(0 0% 100%)' }}>Programs & Specializations</h4>
          {[
            { label: "📜certificate course and nvq levels", to: "/" },
            { label: "🏅Diploma Programs", to: "/services" },
            { label: "🎖️Higher Diploma / HND", to: "/payments" },
            { label: "🎓Bachelor's Degrees", to: "/order" },
            { label: "🏆Master's Degrees", to: "/development" },
          
          ].map((l) => (
            <Link key={l.label} to={l.to} className="block text-[13px] mb-2 no-underline hover:text-secondary transition-colors" style={{ color: 'hsl(0 0% 100% / 0.55)' }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div className="flex-1 min-w-[140px]">
          <h4 className="text-sm font-bold mb-4 tracking-wide" style={{ color: 'hsl(0 0% 100%)' }}>Services</h4>
          {["Assignment Writing", "Case Study Writing", "Research Papers", "Assessments", "Thesis Writing","Development projects","And Any others...."].map((l) => (
            <Link key={l} to="/services" className="block text-[13px] mb-2 no-underline hover:text-secondary transition-colors" style={{ color: 'hsl(0 0% 100% / 0.55)' }}>
              {l}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-sm font-bold mb-4 tracking-wide" style={{ color: 'hsl(0, 0%, 98%)' }}>Contact Information</h4>
          <p className="text-[14px] mb-2" style={{ color: 'hsl(0 0% 100% / 0.55)' }}>✉ assignmenttasktapme@gmail.com</p>
          <p className="text-[14px] mb-2" style={{ color: 'hsl(0 0% 100% / 0.55)' }}>💬 +94 78 300 1095</p>
          <p className="text-[14px] mb-2" style={{ color: 'hsl(0 0% 100% / 0.55)' }}> ⓕ Assignment Tasktap</p>
          <p className="text-[14px] mb-2" style={{ color: 'hsl(0 0% 100% / 0.55)' }}>⏰24/7 Support</p>
        </div>
      </div>

      <div className="border-t border-white/10 pt-5 flex justify-between items-center flex-wrap gap-3">
        <p className="text-xs" style={{ color: 'hsl(0 0% 100% / 0.7)' }}>
          © {new Date().getFullYear()} Assignment TaskTap. All rights reserved.
        </p>
        <span className="text-xs font-semibold text-secondary">✦ Fulfill Your Potential</span>
      </div>
    </div>
  </footer>
);

export default Footer;
