import React from "react";

export default function Devil2({ size = 80 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      fill="none"
    >
      <circle cx="100" cy="100" r="90" fill="black" stroke="red" strokeWidth="6"/>
      <path
        d="M50 80 Q100 20 150 80"
        stroke="red"
        strokeWidth="6"
        fill="none"
      />
      <rect x="70" y="110" width="60" height="25" rx="5" fill="red"/>
      <path
        d="M100 135 L100 170"
        stroke="red"
        strokeWidth="6"
      />
      <path
        d="M85 170 Q100 190 115 170"
        stroke="red"
        strokeWidth="6"
        fill="none"
      />
    </svg>
  );
}
