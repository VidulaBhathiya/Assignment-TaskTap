import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/payments", label: "Payments" },
  { to: "/order", label: "Order Now" },
  { to: "/development", label: "Development" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[80px] bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      <Link to="/" className="flex items-center gap-3 no-underline">
        <div className="h-[52px] w-[52px] rounded-full overflow-hidden ring-2 ring-primary/15 bg-white shadow-sm shrink-0">
          <img
            src="/logo.png"
            alt="Assignment TaskTap Logo"
            className="h-full w-full object-cover object-[50%_30%] scale-[1.35]"
          />
        </div>
        <span className="hidden sm:flex flex-col leading-none">
          <span className="text-[14px] font-extrabold tracking-[0.06em] text-foreground">ASSIGNMENT</span>
          <span className="text-[14px] font-black tracking-[0.06em] text-secondary mt-0.5">TASKTAP</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-6 list-none">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`text-sm font-bold transition-colors no-underline px-1.5 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                location.pathname === link.to
                  ? "text-secondary font-bold"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to="/order"
        className="hidden lg:inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-secondary to-accent text-secondary-foreground font-bold text-sm no-underline shadow-[0_4px_15px_hsl(42_80%_55%/0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_hsl(42_80%_55%/0.5)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Get Started
      </Link>

      {/* Hamburger */}
      <button
        className="lg:hidden min-h-11 min-w-11 flex items-center justify-center cursor-pointer bg-transparent border-none rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
        type="button"
      >
        {mobileOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="absolute top-[80px] left-0 right-0 bg-white shadow-xl border-t border-border p-5 flex flex-col gap-2 lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-base font-bold no-underline px-4 py-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                location.pathname === link.to ? "text-secondary font-bold" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/order"
            className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-secondary to-accent text-secondary-foreground font-bold text-center no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
