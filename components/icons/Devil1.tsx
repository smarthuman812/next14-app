import React from "react";

export default function Devil1({ size = 80 }: { size?: number }) {
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
        d="M70 60 Q100 20 130 60"
        stroke="red"
        strokeWidth="6"
        fill="none"
      />
      <circle cx="80" cy="100" r="10" fill="red"/>
      <circle cx="120" cy="100" r="10" fill="red"/>
      <path
        d="M70 140 Q100 160 130 140"
        stroke="red"
        strokeWidth="6"
        fill="none"
      />
    </svg>
  );
}
