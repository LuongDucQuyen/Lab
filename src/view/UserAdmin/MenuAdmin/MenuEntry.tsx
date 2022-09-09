import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  rotate?: boolean;
  // theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: ${({ isPushed }) => (isPushed ? "#CFD9E6" : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
  :hover {
    color: #fff;
  }
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: black;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ secondary }) =>
    secondary ? "transparent" : "#161616"};
  color: #cfd9e6;
  height: 46px;
  /*box-shadow: ${({ isActive }) =>
    isActive ? `inset 4px 0px 0px #fff` : "none"};*/
  transition: 0.3s linear;
  border-radius: 10px;
  position: relative;
  z-index: 10;
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #cfd9e6;
  }

  svg {
    fill: auto;
    margin-right: 30px;
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: "none";
    background-size: 400% 100%;
  }
  :after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 10%;
    height: 100%;
    border-radius: 0px 0px 0px 20px;
    border-left: 2px solid #656565;
    border-bottom: 2px solid #656565;
    left: -2.5%;
    top: -50%;
    display: ${({ rotate }) =>
    rotate ? `block` : `none`};
  }
  @media only screen and (max-width: 640px) {
    background-color: rgba(22,22,22,1);
    color: #fafbfc;
    a {
      color: #fafbfc;
    }
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkLabelMemo = React.memo(
  LinkLabel,
  (prev, next) => prev.isPushed === next.isPushed
);

export { MenuEntry, LinkLabelMemo as LinkLabel };
