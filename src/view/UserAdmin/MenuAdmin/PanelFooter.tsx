import React, { useState } from "react";
import styled from "styled-components";
import { Box, SvgProps, Flex } from "@pkt2022/uikit";
import LogoFubi from "../../../assets/FUBIToken/coin-icon.png";
import ArrowImg from "../../../assets/dashboardFUBI/arrowGreen.svg";
import facebook from "../../../assets/fubiIcon/FB.svg";
import twitter from "../../../assets/fubiIcon/twiter.svg";
import Tele from "../../../assets/fubiIcon/tele.svg";
import { PanelProps, PushedProps } from "./types";

const FooterSibar = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 70px;
`;
const FooterTop = styled(Flex)`
  h1 {
    font-family: GilroyMedium;
    color: #ffffff;
    font-size: 18px;
    line-height: 19px;
    font-weight: 400;
  }
`;
const Logo = styled(Box)`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;
const Arrow = styled(Flex)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  img {
    width: 60%;
    height: 60%;
  }
`;
const FooterBottom = styled(Flex)`
  width: 100%;
  padding: 0px 95px;
  justify-content: space-between;
  position: relative;
  .FUBIFooterBottomItem {
    cursor: pointer;
    width: 24px;
    height: 24px;
    filter: brightness(0.7);
    transition: all 0.2s linear;
    :hover {
      filter: brightness(1);
    }
  }
  img {
    max-width: 24px;
    max-height: 24px;
  }
  .FUBIFooterBottomItemLinkTele {
    position: absolute;
    width: 80%;
    left: 10%;
    height: 180%;
    top: -200%;
    background-color: rgba(22, 22, 22, 1);
    box-shadow: inset 0px 0px 30px black;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.2s linear;
    h1 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);
      opacity: 1;
      transition: all 0.3s linear;
      transition-delay: 0.2s;
    }
  }
  .FUBIFooterBottomItemLinkTeleClose {
    width: 0px;
    height: 0px;
    top: 0%;
    left: 30%;
    transition: all 0.2s linear;
    h1 {
      opacity: 0;
      transition: all 0s linear;
    }
  }
`;

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const PanelFooter: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const [showLink, setShowLink] = useState(false);

  const handleClickTele = () => {
    setShowLink(!showLink);
  };

  return (
    <FooterSibar>
      {isPushed ? (
        <>
          <FooterTop>
            <Logo>
              <img src={LogoFubi} alt="" />
            </Logo>
            <h1>$0.01</h1>
            <Arrow>
              <img src={ArrowImg} alt="" />
            </Arrow>
          </FooterTop>
          <FooterBottom>
            <div
              className={
                showLink
                  ? "FUBIFooterBottomItemLinkTele"
                  : "FUBIFooterBottomItemLinkTele FUBIFooterBottomItemLinkTeleClose"
              }
            >
              <a href="https://t.me/FuBiOfficial" target="_blank">
                <h1>Telegram Chat : https://t.me/FuBiOfficial</h1>
              </a>
              <a href="https://t.me/FuBiMedia" target="_blank">
                <h1>Telegram Channel : https://t.me/FuBiMedia</h1>
              </a>
            </div>
            <div onClick={handleClickTele} className="FUBIFooterBottomItem">
              <img src={Tele} alt="" />
            </div>
            <a className="FUBIFooterBottomItem">
              <img src={facebook} alt="" />
            </a>
            <a className="FUBIFooterBottomItem" href="https://twitter.com/FuBiFinance" target="_blank">
              <img src={twitter} alt="" />
            </a>
          </FooterBottom>
        </>
      ) : (
        <img src={LogoFubi} alt="" style={{ width: "50px", height: "50px" }} />
      )}
    </FooterSibar>
  );
};

export default PanelFooter;
