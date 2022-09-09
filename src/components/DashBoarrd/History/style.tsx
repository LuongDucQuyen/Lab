import { Box, Flex } from "@pkt2022/uikit";
import styled from "styled-components";
import { style } from "styled-system";
import ArrowLeft from "../../../assets/DasboardIcon/HistoryArrowleft.svg";
import ArrowRight from "../../../assets/DasboardIcon/HistoryArrowrigth.svg";

export const HistoryContainer = styled(Box)`
  padding-top: 30px;
  padding-bottom: 52px;
  position: relative;
  z-index: 5;
`;
export const HistoryTitle = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  h1 {
    background: linear-gradient(
      180deg,
      #ecf1f0 0%,
      rgba(236, 241, 240, 0) 187.5%
    );
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    font-style: normal;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: RALEWAYBOLD;
  }
`;
export const HistoryTitleRight = styled(Flex)`
  h2 {
    display: flex;
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 3%;
    color: #ffffff;
    font-family: RALEWAYBOLD;
    padding-right: 13px;
  }
  p {
    font-size: 16px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 3%;
    color: #ffffff;
    font-family: RALEWAYBOLD;
    padding: 0px 3px;
  }
`;
export const HistoryTitleBtn = styled(Flex)`
  width: 40px;
  height: 28px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  :after {
    content: "";
    width: 2px;
    height: 100%;
    background-color: #c4c4c4;
    position: absolute;
    top: 0;
    left: calc(50% - 1px);
  }
  button {
    background-color: transparent;
    height: 12px;
    width: 8px;
    border: none;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    :nth-child(1) {
      background-image: url("${ArrowLeft}");
    }
    :nth-child(2) {
      background-image: url("${ArrowRight}");
    }
  }
`;

export const HistoryConTent = styled(Box)`
  width: 100%;
  table {
    width: 100%;
    background-color: #1A1A1A;
    border-radius: 10px;
  }
  tr {
    height: 54px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    td {
      color: #b6b6b6;
      font-size: 14px;
      line-height: 54px;
      font-family: RALEWAYBOLD;
      width: calc((100% - 200px)/4);
      :nth-child(2) {
        padding-left: 5%;
      }
      :nth-child(6) {
        color: #ffffff;
        padding: 4px 20px;
        background:linear-gradient(96.47deg, #0FAE96 1.48%, rgba(15, 174, 150, 0) 100%);
        border-radius: 10px;
        width: 100px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    :nth-child(1) {
        border:none;
    }
  }
  th {
    color: #ffffff;
    font-size: 14px;
    line-height: 54px;
    font-weight: 700;
    text-align: left;
    font-family: RALEWAYBOLD;
    width:16%;
    :nth-child(1) {
        width: 10%;
        max-width: 100px;
    }
    :nth-child(2) {
      width: 30%;
      text-align: left;
      padding-left: 5%;
    }
    :nth-child(6){
        width: 10%;
        padding-left: 20px;
    }
  }
  @media only screen and (max-width: 912px) {
      td , th{
        text-align: center;
      }
  }
`;
