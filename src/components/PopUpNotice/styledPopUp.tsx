import styled from "styled-components";
import { Box, Flex } from "@pkt2022/uikit";
export const PopUpContainer = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const PopUpGroup = styled(Box)`
  width: 100%;
  max-width: 328px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  padding: 24px;
  h2 {
    font-family: Gilroy;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    width: 100%;
    text-align: center;
  }
`;
export const PopupImg = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  min-height: 77px;
  position: relative;
  .PopUpPositionImg{
    width: 82px;
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    box-shadow: 0px 20px 28px 0px #8BFFEC;
    img{
      width: 65%;
    }
  }
  .PopUpPositionImgError{
    box-shadow: 0px 20px 28px 0px #FFCBCB;
  }
`;
export const PopupBtn = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  padding-top: 25px;
  button , a {
    border: 1px solid rgba(86, 103, 137, 0.26);
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    border-radius: 10px;
    background: radial-gradient(
        63.11% 63.11% at 31.97% 19.67%,
        rgba(255, 255, 255, 0.6) 0%,
        rgba(255, 255, 255, 0) 69.79%,
        rgba(255, 255, 255, 0) 100%
      );
    :active {
        opacity: 0.9;
        transform: translateY(1px);
        box-shadow: none;
    }
    :hover {
        opacity: 0.9;
        box-shadow: 0px 6px 7px rgb(0 0 0 / 25%);
        transition: all 0.2s,opacity 0.2s;
    }
  }
  .PopupBtnError {
    background: radial-gradient(
      63.11% 63.11% at 31.97% 19.67%,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0) 69.79%,
      rgba(255, 255, 255, 0) 100%
    );
    background-color: #EB5757;
    color: rgba(255, 255, 255,1);
    :hover {
        opacity: 0.9;
        box-shadow: 0px 6px 7px rgb(0 0 0 / 25%);
        transition: all 0.2s,opacity 0.2s;
    }
  }
  .PopupBtnSuccess{
    background-color: #083753;
    color: rgba(255, 255, 255,1);
  }
`;
