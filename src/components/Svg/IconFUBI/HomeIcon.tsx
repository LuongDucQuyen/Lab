import React from "react";
import { SvgProps, Svg } from "@pkt2022/uikit";

const HomeIcon: React.FC<SvgProps> = (props:any) => {
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" width="6" height="6" fill={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
      <rect x="12" y="6" width="6" height="6" fill={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
      <rect y="6" width="6" height="6" fill={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
      <rect y="12" width="6" height="6" fill="url(#paint0_linear_51_1274)" />
      <rect
        x="12"
        y="12"
        width="6"
        height="6"
        fill="url(#paint1_linear_51_1274)"
      />
      <rect
        x="6"
        y="6"
        width="6"
        height="6"
        fill="url(#paint2_linear_51_1274)"
      />
      <path d="M12 0L18 6H12V0Z" fill={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
      <path d="M6 0L-5.24537e-07 6L6 6L6 0Z" fill={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
      <defs>
        <linearGradient
          id="paint0_linear_51_1274"
          x1="3"
          y1="12"
          x2="3"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_51_1274"
          x1="15"
          y1="12"
          x2="15"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"}  />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_51_1274"
          x1="9"
          y1="6"
          x2="9"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default HomeIcon;
