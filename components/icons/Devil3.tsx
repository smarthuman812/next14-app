import React from "react";

export default function Devil3({ size = 80 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      fill="none"
    >
      <circle cx="100" cy="100" r="90" fill="black" stroke="red" strokeWidth="6"/>
      <polygon points="70,40 100,10 130,40" fill="red"/>
      <circle cx="80" cy="100" r="12" fill="red"/>
      <circle cx="120" cy="100" r="12" fill="red"/>
      <rect x="75" y="130" width="50" height="20" rx="4" fill="red"/>
    </svg>
  );
}
