import React from "react";
import styled from "styled-components";
import { Box, Flex, Heading } from "@pkt2022/uikit";
import { Link } from "react-router-dom";
import PanelBody from "./PanelBody";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { PanelProps, PushedProps } from "./types";
import { Row } from "../../../components/Layout";
//
import IconMenu from "../../../assets/dashboardFUBI/iconmenumobile.svg";
import Notifi from "../../../assets/notificationFUBI.svg";
import PolygonDown from "../../../assets/PolygonDownFUBI.svg";
import SetingIcon from "../../../assets/SettingFUBI.svg";
import SearchIcon from "../../../assets/SearchIconFUBI.svg";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}
const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  /* padding-top: ${({ showMenu }) => (showMenu ? "80px" : 0)}; */
  left: 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  bottom: 0px;
  background: rgba(22, 22, 22, 1);

  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  /*height: calc(100vh - 70px);*/
  min-height:calc(100vh - 70px);
  transition: padding-top 0.2s, width 0.2s;
  border-right: ${({ isPushed }) =>
    isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0};
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  @media only screen and (min-width: 1200px) {
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    width: ${({ isPushed }) =>
      `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
  @media screen and (max-width: 641px) {
    background: rgba(22, 22, 22, 1);
    top: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 11111111111;
    height: auto;
    bottom: 0px;
    background-color: #161616;
    border: 2px solid #262626;
    box-shadow: inset 0px 40px 50px #000000;
  }
  :after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -3;
    background-color: rgba(128,128,128 ,0.2);
    display: none;
  }
  :before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vh;
    height: 100vh;
    z-index: -1;
    background: rgba(0, 0, 0, 0.5);
    display: none;
  }
  @media only screen and (max-width: 641px) {
    :before , :after {
      display: block;
    }

  }
`;

const HeaderMenuMobile = styled(Flex)`
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;
  button {
    width: 50px;
    height: 50px;
    border-radius: 0px 50px 50px 0px;
    border: none;
    background: linear-gradient(132.76deg, #8941fd 0%, #3ba6ff 100%),
      radial-gradient(
          63.11% 63.11% at 31.97% 19.67%,
          rgba(255, 255, 255, 0.7) 0%,
          rgba(255, 255, 255, 0) 69.79%,
          rgba(255, 255, 255, 0) 100%
        )
        #2f80ed;
  }
`;
const HeaderMenuMobileRight = styled(Flex)`
  img {
    margin: 0px 10px;
  }
  .HeaderMenuMobileLGsetting {
    margin-right: 36px;
  }
`;
const HeaderMenuMobileLG = styled(Flex)`
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  padding: 10px 16px;
  margin-right: 10px;
  h1 {
    margin-right: 10px;
    color: #cfd9e6;
    font-size: 14px;
    line-height: 28px;
    font-weight: 500;
  }
`;

const InputMenuMobileft = styled(Box)`
  width: 100%;
  padding: 16px 16px 8px 16px;
  position: relative;
  input {
    width: 100%;
    height: 56px;
    background-color: #262626;
    border-radius: 28px;
    border: 2px solid #656565;
    outline: none;
    ::placeholder {
      color: #ffffff;
    }
    padding-left: 20%;
    color: #ffffff;
    box-shadow: inset 0px 11px 13px #000000;
  }
  img {
    position: absolute;
    top: calc(50% + 4px);
    left: 13%;
    transform: translateY(-50%);
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu, pushNav } = props;
  return (
    <StyledPanel
      isPushed={isPushed}
      showMenu={showMenu}
      onClick={() => {
        pushNav(true);
      }}
    >
      {window.outerWidth < 641 ? (
        <>
          <HeaderMenuMobile
            onClick={(e: any) => {
              e.stopPropagation();
            }}
          >
            <button
              onClick={() => {
                pushNav(true);
              }}
            >
              <img src={IconMenu} />
            </button>
            <HeaderMenuMobileRight>
              <HeaderMenuMobileLG>
                <h1>EN</h1>
                <img src={PolygonDown} />
              </HeaderMenuMobileLG>
              <img src={Notifi} />
              <img className="HeaderMenuMobileLGsetting" src={SetingIcon} />
            </HeaderMenuMobileRight>
          </HeaderMenuMobile>
          {/* <InputMenuMobileft
            onClick={(e: any) => {
              e.stopPropagation();
            }}
          >
            <input type="text" placeholder="Search..." />
            <img src={SearchIcon} />
          </InputMenuMobileft> */}
        </>
      ) : (
        <></>
      )}
      <Box mb="12px" width="100%" height="1px" />
      <PanelBody {...props} />
    </StyledPanel>
  );
};

export default Panel;
