import { Box, Flex } from "@pkt2022/uikit";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  width: 100%;
  padding-top: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  h3 {
    background: linear-gradient(
      180deg,
      #ecf1f0 0%,
      rgba(236, 241, 240, 0) 187.5%
    );
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    font-family: RALEWAYBOLD;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 100%;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 539px){
    h3{
      font-size: 16px;
    }
  }
`;
export const ItemGroup = styled(Flex)`
  overflow-x: scroll;
  height: 172px;
  width: 100%;
  justify-content: space-between;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Item = styled(Flex)`
  flex-wrap: wrap;
  width: 23%;
  min-width: 257px;
  height: 100%;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  padding: 15px 18px;
  margin-right: 20px;
  
`;
export const ItemTop = styled(Flex)`
  width: 100%;
  height: calc(50% - 0.5px);
  border-bottom: 1px solid rgba(236, 241, 240, 0.05);
  padding-right: 5px;
  align-items: center;
  justify-content: space-between;
  img {
    width: 43px;
    height: 43px;
  }
  overflow-x: scroll;
`;
export const ItemTopLeft = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`;
export const ItemtopleftId = styled(Box)`
  P {
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    color: #ecf1f0;
    padding-left: 12px;
    font-family: RALEWAYSEMIBOLD;
  }
`;
export const ItemtopleftName = styled(Box)`
  p {
    color: #1d1429;
    padding: 3px 5px;
    font-size: 9px;
    line-height: 10px;
    font-weight: 600;
    background-color: #b6b6b6;
    border-radius: 3.45397px;
    margin-left: 12px;
    font-family: RALEWAYSEMIBOLD;
  }
`;
export const ItemtopRight = styled(Flex)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 50%;
  }
`;
export const ItemBottom = styled(Flex)`
  width: 100%;
  height: calc(50% - 0.5px);
  padding-top: 10px;
`;
export const ItemBottomLeft = styled(Box)`
  width: 50%;
  h4 {
    font-size: 21px;
    line-height: 24px;
    font-weight: 700;
    color: #ecf1f0;
    font-style: normal;
    padding-bottom: 5px;
  }
  p{
    color: #B6B6B6;
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
  }
`;
