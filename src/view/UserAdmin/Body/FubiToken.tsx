import React from "react";
import styled from "styled-components";
import { Box, useMatchBreakpoints, Flex } from "@pkt2022/uikit";
import CoinIcon from "../../../assets/FUBIToken/coin-icon.png";
import FUBITokenFooter from "../../../components/FUBIToken/FUBITokenFooter";
import FUBITokenAbout from "../../../components/FUBIToken/FUBITokenAbout";
import { WrapperBg , PannerFubiToken , LogoFubi} from "./styleBgFubi";

const FubiToken = () => {
  return (
    <WrapperBg>
      <PannerFubiToken>
        <LogoFubi src={CoinIcon}></LogoFubi>
      </PannerFubiToken>
      <FUBITokenAbout></FUBITokenAbout>
      <FUBITokenFooter></FUBITokenFooter>
    </WrapperBg>
  );
};
export default FubiToken;
