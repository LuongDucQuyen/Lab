import styled from "styled-components";
import { ButtonV1, Box, Heading, Text, Flex } from "@pkt2022/uikit";
import HoverConnect from "../../assets/hoverConnect.png";

export const BoxModal = styled(Box)`
  width: 100%;
  max-width: 401px;
  margin-top: 80px;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
  background-color: #24272a;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  .cus-box-header {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  @media only screen and (max-width: 570px) {
    margin-top: 40px;
    max-width: 350px;
  }

  .none-pb {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const BoxPd = styled(Box)`
  /* padding: 10px; */
  padding-top: 0;
  padding-bottom: 50px;
  position: relative;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background-image: url(${HoverConnect});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const BoxPdDisconnect = styled(Box)`
  /* padding: 10px; */
  padding-top: 0;
  padding-bottom: 50px;
  position: relative;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background-image: url(${HoverConnect});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;


export const BoxModalContent = styled(Box)`
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  & > * {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    padding-left: 20px;
  }

  .wallet-flex {
    transition: 0.3s ease-in-out;
    padding: 5px 8px;
    min-width: 358px;
    border: 1px solid #ffffff;
    border-radius: 37px;
    background: transparent;
    transition: 0.3s ease;
    min-height: 62px;
    height: 100%;

    :hover {
      background-color: #000;
      background-image: url(${HoverConnect});
      border: none;
    }
  }

  @media only screen and (max-width: 570px) {
    & > * {
      width: 100%;
    }
    .wallet-flex {
      min-width: 280px;
    }
  }
`;

export const BoxModalDisConnect = styled(Box)`
  flex-direction: column;
  min-width: 401px;
  padding-top: 24px;
  padding-bottom: 24px;
  overflow: hidden;
  & > * {
    width: 100%;
    justify-content: center;
    display: flex;
  }

  .btn-connect {
    margin: 0 20px;
    width: 165px;
    height: 50px;
    background: linear-gradient(275.2deg, #37abff 1.74%, #8a3ffc 97.49%),
      radial-gradient(
        63.11% 63.11% at 31.97% 19.67%,
        hsla(0, 0%, 100%, 0.7) 0,
        hsla(0, 0%, 100%, 0) 69.79%,
        hsla(0, 0%, 100%, 0) 100%
      ),
      #2f80ed;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    border: none;
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 110%;
  }

  .noti-out-text {
    font-weight: 500;
    text-align: center;
    font-size: 22px;
    color: #fffdfd;
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 570px) {
    min-width: auto;
  }
`;

export const ModalText = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 33px;
  color: #fff;
  text-shadow: 0 1px 1px rgb(0 0 0 / 25%);

  @media only screen and (max-width: 570px) {
    font-size: 24px;
  }
`;

export const BoxHeader = styled(Flex)`
  padding: 24px 16px 24px 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  button {
    border: none;
    outline: none;
    background-color: transparent;
    color: #000;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 0px;
  }

  @media only screen and (max-width: 570px) {
    padding: 12px;
  }
`;
