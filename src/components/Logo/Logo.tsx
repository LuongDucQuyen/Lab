import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "@pkt2022/uikit";
import LogoPktDesktop from "../../assets/Logo/LogoPkt.svg";
import LogoPktMini from "../../assets/Logo/LogoPkt.svg";

interface LogoProps {
  href: string;
  isWhite?: boolean;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 0.3s ease;

  /* &:hover {
    transform: rotate(-5deg);
  } */
`;

const IconOrbit = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const Logo: React.FC<LogoProps> = ({ href, isWhite }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {isWhite ? (
        <IconOrbit src={LogoPktDesktop} alt="icon-orbit" className="desktop-icon" />
      ) : (
        <IconOrbit src={LogoPktMini} alt="icon-orbit" className="desktop-icon" />
      )}
    </>
  );

  return (
    <Flex mr="10px">
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label=" home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label=" home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
