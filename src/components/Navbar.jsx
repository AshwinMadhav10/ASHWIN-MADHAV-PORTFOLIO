import { useEffect, useState } from "react";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import { navLinks, resumeUrl } from "../data/portfolio.js";

function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled ? "border-b border-line/80 bg-paper/88 shadow-card backdrop-blur-xl" : "bg-canvas/35 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => goTo("home")}
          className="group flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
          aria-label="Go to home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cobalt to-green text-sm font-black text-ink transition group-hover:scale-105">
            AM
          </span>
          <span className="hidden text-sm font-black tracking-tight text-ink sm:block">Ashwin Madhav A</span>
        </button>

        <div className="hidden items-center rounded-full border border-line/80 bg-paper/70 p-1 shadow-card backdrop-blur-xl lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goTo(link.id)}
              className={`rounded-full px-3.5 py-2 text-sm font-bold outline-none transition focus-visible:ring-2 focus-visible:ring-cobalt ${
                activeSection === link.id
                  ? "bg-cobalt text-ink"
                  : "text-muted hover:bg-canvas/60 hover:text-ink"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={resumeUrl}
            download
            className="btn-primary"
          >
            <FaDownload aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper/80 text-ink outline-none transition hover:border-cobalt/50 focus-visible:ring-2 focus-visible:ring-cobalt lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper/96 px-5 py-5 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => goTo(link.id)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-bold outline-none transition focus-visible:ring-2 focus-visible:ring-cobalt ${
                  activeSection === link.id ? "bg-cobalt text-ink" : "text-muted hover:bg-canvas/60 hover:text-ink"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={resumeUrl}
              download
              className="btn-primary mt-3"
            >
              <FaDownload aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
