import React from "react";
import styled, { keyframes } from "styled-components";
import { InjectedModalProps, Flex } from "@pkt2022/uikit";

interface Props extends InjectedModalProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
}

const opaci = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    
  }
`;

const StyledModal = styled.div`
  background: transparent;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  /* border: 1px solid blue; */
  /* border-radius: 32px; */
  width: fit-content;
  z-index: 10;
  overflow-y: auto;
  /* transition: all 0.5s ease; */
  animation: 0.3s ease-in-out 0s 1 normal forwards running ${opaci};
  will-change: opacity;
  opacity: 0;
  margin: 0 auto;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9eaeb;
  align-items: center;
  padding: 12px 24px;
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
}) => <StyledModal>{children}</StyledModal>;

export default Modal;
