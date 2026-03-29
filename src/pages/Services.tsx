import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Services = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-[70px]">
        {/* Page Header */}


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
