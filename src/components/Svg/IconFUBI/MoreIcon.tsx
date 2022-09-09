import React from "react";
import { SvgProps, Svg } from "@pkt2022/uikit";

const MoreFUBIIcon: React.FC<SvgProps> = (props: any) => {
  return (
    <Svg
      width="18"
      height="13"
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.105957"
        y="6.89404"
        width="6"
        height="6"
        fill="url(#paint0_linear_88_921)"
      />
      <rect
        x="12"
        y="0.858887"
        width="6"
        height="6"
        fill="url(#paint1_linear_88_921)"
      />
      <rect
        x="6.0354"
        y="3.9292"
        width="6"
        height="6"
        fill="url(#paint2_linear_88_921)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_88_921"
          x1="3.10596"
          y1="6.89404"
          x2="3.10596"
          y2="12.894"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_88_921"
          x1="15"
          y1="0.858887"
          x2="15"
          y2="6.85889"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_88_921"
          x1="9.0354"
          y1="3.9292"
          x2="9.0354"
          y2="9.9292"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default MoreFUBIIcon;
