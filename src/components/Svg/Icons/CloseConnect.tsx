import React from "react";
import { SvgProps, Svg } from "@pkt2022/uikit";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="#fff" {...props}>
      <path
        d="M14.8275 0L9 5.8275L3.1725 0L0 3.1725L5.8275 9L0 14.8275L3.1725 18L9 12.1725L14.8275 18L18 14.8275L12.1725 9L18 3.1725L14.8275 0Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
