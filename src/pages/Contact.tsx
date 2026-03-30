import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-[70px]">
        {/* Page Header */}
        <section className="px-[5%] pt-10">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-border text-sm font-semibold text-foreground no-underline hover:bg-muted transition-colors"
            >
              Home
            </Link>
          </div>
        </section>

        <ContactSection />

        {/* Map / Extra Info */}
        <section className="py-16 px-[5%] bg-muted/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-2xl font-black text-foreground mb-4">We're Here For You</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Whether it's a quick question or a complex project — we're available 7 days a week, 24/7 via WhatsApp, email, and phone.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="bg-card rounded-2xl px-8 py-6 shadow-card border border-border">
                <div className="text-2xl mb-2">📧</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Email</div>
                <div className="text-sm font-bold text-foreground mt-1">assignmenttasktap@gmail.com</div>
              </div>
              <div className="bg-card rounded-2xl px-8 py-6 shadow-card border border-border">
                <div className="text-2xl mb-2">📲</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">WhatsApp / Phone</div>
                <div className="text-sm font-bold text-foreground mt-1">78 300 1095</div>
              </div>
              <div className="bg-card rounded-2xl px-8 py-6 shadow-card border border-border">
                <div className="text-2xl mb-2">⏰</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Response Time</div>
                <div className="text-sm font-bold text-foreground mt-1">Within 1–2 Hours</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Contact;
