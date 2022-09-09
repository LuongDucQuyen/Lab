import React from "react";
import { SvgProps, Svg } from "@pkt2022/uikit";

const HistoryFUBIIcon: React.FC<SvgProps> = (props:any) => {
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_88_856)">
        <path
          d="M9.52942 9.95312L8.04707 9.95312L8.04707 5.87104L9.52942 3.81195L9.52942 9.95312Z"
          fill="url(#paint0_linear_88_856)"
        />
        <path
          d="M8.04706 8.36475L8.04706 9.95298L11.2142 9.95298L12.8118 8.36475L8.04706 8.36475Z"
          fill="url(#paint1_linear_88_856)"
        />
        <path
          d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM3.42217 9C3.42217 12.0806 5.91945 14.5778 9 14.5778C12.0806 14.5778 14.5778 12.0806 14.5778 9C14.5778 5.91945 12.0806 3.42217 9 3.42217C5.91945 3.42217 3.42217 5.91945 3.42217 9Z"
          fill="url(#paint2_linear_88_856)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_88_856"
          x1="8.78824"
          y1="9.95312"
          x2="8.78824"
          y2="3.81195"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_88_856"
          x1="8.04706"
          y1="9.15886"
          x2="12.8118"
          y2="9.15886"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"}/>
        </linearGradient>
        <linearGradient
          id="paint2_linear_88_856"
          x1="14.8765"
          y1="0.42353"
          x2="9"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
          <stop offset="1" stop-color={props.isActive ? "#409FFE" : "rgba(245, 250, 255, 0.7)"} />
        </linearGradient>
        <clipPath id="clip0_88_856">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default HistoryFUBIIcon;
