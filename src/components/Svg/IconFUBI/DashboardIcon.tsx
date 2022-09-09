import React from "react";
import { SvgProps, Svg } from "@pkt2022/uikit";

const DashboardFUBIIcon: React.FC<SvgProps> = (props: any) => {
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 12H6V18H3C1.34315 18 0 16.6569 0 15V12Z"
        fill="url(#paint0_linear_88_892)"
      />
      <path
        d="M12 12H18V15C18 16.6569 16.6569 18 15 18H12V12Z"
        fill="url(#paint1_linear_88_892)"
      />
      <rect x="6.0354" width="6" height="6" fill="url(#paint2_linear_88_892)" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.03528 0C2.70209 5.41174e-06 0 2.7021 0 6.03529H6.03528V12.0706H12.0706V6.03529H18C18 2.73746 15.3549 0.0574056 12.0706 0.000909946V0H11.9647H6.03529C6.03529 0 6.03529 0 6.03528 0Z"
        fill="url(#paint3_linear_88_892)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_88_892"
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
          id="paint1_linear_88_892"
          x1="15"
          y1="12"
          x2="15"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_88_892"
          x1="9.0354"
          y1="0"
          x2="9.0354"
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
        <linearGradient
          id="paint3_linear_88_892"
          x1="9.05294"
          y1="0"
          x2="9.05294"
          y2="12.0706"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"}/>
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default DashboardFUBIIcon;
