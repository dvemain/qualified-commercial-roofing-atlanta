import { useEffect, useState } from "react";

/** Hamburger + slide-down panel, shown only at mobile widths (see .mnav in styles.css). */
export default function MobileMenu({ links, phone, phoneHref, ctaHref, ctaLabel }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="mnav">
      <button
        type="button"
        className="mnav-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
        </svg>
      </button>

      {open && <div className="mnav-backdrop" onClick={() => setOpen(false)} />}

      <nav id="mobile-menu" className={"mnav-panel" + (open ? " is-open" : "")} aria-label="Mobile" aria-hidden={!open}>
        {links.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)} aria-current={n.current ? "page" : undefined}>
            {n.label}
          </a>
        ))}
        <div className="mnav-foot">
          <a className="mnav-phone" href={phoneHref}>{phone}</a>
          <a className="mnav-cta" href={ctaHref} onClick={() => setOpen(false)}>{ctaLabel}</a>
        </div>
      </nav>
    </div>
  );
}
