import { FaArrowUp } from "react-icons/fa";
import SocialLinks from "./SocialLinks.jsx";

function Footer() {
  const year = new Date().getFullYear();
  const backToTop = () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-line bg-paper/35 px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-black tracking-tight text-ink">Ashwin Madhav A</p>
          <p className="mt-1 text-sm font-bold text-muted">AI/ML Engineer and Python Developer</p>
          <p className="mt-3 text-sm text-muted">Copyright {year}. Designed and developed with React</p>
        </div>
        <div className="flex items-center gap-3">
          <SocialLinks iconOnly />
          <button
            type="button"
            onClick={backToTop}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper text-cobalt outline-none transition hover:border-cobalt/40 hover:bg-cobalt/5 focus-visible:ring-2 focus-visible:ring-cobalt"
            aria-label="Back to top"
          >
            <FaArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
