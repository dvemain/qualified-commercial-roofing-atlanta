/**
 * Qualified Commercial Roofing of Atlanta — brand mark.
 * A "Q" ring whose counter is a commercial parapet-and-gable roofline; the tail
 * of the Q doubles as a check mark ("qualified"). Pure geometry, 2 colors,
 * legible at 16px (favicon) and at 400px (signage).
 */
export function Mark({ size = 48, ink = "var(--ink)", accent = "var(--accent)", title }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {/* Q ring, open at the lower right where the tail/check exits */}
      <path
        d="M37.5 52.7A22 22 0 1 1 50.7 39.5"
        fill="none"
        stroke={ink}
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* roofline inside the counter: parapet + gable */}
      <path
        d="M17 36h6l7-9 7 9h6"
        fill="none"
        stroke={accent}
        strokeWidth="5.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* tail of the Q as a check mark */}
      <path
        d="M36 45l6 6 13-13"
        fill="none"
        stroke={accent}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wordmark({ dark = false }) {
  return (
    <span className={"wordmark" + (dark ? " wordmark-dark" : "")}>
      <span className="wordmark-top">Qualified</span>
      <span className="wordmark-mid">Commercial Roofing</span>
      <span className="wordmark-sub">of Atlanta</span>
    </span>
  );
}

export default function Logo({ dark = false, size = 52 }) {
  return (
    <a className="brand" href="#top" aria-label="Qualified Commercial Roofing of Atlanta — home">
      <Mark size={size} ink={dark ? "var(--paper)" : "var(--ink)"} />
      <Wordmark dark={dark} />
    </a>
  );
}
