// components/graphics/CartDevil.tsx
export default function CartDevil(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 200" {...props}>
      <defs>
        <linearGradient id="g3" x1="0" x2="1">
          <stop offset="0" stopColor="#7a0a0a" />
          <stop offset="1" stopColor="#e01010" />
        </linearGradient>
      </defs>

      {/* персонаж */}
      <circle cx="90" cy="90" r="38" fill="url(#g3)" />
      <path d="M70,62 l-14,-16 20,6 z" fill="#e01010" />
      <path d="M110,62 l14,-16 -20,6 z" fill="#e01010" />
      <rect x="70" y="120" width="80" height="14" rx="7" fill="#e01010" />

      {/* тележка */}
      <g transform="translate(160,90)">
        <rect x="0" y="10" width="120" height="50" rx="8" fill="#1a1a1a" stroke="#ff2b2b" />
        <circle cx="20" cy="70" r="10" fill="#111" stroke="#ff2b2b" />
        <circle cx="100" cy="70" r="10" fill="#111" stroke="#ff2b2b" />
        {/* монетки */}
        <g fill="#ffbf3b">
          <circle cx="25" cy="28" r="6">
            <animate attributeName="cy" values="28;20;28" dur="1.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="55" cy="28" r="6">
            <animate attributeName="cy" values="28;18;28" dur="1.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="85" cy="28" r="6">
            <animate attributeName="cy" values="28;22;28" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>
    </svg>
  );
}
