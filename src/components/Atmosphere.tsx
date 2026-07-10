export function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* city-glow horizon */}
      <div
        className="absolute inset-x-0 bottom-0 h-[45vh]"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 100%, rgba(79,110,150,0.14), transparent 60%)",
        }}
      />
      {/* searchlights raking the clouds */}
      <div className="beam left-[8%]" />
      <div className="beam beam-2 left-[68%]" />
      {/* rain, two depths */}
      <div className="rain-layer-far rain-layer" />
      <div className="rain-layer" />
      {/* film grain */}
      <div className="grain" />
      {/* vignette to pull the eye center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 90% at 50% 40%, transparent 55%, rgba(7,9,13,0.8) 100%)",
        }}
      />
    </div>
  );
}
