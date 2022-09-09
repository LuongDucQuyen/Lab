import { Box, Flex, useMatchBreakpoints, useModal } from "@pkt2022/uikit";
import React, { useState } from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";

import { useActiveWeb3React } from "../../../../hooks";
import Arrow from "../../../../assets/ArrowFUBI.svg";
import LOGOFUBI from "../../../../assets/LOGOFUBI.svg";
import PolygonDown from "../../../../assets/PolygonDownFUBI.svg";
import SearchIcon from "../../../../assets/SearchIconFUBI.svg";
import NotificationFUBI from "../../../../assets/notificationFUBI.svg";
import SettingIcon from "../../../../assets/SettingFUBI.svg";
import Iconmenu from "../../../../assets/dashboardFUBI/iconmenumobile.svg";
import ConnectWallet from "../../../../components/Connect-wallet/ConnectWallet";
import { ConnectWalletCusom } from "../../../../components/ConnectWalletCustom";

const BtnConnect = styled.button`
  margin: 0px 20px;
  width: 165px;
  height: 50px;
  background: linear-gradient(275.2deg, #37abff 1.74%, #8a3ffc 97.49%),
    radial-gradient(
      63.11% 63.11% at 31.97% 19.67%,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0) 69.79%,
      rgba(255, 255, 255, 0) 100%
    ),
    #2f80ed;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 110%;
`;

const HeaderContainer = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #161616;
  height: 70px;
  z-index: 999999999999999;
  border-bottom: 2px solid #262626;
  justify-content: space-between;
  z-index: 2;
`;
const HeaderLeft = styled(Flex)`
  align-items: center;
  button {
    width: 50px;
    height: 50px;
    min-width: 50px;
    min-height: 50px;
    background: linear-gradient(132.76deg, #8941fd 0%, #3ba6ff 100%),
      radial-gradient(
          63.11% 63.11% at 31.97% 19.67%,
          rgba(255, 255, 255, 0.7) 0%,
          rgba(255, 255, 255, 0) 69.79%,
          rgba(255, 255, 255, 0) 100%
        )
        #2f80ed;
    border-radius: 0% 50% 50% 0%;
    border: none;
  }
  .butonHeaderShow {
    transform: rotateY(180deg);
  }
`;
const HeaderLeftLogo = styled(Box)`
  width: 84px;
  height: 44px;
  margin-left: 20px;
  position: relative;
  p {
    font-size: 10px;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: -0.2px;
    font-family: RALEWAYREGULAR;
    position: absolute;
    bottom: 0px;
    background: -webkit-linear-gradient(rgba(229, 229, 229, 1), rgba(229, 229, 229, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const HeaderRight = styled(Flex)`
  align-items: center;
  justify-content: center;
`;
const HeaderRightnotification = styled(Box)`
  margin: 0px 20px;
  margin-left: 40px;
  @media only screen and (max-width: 641px) {
    display: none;
  }
`;
const HeaderRightSettings = styled(Box)`
  margin: 0px 20px;
  @media only screen and (max-width: 641px) {
    display: none;
  }
`;
const HeaderFUBI = (props: any) => {
  const { account } = useActiveWeb3React();
  const context = useWeb3React();
  const { active, error } = context;
  const [show, setShow] = useState(false);
  const [headerlanguage, setHeaderlanguage] = useState(false);
  const handleShowSiderBar = () => {
    setShow(!show);
    props.ShowPanel();
  };

  const [onModalConnectWallet] = useModal(<ConnectWalletCusom title="modalBuyBox" />);

  const accountEllipsis = active
    ? `${account?.substring(0, 4)}...${account?.substring(account.length - 4)}`
    : "Connect Wallet  ";

  const { isMobileL } = useMatchBreakpoints();
  return (
    <HeaderContainer>
      <HeaderLeft>
        <button
          onClick={() => {
            handleShowSiderBar();
          }}
        >
          <img
            src={!isMobileL ? Arrow : Iconmenu}
            className={show ? "butonHeaderShow" : ""}
            style={{ transition: "all 0.3s linear" }}
          />
        </button>
        <HeaderLeftLogo>
          <img src={LOGOFUBI} />
          <p>Future Big Finance</p>
        </HeaderLeftLogo>
      </HeaderLeft>
      {/* <HeaderCenter>
        <input type="text" placeholder="Search"></input>
        <img src={SearchIcon} />
      </HeaderCenter> */}
      <HeaderRight>
        {/* <HeaderRightlanguage>
          <div
            onClick={() => {
              setHeaderlanguage(!headerlanguage);
            }}
          >
            <p>EN</p>
            <img
              src={PolygonDown}
              style={{
                transform: `${headerlanguage ? "rotateZ(180deg)" : ""}`,
              }}
            />
          </div>
          <ul
            style={{
              height: `${headerlanguage ? "100%" : "0px"}`,
              opacity: `${headerlanguage ? "1" : "0"}`,
            }}
          >
            <li>VI</li>
          </ul>
        </HeaderRightlanguage> */}
        <HeaderRightnotification>
          <img src={NotificationFUBI} />
        </HeaderRightnotification>
        <HeaderRightSettings>
          <img src={SettingIcon} />
        </HeaderRightSettings>
        <BtnConnect onClick={onModalConnectWallet}>{props.textBtn ? props.textBtn : accountEllipsis}</BtnConnect>

        {/* <ConnectWallet /> */}
      </HeaderRight>
    </HeaderContainer>
  );
};
export default HeaderFUBI;
