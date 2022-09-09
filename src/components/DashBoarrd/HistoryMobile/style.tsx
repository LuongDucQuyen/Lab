import { Box, Flex } from "@pkt2022/uikit";
import styled from "styled-components";
import ArrowLeft from "../../../assets/DasboardIcon/HistoryArrowleft.svg";
import ArrowRight from "../../../assets/DasboardIcon/HistoryArrowrigth.svg";

export const HistoryMobileWapper = styled(Box)`
  width: 100%;
  min-height: 300px;
  padding-top: 30px;
  padding-bottom: 18px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  z-index: 5;
`;
export const HistoryMobileTitled = styled(Flex)`
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
    max-width: calc(100% - 125px);
    width: 50%;
    font-weight: 900;
    font-family: RALEWAYBOLD;
    font-size: 24px;
    line-height: 28px;
    font-style: normal;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (max-width: 539px){
    h1{
      font-size: 16px;
    }
  }
  @media screen and (max-width: 325px){
    h1{
      font-size: 12px;
    }
  }
`;
export const HistoryMobileTitleRight = styled(Flex)`
  min-width: 125px;
  width: 50%;
  justify-content: flex-end;
  padding-right: 18px;
  h2 {
    display: flex;
    font-size: 12px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 3%;
    color: #ffffff;
    font-family: RALEWAYBOLD;
    padding-right: 13px;
  }
  p {
    font-size: 12px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 3%;
    color: #ffffff;
    font-family: Gilroy;
    padding: 0px 3px;
  }
`;

export const HistoryMobileTitleBtn = styled(Flex)`
  width: 40px;
  min-width: 40px;
  max-width: 40px;
  height: 28px;
  align-items: center;
  justify-content: space-between;
  position: relative;
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
  div{
    height: 100%;
    width: 2px;
    position: absolute;
    background-color: white;
    left: 20px;
    display: none;
  }
`;

export const ItemHistory = styled(Flex)`
    align-items: center;
    justify-content: space-between;
    padding: 19px 12px 18px 12px;
    background-color: #1A1A1A;
    margin-bottom: 5px;
    width: 100%;
`;
export const ItemHistoryLeft = styled(Box)`
    width: 60%;
    h2{
      font-family: RALEWAYBOLD;
      color: #B6B6B6;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      font-style: normal;
      width: 100%;
      margin-bottom: 5px;
    }
    p{
      margin-bottom:10px;
    }
    p , h3{
      font-family: RALEWAYBOLD;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: #B6B6B6;
      height: 100%;
    }
`
export const ItemHistoryRight = styled(Flex)`
    width: 40%;
    align-items: center;
    justify-content: end;
    flex-wrap: wrap;
    h6{
      font-family: RALEWAYBOLD;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #B6B6B6;
      font-style: normal;
      width: 100%;
      text-align: end;
      margin-bottom: 5px;
    }
    h5{
      font-family: RALEWAYSEMIBOLD;
      color: #FFFFFF;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      padding: 4px 20px 4px 20px;
      border-radius: 10px;
      background: linear-gradient(97.09deg, #0FAE96 0.49%, rgba(15, 174, 150, 0) 99.93%);
      width: 82px;
      height: 30px;
    }
`