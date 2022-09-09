import React from "react";
import { Box, BoxProps } from "@pkt2022/uikit";

const BoxPadding: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box px={["10px", "16px"]} height="100%" width="100%" {...props}>
    {children}
  </Box>
);

export default BoxPadding;
