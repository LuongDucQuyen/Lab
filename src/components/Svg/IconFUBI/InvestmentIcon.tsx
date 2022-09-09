import React from "react";
import { SvgProps, Svg } from "@pkt2022/uikit";

const InvestmentFUBIIcon: React.FC<SvgProps> = (props:any) => {
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g >
        <path
          d="M6.29995 5.9292L-2.59183e-07 -0.000213146L11.9647 -0.000213669L18 5.9292L6.29995 5.9292Z"
          fill="url(#paint0_linear_51_1345)"
        />
        <path
          d="M6.29995 18L-2.59183e-07 12.0706L11.9647 12.0706L18 18L6.29995 18Z"
          fill="url(#paint1_linear_51_1345)"
        />
        <path
          d="M7.36067 10.9058L3.53571 7.30576L10.8 7.30576L14.4643 10.9058L7.36067 10.9058Z"
          fill="url(#paint2_linear_51_1345)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_51_1345"
          x1="-1.29591e-07"
          y1="2.96449"
          x2="18"
          y2="2.96449"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_51_1345"
          x1="-1.29591e-07"
          y1="15.0353"
          x2="18"
          y2="15.0353"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_51_1345"
          x1="3.53571"
          y1="9.10576"
          x2="14.4643"
          y2="9.10576"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"} />
          <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"} />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default InvestmentFUBIIcon;
