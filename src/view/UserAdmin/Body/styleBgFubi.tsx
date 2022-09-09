import { Box, Flex } from "@pkt2022/uikit";
import styled from "styled-components";
import BG from "../../../assets/FUBIToken/background.png";
import Floor from "../../../assets/pannerHomeBlur.svg";
import AfterPartner from "../../../assets/HomeFubi/afterPartner.png";

export const WrapperBg= styled(Box)`
width: 100%;
padding-left: 18px;
padding-right: 18px;
:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 420px;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${BG}");
  background-position-x: center;
  background-position-y: center;
  z-index: -1;
}
:after {
    content: "";
    position: absolute;
    background-image: url("${Floor}");
    width: 100%;
    height: 420px;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-size: 150%;
    background-position: center center;
    z-index: -1;
}
@media only screen and (max-width: 639px) {
  :before , :after {
    background-position: center center;
    background-size: 300%;
    height: 168px;
  }
  @media only screen and (max-width: 639px) {
    :before,
    :after {
      background-position: center center;
      background-size: 300%;
      height: 168px;
    }
  }
  @media only screen and (max-width: 1079px) {
    width: calc(100%);
    left: -18px;
    :before,
    :after {
      width: 100%;
    }
    :after {
      background-size: 200%;
    }
  }
  @media only screen and (max-width: 639px) {
    :before {
      height: 250px;
    }
    :after {
      height: 250px;
      background-size: 300%;
    }
  }
`;
export const PannerFubiToken = styled(Flex)`
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 420px;
  @media only screen and (max-width: 639px) {
    height: 250px;
  }
`;
export const LogoFubi = styled.img`
  position: absolute;
  width: 240px;
  height: 240px;
  @media only screen and (max-width: 639px) {
    width: 127px;
    height: 127px;
  }
`;

// Partnership

export const BoxPartnership = styled(Flex)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-top: 42px;
  padding-bottom: 52px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  position: relative;
  padding-left: 18px;
  padding-right: 18px;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${AfterPartner});
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
  }

  @media only screen and (max-width: 520px) {
    padding-bottom: 32px;
  }
`;
