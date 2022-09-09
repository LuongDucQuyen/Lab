import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actHandleLogout } from "../../../redux/actions/UserManagerAction";
import { Overlay } from "../../../components/Overlay";
import { Flex, useMatchBreakpoints, Box, ButtonV1, IconButton } from "@pkt2022/uikit";
// import { useMatchBreakpoints } from "../../hooks";
// import Logo from "./components/Logo";
import Panel from "./Panel";
// import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
import { ContainerMini } from "../../../components/Container";
import { Dropdown } from "../../../components/Dropdown";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import HeaderFUBI from "./headerFUBI";
import PannerHome from "../../../assets/pannerHomeFUBI.svg";
import PopUpInvestment from "../../../components/PopUpBuyInvesment";

//pannerDashboardFUB

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 0;

  .dropdown-btn {
    font-size: 12px;
    height: 28px;
    padding: 0 12px;
    color: black;
  }
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
  height: calc(100vh - 70px);
  top: 70px;
  position: relative;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: #262626;
  z-index: 30000;
 `;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean ; showBg: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  max-width: 100%;
  min-height: calc(100vh + 1px);
  height: fit-content;
  background-size: contain;
  background-repeat: no-repeat;
  position:relative;
  padding-bottom: 70px;
  z-index: 10;
  :before {
    content: "";
    background-size: cover;
    position: absolute;
    background-repeat: no-repeat;
    background-image: url("./assets/GridBackgroundFUBI.svg");
    background-size: 500%;
    background-position: center center;
    width: calc(100% + 332px);
    height: 100%;
    left: -332px;
    opacity: 0.02;
    z-index: -1;
  }
  :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 420px;
    z-index: -101;
    top: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url("${PannerHome}");
  }

  @media only screen and (max-width: 640px) {
    :after {
      display: ${({ showBg }) => (showBg ? `block` : `none`)};
    }
  }

  @media only screen and (min-width: 1200px) {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }

  @media only screen and (max-width: 830px) {
    background-size: initial;
    background-position: top center;
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

const Default: React.FC = () => {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(actHandleLogout());
    history.replace("/");
  };
  return (
    <div>
      <Dropdown
        position="bottom"
        target={
          <Box width="40px" pt="10px">
            {/* <Picture url={DemoAd} /> */}
          </Box>
        }
      >
        <Flex justifyContent="center" flexDirection="column">
          <Box pb="14px">
            <Link to="/office/setting">Profile</Link>
          </Box>
          <ButtonV1 className="dropdown-btn" variant="success" onClick={() => handleLogout()}>
            <Link to="/sign-in">Đăng xuất</Link>
          </ButtonV1>
        </Flex>
      </Dropdown>
    </div>
  );
};

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);
  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);
  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");
  return (
    <>
    <Wrapper>
      <HeaderFUBI
        ShowPanel={() => {
          setIsPushed(!isPushed);
        }}
      ></HeaderFUBI>
      {/* @ts-ignore */}
      <BodyWrapper >
          <Panel
            isPushed={isPushed}
            isMobile={isMobile}
            showMenu={showMenu}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            cakePriceUsd={cakePriceUsd}
            pushNav={() => {
              setIsPushed(!isPushed);
            }}
            links={links}
          />
          <Inner isPushed={isPushed} showMenu={showMenu} showBg={window.location.pathname === "/"}>
            <ContainerMini>{children}</ContainerMini>
          </Inner>
        {/* <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" /> */}
      </BodyWrapper>
    </Wrapper>
    <PopUpInvestment></PopUpInvestment>
    </>
  );
};

export default Menu;
