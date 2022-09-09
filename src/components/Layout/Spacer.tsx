import React from "react";
import { Box, BoxProps } from "@pkt2022/uikit";

const Spacer: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box py={["30px", "60px"]} height="100%" width="100%" {...props}>
    {children}
  </Box>
);

export default Spacer;
