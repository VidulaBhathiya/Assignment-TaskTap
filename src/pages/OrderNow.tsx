import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const OrderNow = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-[70px]">
        {/* Page Header */}
        <section className="bg-hero py-20 px-[5%]">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-3">
              Place Your Order
            </span>
            <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-black leading-tight mb-4" style={{ color: 'hsl(0 0% 98%)' }}>
              Order Now
            </h1>
            <p className="text-base leading-relaxed max-w-[540px]" style={{ color: 'hsl(0 0% 100% / 0.7)' }}>
              Fill in your assignment details and our team will get back to you with a quote within hours.
            </p>
          </div>
        </section>

        <ContactSection />

        {/* How it works mini */}
        <section className="py-16 px-[5%] bg-muted/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-2xl font-black text-foreground mb-8">What Happens Next?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { num: "1", title: "We Review", desc: "Our team reviews your requirements and sends a quote." },
                { num: "2", title: "You Confirm", desc: "Accept the quote and make payment via your preferred method." },
                { num: "3", title: "We Deliver", desc: "Receive your completed assignment before your deadline." },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-14 h-14 rounded-full mx-auto mb-4 bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-heading text-xl font-black text-secondary-foreground">
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default OrderNow;
