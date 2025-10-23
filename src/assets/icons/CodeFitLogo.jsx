import React from "react";

const CodeFitLogo = ({ size = 120, color = "#ff3b3b" }) => (
  <svg
    width={size}
    height={size / 3}
    viewBox="0 0 200 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Bracket { */}
    <path
      d="M40 10 L30 10 L30 25 L20 25 L20 35 L30 35 L30 50 L40 50"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Bar */}
    <line x1="40" y1="30" x2="160" y2="30" stroke={color} strokeWidth="4" />

    {/* Grip Circle (center) */}
    <circle cx="100" cy="30" r="6" fill={color} />

    {/* Right Bracket } */}
    <path
      d="M160 10 L170 10 L170 25 L180 25 L180 35 L170 35 L170 50 L160 50"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CodeFitLogo;
