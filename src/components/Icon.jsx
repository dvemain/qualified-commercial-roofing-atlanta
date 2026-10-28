const paths = {
  wrench: <path d="M14.7 6.3a4 4 0 0 0 4.9 4.9l-9.2 9.2a2 2 0 0 1-2.8-2.8l9.2-9.2zM14.7 6.3L17 4l3 3-2.3 2.3" />,
  crane: <path d="M3 21h18M5 21V9l7-4 7 4v12M9 21v-5h6v5M12 5V3" />,
  gutter: <path d="M3 7h18v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zM17 13v8M17 21l-2-2M17 21l2-2" />,
  drop: <><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" /><path d="M9 14a3 3 0 0 0 3 3" /></>,
  storm: <path d="M7 16a4 4 0 0 1-.5-8 6 6 0 0 1 11.3 1.5A3.5 3.5 0 0 1 17 16h-2M13 13l-2 4h3l-2 4" />,
  alert: <path d="M12 3 2 20h20L12 3zM12 10v4M12 17.5v.5" />,
  arrow: <path d="M4 12h16M13 5l7 7-7 7" />,
  play: <path d="M7 4v16l14-8z" fill="currentColor" stroke="none" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
};

export default function Icon({ name, size = 24, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
