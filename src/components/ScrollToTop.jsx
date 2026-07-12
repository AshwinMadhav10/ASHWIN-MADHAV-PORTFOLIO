import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-30 grid h-12 w-12 place-items-center rounded-full border border-cobalt/40 bg-cobalt text-ink shadow-card outline-none transition hover:bg-green focus-visible:ring-2 focus-visible:ring-cobalt ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-label="Back to top"
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  );
}

export default ScrollToTop;
