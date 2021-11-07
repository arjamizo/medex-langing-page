import React from "react";

interface BackgroundCircleSVGProps {
  className?: string;
  style?: React.CSSProperties;
}

export const BackgroundCircleSVG = ({
  className,
}: BackgroundCircleSVGProps) => {
  return (
    <svg
      width="825"
      height="741"
      className={className}
      viewBox="0 0 825 741"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M371.549 219.985C363.068 244.937 342.33 263.612 319.426 281.234C292.486 301.962 268.526 328.476 227.503 330.813C184.344 333.272 137.305 316.758 99.7626 293.747C63.2896 271.392 34.1767 239.873 25.5997 207.061C17.7712 177.113 47.7311 155.685 56.4701 128.129C64.985 101.281 51.0428 66.4805 76.0372 48.0249C101.765 29.0276 145.413 28.5474 185.045 33.1918C222.499 37.581 256.919 54.3709 289.137 72.998C320.881 91.3513 352.603 111.725 367.82 138.865C383.058 166.043 380.253 194.379 371.549 219.985Z"
        fill="#C4DAF1"
      />
      <circle
        cx="456.711"
        cy="372.612"
        r="367.612"
        fill="url(#paint0_linear_1055:750)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1055:750"
          x1="89.0996"
          y1="5.00061"
          x2="1186.87"
          y2="461.424"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1565FF" />
          <stop offset="1" stopColor="#003498" />
        </linearGradient>
      </defs>
    </svg>
  );
};
