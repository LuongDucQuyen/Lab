import styled from "styled-components";
import { Box, Flex } from "@pkt2022/uikit";
import bg from '../../assets/dashboardFUBI/backGroundV2.svg';

export const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  max-width: 416px;
  max-height: 563px;
  background-color: #fff;
  margin: auto;
  margin-top: 100px;
  background-color: rgba(22, 22, 22, 0.8);
  border-radius: 10px;
  box-shadow: inset 0px 40px 50px #000000;
  backdrop-filter: blur(60px);
  padding: 0px 20px 76px 20px;
  position: relative;
  z-index: 6;
`;
export const Title = styled(Box)`
  width: 100%;
  position: relative;
  height: 45px;
  h1 {
    font-size: 36px;
    line-height: 90px;
    position: absolute;
    font-weight: 700;
    font-family: Devator;
    left: 50%;
    top: 0%;
    width: 100%;
    text-align: center;
    border: none;
    box-sizing: border-box;
    transform: translateY(-50%) translateX(-50%);
    color: rgba(255, 255, 255, 0.8);
  }
`;
export const TitleInput = styled(Box)`
  width: 100%;
  margin: 8px auto 8px 29px;
  color: #CFD9E6;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  font-family: RALEWAYMEDIUM;
  letter-spacing: -1%;
`;
export const InputItem = styled(Flex)`
  width: 100%;
  height: 57px;
  background-color: #262626;
  box-shadow: inset 0px 9px 11px #060606;
  border-radius: 28.5px;
  border: 2px solid #656565;
  padding-left: 30px;
  padding-right: 20px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  p{
    color: #ffffff;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -2%;
  }
  input{
    border: none;
    width: 50%;
    background-color: transparent;
    outline: none;
    color: #ffffff;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -2%;
    ::placeholder{
        color: #ffffff;

    }
    :nth-child(1) {
        font-family: RALEWAYSEMIBOLD;
        font-weight: 600;
    }
    :nth-child(1) {
        font-family: RALEWAYMEDIUM;
        font-weight: 500;
    }
  }
`
export const InputRight = styled(Flex)`
  width: 50%;
  max-width: 118px;
  height: 30px;
  align-items: center;
  justify-content: flex-end;
  img{
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-radius: 50%;
    background-color:black;
    :nth-child(2) {
      width: 10px;
      height: 10px;
      background-color: transparent;
      margin-left: 10px;
    }
  }
  p{
    color: #ffffff;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -2%;
    font-weight: 600;
    font-family: RALEWAYSEMIBOLD;
  }
`
export const ListCoins = styled(Box)`
  position: absolute;
  width: 100%;
  background-color: black;
  height: fit-content;
  top: 110%;
  left: 0px;
  overflow: hidden;
  padding: 0px 30px;
  border-radius: 10px;
  transition: all 0.2s ease;
`
export const Coin = styled(Flex)`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  img{
    margin-right: 20px;
  }
`

export const TextContent = styled(Flex)`
  width: 100%;
  height: 57px;
  border-radius: 10px;
  border: 1px solid #757575;
  padding: 15px 30px 17px 30px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  :before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    z-index: -2;
    background-image: url("${bg}");
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: center center;
  }
  :after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background: linear-gradient(to bottom, rgba(255, 255, 255,0) , rgba(0,0,0,1));
    top: 0px;
    left: 0px;
    border-radius: 10px;
  }
  p{
    font-size: 16px;
    font-weight: 700;
    font-family: GilroyBold;
    line-height: 24px;
    color: #FFFFFF;
    :nth-child(1) {
        border-bottom: 1px dashed #828282;
    }
  }
`
export const BtnConnect = styled(Box)`
  margin-top: 87px;
  width: 100%;
  height: 56px;
  position: relative;
  button{
    width: 100%;
    cursor: pointer;
    max-width: 226px;
    height: 100%;
    background: linear-gradient(180deg,rgba(42,43,45,0) 0%,#2a2b2d 100%);
    border: none;
    outline: none;
    border-radius: 9px;
    color: #cfd9e6;
    font-size: 20px;
    font-family: RALEWAYMEDIUM;
    line-height: 28px;
    font-weight: 500;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.1s ease;
    :hover{
      background: linear-gradient(180deg,#3ea2ff 0%,#7743e6 100%);
    }
    :active {
      transform: translateX(-50%) translateY(2px);
    }
  }
`
