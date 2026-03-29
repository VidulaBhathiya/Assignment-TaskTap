const flags = [
  { emoji: "lk", name: "Sri Lanka" },
  { emoji: "🇦🇺", name: "Australia" },
  { emoji: "🇬🇧", name: "United Kingdom" },
  { emoji: "🇨🇦", name: "Canada" },
  { emoji: "🇮🇳", name: "India" },
  { emoji: "🇦🇪", name: "UAE" },
];

const FlagsStrip = () => (
  <div className="bg-primary py-6 px-[10%] flex items-center justify-center gap-10 flex-wrap text-white">
    <span className="text-xs tracking-widest uppercase mr-2 text-white">
      Serving Students In
    </span>
    {flags.map((f) => (
      <span key={f.name} className="text-[26px]" title={f.name}>
        {f.emoji}
      </span>
    ))}
  </div>
);

export default FlagsStrip;
