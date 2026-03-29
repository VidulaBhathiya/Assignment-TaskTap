import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const developmentServices = [
  {
    title: "Front-end Development",
    desc: "Expert support with HTML5, CSS3 (Tailwind or Bootstrap), and JavaScript frameworks like React or Vue to build responsive, modern interfaces.",
  },
  {
    title: "Full-stack Projects",
    desc: "End-to-end development help using Node.js, Express, and databases such as PostgreSQL, MySQL, or Supabase.",
  },
  {
    title: "UI/UX Design",
    desc: "Professional web layout support and prototyping guidance using Figma to meet high-quality design standards.",
  },
  {
    title: "Bug Fixing and Code Optimization",
    desc: "Thorough debugging, code refactoring, and performance improvements for existing programming assignments.",
  },
];

const Development = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-[70px]">
        {/* Page Header */}
        <section className="bg-hero py-20 px-[5%]">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-3">
              Technical Assignment Support
            </span>
            <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-black leading-tight mb-4" style={{ color: 'hsl(0 0% 98%)' }}>
              Web Development and Programming Support
            </h1>
            <p className="text-base leading-relaxed max-w-[540px]" style={{ color: 'hsl(0 0% 100% / 0.7)' }}>
              Custom coding solutions and technical project assistance for IT and Software Engineering students.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-[90px] px-[5%]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-[clamp(1.7rem,3vw,2.4rem)] font-black text-foreground mb-3">
                What We Offer
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                High-demand web and software assignment support designed to help students submit quality technical work with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {developmentServices.map((service) => (
                <div key={service.title} className="bg-card border border-border rounded-2xl p-7 shadow-card hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-muted/60 border border-border rounded-2xl p-8 text-center">
              <p className="text-foreground font-semibold mb-2">
                Need help with your next coding assignment?
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Share your brief and get expert guidance, clear timelines, and reliable technical support.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="/order"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary to-accent text-secondary-foreground font-bold text-sm no-underline shadow-[0_4px_15px_hsl(42_80%_55%/0.4)] hover:-translate-y-0.5 transition-all"
                >
                  Start Your Order
                </a>
                <a
                  href="https://wa.me/94783001095"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-500 text-white font-bold text-sm no-underline hover:bg-green-600 hover:-translate-y-0.5 transition-all"
                >
                  Chat on WhatsApp
                </a>
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

export default Development;
