import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FlagsStrip from "@/components/FlagsStrip";
import ContactSection from "@/components/ContactSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FlagsStrip />
      <ContactSection />
      <FeedbackSection />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
