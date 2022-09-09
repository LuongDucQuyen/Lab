import React from "react";
import { Box, BoxProps } from "@pkt2022/uikit";

const BoxPkt: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box height="100%" width="100%" {...props}>
    {children}
  </Box>
);

export default BoxPkt;
