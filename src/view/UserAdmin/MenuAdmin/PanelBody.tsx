import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Box, SvgProps, Flex } from "@pkt2022/uikit";
import * as IconModule from "@pkt2022/uikit";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";
import {
  HomeFUBIICON,
  DashboardFUBIIcon,
  SwapFUBIIcon,
  InvestmentFUBIIcon,
  HistoryFUBIIcon,
  AffiliatesFUBIIcon,
  MoreFUBIIcon,
  Withdraw,
} from "../../../components/Svg";
import LogoFubi from "../../../assets/FUBIToken/coin-icon.png";
import ArrowImg from "../../../assets/dashboardFUBI/arrowGreen.svg";
import facebook from "../../../assets/fubiIcon/FB.svg";
import twitter from "../../../assets/fubiIcon/twiter.svg";
import Tele from "../../../assets/fubiIcon/tele.svg";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}
export interface PropsItem {
  secondary?: boolean;
  isActive?: boolean;
  rotate?: boolean;
  // theme: DefaultTheme;
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  justify-content: space-between;
  height: calc(100vh - 83px);
  position: relative;
`;
const Wappercontent = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
`;
const MenuEntryWapper = styled.div<PropsItem>`
  width: 90%;
  margin: 2px 15px 4px 15px;
  border-radius: 10px;
  position: relative;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 0;
  background-color: rgba(22, 22, 22, 1);
  :before {
    content: "";
    width: calc(100% + 2px);
    height: calc(100% + 4px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border-radius: 10px;
    background: ${({ isActive }) =>
      isActive
        ? `linear-gradient(to right, rgba(128, 128, 128 , 1) , rgba(12, 12, 12 , 0))`
        : "transparent"};
    z-index: -1;
  }
  @media only screen and (max-width: 641px) {
    background-color: ${({ isActive }) =>
      isActive ? `rgba(22,22,22,1)` : "transparent"};
  }
`;
const MenuEntryWapperTwo = styled.div<PropsItem>`
  width: calc(100% - 6px);
  height: 48px;
  margin: 4px 0px 2px 4px;
  border-radius: 12px;
  position: relative;
  background-color: #161616;
  :before {
    content: "";
    width: calc(100% + 1px);
    height: calc(100% + 2px);
    position: absolute;
    top: -1px;
    left: 1px;
    border-radius: 15px;
    background: ${({ isActive }) =>
      isActive
        ? `linear-gradient(to right, rgba(128, 128, 128 , 0) , rgba(128, 128, 128 , 1))`
        : "transparent"};
    z-index: -1;
  }
  @media only screen and (max-width: 641px) {
    background-color: ${({ isActive }) =>
      isActive ? `rgba(0,0,0, 0)` : "transparent"};
  }
`;
const FooterSibar = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 70px;
  min-height: 70px;
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

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();
  // Close the menu when a user clicks a link on mobile
  const handleClick = () => {
    if (!isMobile) {
      pushNav(false);
    } else {
      pushNav(true);
    }
    // pushNav(false);
  };
  // const handleClick = isMobile ? () => pushNav(false) : undefined;
  const ShowIcon = (index: number, isActive?: boolean) => {
    switch (index) {
      case 0:
        //@ts-ignore
        return <HomeFUBIICON isActive={isActive} />;
        break;
      case 1:
        //@ts-ignore
        return <DashboardFUBIIcon isActive={isActive} />;
        break;
      case 2:
        //@ts-ignore
        return <SwapFUBIIcon isActive={isActive} />;
        break;
      case 3:
        //@ts-ignore
        return <InvestmentFUBIIcon isActive={isActive} />;
        break;
      case 4:
        //@ts-ignore
        return <Withdraw isActive={isActive} />;
        break;
      case 5:
        //@ts-ignore
        return <HistoryFUBIIcon isActive={isActive} />;
        break;
      case 6:
        //@ts-ignore
        return <AffiliatesFUBIIcon isActive={isActive} />;
        break;
      case 7:
        //@ts-ignore
        return <MoreFUBIIcon isActive={isActive} />;
        break;
      default:
        <></>;
    }
  };
  const [showLink, setShowLink] = useState(false);
  const handleClickTele = () => {
    setShowLink(!showLink);
  };
  const handleClickMenu = (e: any) => {
    e.stopPropagation();
    if (showLink) {
      setShowLink(false);
    }
  };
  window.onclick = () => {
    if (showLink) {
      setShowLink(false);
    }
  };
  return (
    <Container
      onClick={(e: any) => {
        handleClickMenu(e);
      }}
    >
      <Wappercontent>
        {links.map((entry, index: number) => {
          const Icon = Icons[entry.icon];
          const iconElement = <Icon width="24px" mr="16px" />;
          let hrefElement = entry.href === location.pathname;
          const calloutClass = entry.calloutClass
            ? entry.calloutClass
            : undefined;
          if (entry.items) {
            const itemsMatchIndex = entry.items.findIndex(
              (items) => items.href === location.pathname
            );
            const initialOpenState =
              entry.initialOpenState === true
                ? entry.initialOpenState
                : itemsMatchIndex >= 0;
            return (
              <MenuEntryWapper>
                <Accordion
                  key={entry.label}
                  isPushed={isPushed}
                  pushNav={pushNav}
                  icon={iconElement}
                  label={entry.label}
                  initialOpenState={initialOpenState}
                  className={calloutClass}
                  isActive={entry.items.some(
                    (item) => item.href === location.pathname
                  )}
                >
                  {isPushed &&
                    entry.items.map((item, index) => {
                      return (
                        <MenuEntryWapperTwo
                          isActive={item.href === location.pathname}
                        >
                          <MenuEntry
                            key={item.href}
                            rotate={true}
                            secondary
                            isActive={item.href === location.pathname}
                            onClick={handleClick}
                          >
                            {item.label === "Whitepapper" ? (
                              <MenuLink href={item.href} target="_blank">
                                {item.label}
                              </MenuLink>
                            ) : (
                              <MenuLink href={item.href}>{item.label}</MenuLink>
                            )}
                          </MenuEntry>
                        </MenuEntryWapperTwo>
                      );
                    })}
                </Accordion>
              </MenuEntryWapper>
            );
          }
          return (
            <MenuEntryWapper isActive={entry.href === location.pathname}>
              <MenuEntry
                key={entry.label}
                className={calloutClass}
                isActive={entry.href === location.pathname}
                rotate={false}
              >
                <MenuLink href={entry.href} onClick={handleClick}>
                  {ShowIcon(index, hrefElement)}
                  <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
                </MenuLink>
              </MenuEntry>
            </MenuEntryWapper>
          );
        })}
      </Wappercontent>
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
                onClick={handleClickTele}
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
              <a
                className="FUBIFooterBottomItem"
                href="https://twitter.com/FuBiFinance"
                target="_blank"
              >
                <img src={twitter} alt="" />
              </a>
            </FooterBottom>
          </>
        ) : (
          <img
            src={LogoFubi}
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
        )}
      </FooterSibar>
    </Container>
  );
};

export default PanelBody;
