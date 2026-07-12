import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return undefined;

    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    const over = (event) => {
      const target = event.target;
      setActive(Boolean(target.closest("a, button, input, textarea, [role='button']")));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[60] hidden h-8 w-8 rounded-full border border-cyan/70 mix-blend-screen transition-transform duration-150 lg:block ${
        active ? "scale-150 bg-cyan/10" : "scale-100"
      }`}
      style={{ transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${active ? 1.45 : 1})` }}
      aria-hidden="true"
    />
  );
}

export default CustomCursor;
