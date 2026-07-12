function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#f7f7f7]" />
      <div className="absolute inset-0 bg-paper-grid bg-[size:64px_64px] opacity-45" />
      <div className="absolute inset-x-0 top-0 h-32 border-b border-line/70 bg-white/55" />
      <div className="flow-line absolute left-0 top-28 h-px w-full bg-gradient-to-r from-transparent via-cobalt/60 to-transparent" />
      <div className="ambient-sweep absolute right-[-24%] top-[10%] h-64 w-[82%] -rotate-6 bg-[linear-gradient(90deg,transparent,rgba(125,162,169,0.28),rgba(125,162,169,0.08),transparent)] blur-2xl" />
      <div className="ambient-sweep absolute left-[16%] top-[58%] h-32 w-[72%] rotate-3 bg-[linear-gradient(90deg,transparent,rgba(125,162,169,0.13),transparent)] blur-xl [animation-delay:-5s]" />
      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-[linear-gradient(180deg,transparent,rgba(247,247,247,0.9))]" />
    </div>
  );
}

export default BackgroundEffects;
