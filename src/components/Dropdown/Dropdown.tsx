import React from "react";
import styled from "styled-components";
import { DropdownProps, PositionProps, Position } from "./types";
import { Box } from "@pkt2022/uikit";

const getLeft = ({ position }: PositionProps) => {
  if (position === "top-right") {
    return "100%";
  }
  return "50%";
};

const getBottom = ({ position }: PositionProps) => {
  if (position === "top" || position === "top-right") {
    return "100%";
  }
  return "auto";
};

const DropdownContent = styled.div<{ position: Position }>`
  width: max-content;
  display: block;
  flex-direction: column;
  position: absolute;
  transform: translate(-90%, 10%);
  left: ${getLeft};
  bottom: ${getBottom};
  background: rgba(255, 255, 255, 0.56);
  border: 0.3805px solid rgba(245, 239, 235, 0.4);
  box-shadow: 0px 48.704px 48.704px -24.352px #9cd1f8;
  backdrop-filter: blur(121.76px);
  border-radius: 12.176px;
  padding: 16px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 10;
  border-radius: 8px;
  opacity: 0;
  visibility: hidden;
`;

const Container = styled.div`
  position: relative;
  transition: 0.3s ease;

  &:hover ${DropdownContent}, &:focus-within ${DropdownContent} {
    opacity: 1;
    visibility: visible;
    max-height: 400px;
    overflow-y: auto;
    transition: max-height 0s ease 0s, opacity 0.3s ease-in-out 0s;
    pointer-events: auto;
    transform: translate(-90%, 0%);
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ target, position = "bottom", children }) => {
  return (
    <Container>
      <Box pb='6px'>{target}</Box>
      <DropdownContent position={position}>{children}</DropdownContent>
    </Container>
  );
};

export default Dropdown;
