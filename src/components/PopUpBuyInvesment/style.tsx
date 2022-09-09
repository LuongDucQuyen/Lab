import styled from "styled-components";
import { Box, Flex} from "@pkt2022/uikit";


export const PopUpBuyModal = styled(Box)`
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  letf: 0;
  z-index: 1;
  border: 2px solid #262626;
  overflow: hidden;
  pointer-events: initial;
  .popup-show-Modal{
    opacity: 1;
    transition: all 0s linear;
    overflow: hidden;
  }
  .popup-hide-Modal{
    overflow: hidden;
    opacity: 0;
    transition: all 0.2s linear;
    transition-delay: 0.2s;
  }
`;
export const PopUpBuyModalFloor = styled(Box)`
  background-color: rgba(0 , 0 , 0 , 0.3);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0%;
  position: absolute;
  overflow: hidden;
  z-index: 1;
  .popup-show{
    opacity: 1;
    transition: all 0.2s linear;
    transition-delay: 0.1s;
  }
  .popup-hide{
    opacity: 0;
    transition: all 0.3s linear;

  }
`
export const PopUpBuy = styled(Box)`
  position: absolute;
  top: calc(50% + 50px);
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 85%;
  max-width: 416px;
  height: 80%;
  max-height: 503px;
  background-color: #24272a;
  border-radius: 10px;
  backdrop-filter: blur(40px);
  box-shadow: inset 0px 40px 50px #000000;
  transition: all 0.2s linear;
  transition-delay: 0.1s;
  @media only screen and (max-width: 639px) {
    height: 80%;
  }
`;
export const PopUpTop = styled(Box)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateY(-30%) translateX(-50%);
`;
export const PopContent = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 0 20px;
  padding-top: 110px;
  align-items: start;
  flex-wrap: wrap;
  h1 {
    font-family: Devator;
    font-weight: 700;
    font-size: 24px;
    width: 100%;
    text-align: center;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const PopUpInPut = styled(Flex)`
  width: 90%;
  height: 57px;
  border-radius: 28.5px;
  background: #262626;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 30px;
  align-items: center;
  input {
    width: calc(100% - 125px);
    color: rgba(255, 255, 255, 1);
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0px;
    margin: 0px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    font-family: RALEWAYMEDIUM;
    ::placeholder {
      color: #ffffff;
      font-size: 1.5em;
    }
  }
`;
export const PopUpSelecToken = styled(Flex)`
  width: 125px;
  min-width: 125px;
  height: 100%;
  padding-right: 15px;
  position: relative;
`;
export const PopUpShowToken = styled(Flex)`
  cursor: pointer;
  height: 101%;
  max-height:: 30px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-right: 22px;
  img {
    max-height: 30px;
    max-width: 30px;
  }
  p{
    font-family: RALEWAYSEMIBOLD;
    color: #ffffff;
    font-weight: 600;
    line-height: 24px;
  }
`;
export const PopUpShowTokenList = styled(Flex)`
  flex-wrap: wrap;
  width: calc(100% + 5px);
  height: auto;
  position: absolute;
  padding-right: 22px;
  top: 45px;
  left: -5px;
  z-index: 6;
  padding-left: 5px;
  background-color: rgba(22, 22, 22, 1);
  border-radius: 5px;
  overflow: hidden;
`;
export const PopUpText = styled(Flex)`
  width: 90%;
  height: 100px;
  border-radius: 10px;
  border: 2px solid #757575;
  position: relative;
  overflow: hidden;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 15px 14px 21px;
  :after {
    position: absolute;
    width: 130px;
    height: 400px;
    content: "";
    background-image: url("./assets/backgroundLeft.png");
    transform: rotate(90deg);
    background-position: center left;
    z-index: -1;
    top: -150%;
    left: 33%;
  }
  :before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000;
    content: "";
    z-index: -2;
    top: 0px;
    left: 0px;
  }
`;
export const PopUptextItem = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  p {
    color: #ffffff;
    font-size: 17px;
    font-weight: 700;
    font-family: GilroyBold;
    line-height: 19px;
    :nth-child(1){
      padding-bottom: 2px;
      border-bottom: 1px dashed  #828282;
    }
  }
`;
export const PopUpButton = styled(Flex)`
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;
  button {
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
    :hover {
      background: linear-gradient(180deg, #3ea2ff 0%, #7743e6 100%);
    }
    :active {
      transform: translateY(2px);
    }
  }
`;
export const PopUpClose = styled(Box)`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 10px;
  right: 15px;
  :before , :after {
    content:"";
    width: 20px;
    height: 4px;
    position: absolute;
    background-color: #ffffff;
    top: 50%;
    left: 50%;
  }
  :before{
    transform: rotateZ(45deg);
  }
  :after{
    transform: rotateZ(-45deg);
  }
`