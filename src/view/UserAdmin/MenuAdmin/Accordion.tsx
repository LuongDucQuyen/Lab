import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { LinkLabel, MenuEntry } from "./MenuEntry";
import { PushedProps } from "./types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../../components/Svg";
import { MoreFUBIIcon } from "../../../components/Svg";

interface Props extends PushedProps {
  label?: string;
  icon?: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  children: ReactNode;
  isActive?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
  width: 100%;
`;

const AccordionContent = styled.div<{
  isOpen: boolean;
  isPushed: boolean;
  maxHeight: number;
}>`
  max-height: ${({ isOpen, maxHeight }) =>
    isOpen ? `${maxHeight + 30}px` : 0};
  transition: max-height 0.3s ease-out;
  border-radius: 0px 0px 0px 20px;
  overflow: hidden;
  color: #fff;
  width: 90%;
  margin-left: 10%;
  position: relative;
  .MenuSiderBarChirensTwo {
    padding-left: 10%;
    position: relative;
    z-index: 1;
  }
  :before {
    content: "";
    height: 82.5%;
    width: 2px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #656565;
  }
`;

const Accordion: React.FC<Props> = ({
  label,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
  isActive,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <Container>
      <MenuEntry
        onClick={handleClick}
        className={className}
        isActive={isActive}
      >
        {/* @ts-ignore */}
        <MoreFUBIIcon isActive={isActive}/>
        <LinkLabel isPushed={isPushed}>{label}</LinkLabel>
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default React.memo(
  Accordion,
  (prev, next) => prev.isPushed === next.isPushed
);
