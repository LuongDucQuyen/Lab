import React from "react";
import { SvgProps, Svg } from "@pkt2022/uikit";

const SwapFUBIIcon: React.FC<SvgProps> = (props:any) => {
  return (
    <Svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 6.64453L-2.60716e-07 0.680043L12.0355 0.680042L18.1065 6.64453L0 6.64453Z" fill="url(#paint0_linear_88_881)"/>
      <path d="M18.1064 12.7158L18.1064 18.6803L6.07095 18.6803L-3.43323e-05 12.7158L18.1064 12.7158Z" fill="url(#paint1_linear_88_881)"/>
      <defs>
      <linearGradient id="paint0_linear_88_881" x1="-1.30358e-07" y1="3.66229" x2="18.1065" y2="3.66229" gradientUnits="userSpaceOnUse">
      <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"}/>
      <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"}/>
      </linearGradient>
      <linearGradient id="paint1_linear_88_881" x1="18.1064" y1="15.6981" x2="-3.44626e-05" y2="15.6981" gradientUnits="userSpaceOnUse">
      <stop stop-color={props.isActive ? "#3EA2FF" : "rgba(245, 250, 255, 0.7)"}/>
      <stop offset="1" stop-color={props.isActive ? "#7743E6" : "rgba(245, 250, 255, 0.2)"}/>
      </linearGradient>
      </defs>
    </Svg>

  );
};

export default SwapFUBIIcon;
