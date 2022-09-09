import React from "react";
import { Box, BoxProps } from "@pkt2022/uikit";

const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box pl='36px' pr='30px' mx="auto" maxWidth="1440px" width="100%" height="100%" {...props}>
    {children}
  </Box>
);

export default Container;
