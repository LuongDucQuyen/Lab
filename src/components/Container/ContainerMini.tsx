import React from "react";
import { Box, BoxProps } from "@pkt2022/uikit";
import styled from "styled-components";
const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box px="18px" mx="auto" maxWidth="1116px" width="100%" height="100%" {...props}>
      {children}
  </Box>
);

export default Container;
