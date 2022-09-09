import React from "react";
import { SvgProps, Svg } from "@pkt2022/uikit";

const Withdraw: React.FC<SvgProps> = (props: any) => {
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1018_1639)">
        <rect
          y="11.9648"
          width="18"
          height="6.03529"
          fill="url(#paint0_linear_1018_1639)"
        />
        <path
          d="M9.10596 0L12.9177 0L12.9177 7.95302L9.10596 11.9647L9.10596 0Z"
          fill="url(#paint1_linear_1018_1639)"
        />
        <path
          d="M9.10596 0L5.08243 0L5.08243 7.95302L9.10596 11.9647L9.10596 0Z"
          fill="url(#paint2_linear_1018_1639)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1018_1639"
          x1="9"
          y1="11.9648"
          x2="9"
          y2="18.0001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1018_1639"
          x1="11.0118"
          y1="0"
          x2="11.0118"
          y2="11.9647"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1018_1639"
          x1="7.09419"
          y1="0"
          x2="7.09419"
          y2="11.9647"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
        <clipPath id="clip0_1018_1639">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Withdraw;
