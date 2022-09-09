import React, { useState, useEffect } from "react";
import { Box, useMatchBreakpoints } from "@pkt2022/uikit";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import BackGround from "../../../assets/pannerDashboardFUBI.webp";
import BackGroundV2 from "../../../assets/dashboardFUBI/backGroundV2.svg";
import WithdrawContent from "../../../components/withdrawContent";
const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 420px;
    top: 0%;
    left: 50%;
    background-image: url("${BackGround}");
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: top;
    z-index: -3;
  }
  :after {
    content: "";
    width: 100%;
    height: 420px;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
    background-size: 130%;
    background-repeat: no-repeat;
    background-position-y: top;
    background-position-x: center;
    background-image: url("${BackGroundV2}");
  }
  @media only screen and (max-width: 1023px) {
    :before {
      display: none;
    }
  }
`;
const Overlay = styled(Box)`
:before{
  content:"";
  width:100%;
  height: 420px;
  background: linear-gradient(to bottom, transparent , transparent, #262626);
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 1;
}
`

const WithdrawFuBi = () => {
  return (
    <Wrapper>
      <Overlay>
        <WithdrawContent/>
      </Overlay>
    </Wrapper>
  );
};
export default WithdrawFuBi;
