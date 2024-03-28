import React from "react";

export const Loader = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#0096FF"
        strokeWidth="3"
        fill="none"
      >
        <animate
          attributeName="stroke-dasharray"
          attributeType="XML"
          from="0, 251.2"
          to="251.2, 0"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          attributeType="XML"
          from="0"
          to="-251.2"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};
