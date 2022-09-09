import React from "react";
import { SvgProps, Svg } from "@pkt2022/uikit";

const AffiliatesFUBIIcon: React.FC<SvgProps> = (props:any) => {
    return (
        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g >
        <g clip-path="url(#clip0_51_1359)">
        <path d="M18 18L18 11.9647L6.03528 11.9647L0 18L18 18Z" fill="url(#paint0_linear_51_1359)"/>
        <path d="M18 6.03516L18 11.9646L6.03528 11.9646L0 6.03516L18 6.03516Z" fill="url(#paint1_linear_51_1359)"/>
        <path d="M0 2.38964e-06L-2.63811e-07 6.03529L11.9647 6.03529L18 7.86805e-07L0 2.38964e-06Z" fill="url(#paint2_linear_51_1359)"/>
        </g>
        </g>
        <defs>
        <linearGradient id="paint0_linear_51_1359" x1="0" y1="18" x2="18.4765" y2="11.9647" gradientUnits="userSpaceOnUse">
        <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"}/>
        <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"}/>
        </linearGradient>
        <linearGradient id="paint1_linear_51_1359" x1="18" y1="8.99986" x2="1.29591e-07" y2="8.99986" gradientUnits="userSpaceOnUse">
        <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"}/>
        <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"}/>
        </linearGradient>
        <linearGradient id="paint2_linear_51_1359" x1="-1.31906e-07" y1="3.01765" x2="18" y2="3.01765" gradientUnits="userSpaceOnUse">
        <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"}/>
        <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"}/>
        </linearGradient>
        <clipPath id="clip0_51_1359">
        <rect width="18" height="18" fill="white"/>
        </clipPath>
        </defs>
        </Svg>
    );
  };
  
  export default AffiliatesFUBIIcon;