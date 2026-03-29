const WhatsAppFab = () => (
  <a
    href="https://wa.me/783001095"
    target="_blank"
    rel="noopener noreferrer"
    title="Chat on WhatsApp"
    className="fixed bottom-7 right-7 z-[200] w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center text-[26px] no-underline shadow-[0_6px_25px_rgba(37,211,102,0.5)] animate-float group"
  >
    💬
    <span className="absolute right-[66px] bg-card px-3.5 py-1.5 rounded-full text-[13px] font-semibold text-foreground whitespace-nowrap shadow-card opacity-0 group-hover:opacity-100 transition-opacity font-body">
      Chat with us!
    </span>
  </a>
);

export default WhatsAppFab;
