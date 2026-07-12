import { socialLinks } from "../data/portfolio.js";

function SocialLinks({ className = "", iconOnly = false }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          className="group inline-flex h-11 items-center gap-2 rounded-full border border-line bg-paper/70 px-4 text-sm font-bold text-ink outline-none transition hover:border-cobalt/40 hover:bg-cobalt/5 focus-visible:ring-2 focus-visible:ring-cobalt"
        >
          <Icon className="text-lg text-cobalt transition group-hover:scale-110" aria-hidden="true" />
          {!iconOnly && <span>{label}</span>}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
