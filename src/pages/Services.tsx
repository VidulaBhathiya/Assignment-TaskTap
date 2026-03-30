import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-[70px]">
        {/* Page Header */}
        <section className="px-[5%] pt-10">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-border text-sm font-semibold text-foreground no-underline hover:bg-muted transition-colors"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold no-underline hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
          </div>
        </section>

        <ServicesSection />
        <ProgramsSection />
        <CTABanner />
      </div>
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Services;
