import { Box, Flex } from "@pkt2022/uikit";
import styled from "styled-components";
import ItemsBackground from "../../../assets/DasboardIcon/ArticleItemBackground.png";
import BackGround from "../../../assets/pannerDashboardFUBI.webp";
import BackGroundV2 from "../../../assets/dashboardFUBI/backGroundV2.svg";

export const Wrapper = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 1023px) {
    :before {
      content: "";
      width: calc(100%);
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url("${BackGround}");
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -3;
      max-height: 620px;
    }
    :after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: -2;
      background-size: 130%;
      background-repeat: no-repeat;
      background-position-y: center;
      background-position-x: center;
      background-image: url("${BackGroundV2}");
    }
  }
`;
export const Overlay = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  :before {
    content: "";
    width: 100%;
    height: 80%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 1)
    );
    z-index: -2;
  }
`;
export const Items = styled(Box)`
  width: 32%;
  height: 186px;
  margin: 10px 0;
  background-image: url("${ItemsBackground}");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px 15px 15px 15px;
  background-position: center center;
  padding: 32px 14px 30px 25px;
  h1 {
    color: white;
    font-size: 20px;
    font-weight: 600;
    margin-top: 50px;
    font-family: GilroyBold;
  }
  @media only screen and (max-width: 1023px) {
    width: 48%;
  }
  @media only screen and (max-width: 640px) {
    padding: 32px 10px 30px 10px;
    background-position: right -14px center;
  }
  @media only screen and (max-width: 345px) {
    padding: 32px 5px 30px 5px;
  }
`;
export const ItemsTop = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: white;
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    font-family: RALEWAYMEDIUM;
  }
  @media only screen and (max-width: 540px) {
    h3 {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 345px) {
    h3 {
      font-size: 12px;
    }
  }
`;
export const ItemIcon = styled(Flex)`
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  img {
    max-width: 52px;
    max-height: 52px;
  }
  @media only screen and (max-width: 540px) {
    width: 40px;
    height: 40px;
    img {
      max-width: 40px;
      max-height: 40px;
    }
  }
`;

export const BoxTitle = styled.div`
  background: rgba(255, 255, 255, 0.07);
  border-radius: 3.44849px;
  color: #ffffff;
  padding: 5px;
  padding: 4px 8px;
  font-family: RALEWAYBOLD;
  font-size: 14px;
  line-height: 19px;
  font-weight: 700;
  @media (max-width: 376px) {
    font-size: 10px;
  }
`;
