import { ButtonV1, Box, Heading, Text } from "@pkt2022/uikit";
import { BoxPkt, Row, FlexPkt } from "../../components/Layout";
import styled from "styled-components";

export const Wrapper = styled(FlexPkt)`
  min-height: 100vh;
  justify-content: flex-start;
  align-items: flex-start;
  transition: all 0.3s ease-in-out;
  background-color: #F3F6F9;
  background-image: url("/assets/admin/bannerAdminV2.png");
  /* background-position: left top; */
  background-position-y: 0px;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;

  /* ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(180deg, rgba(243, 246, 249, 0) 0%, #f3f6f9 100%);
    z-index: 1;
  } */
`;

export const Panel = styled(Box)<{ _show: boolean }>`
  width: ${({ _show }) => (_show ? "308px" : "65px")};
  height: 100vh;
  max-height: 100vh;
  background: linear-gradient(180deg, #4c84f3 0%, #0543c0 100%);
  position: relative;
  z-index: 2;
  box-shadow: 0px 110.802px 88.642px rgba(141, 145, 160, 0.0196802),
    0px 46.2906px 37.0325px rgba(141, 145, 160, 0.0282725), 0px 24.7492px 19.7993px rgba(141, 145, 160, 0.035),
    0px 13.8742px 11.0994px rgba(141, 145, 160, 0.0417275), 0px 7.36848px 5.89478px rgba(141, 145, 160, 0.0503198),
    0px 3.06619px 2.45295px rgba(0, 0, 0, 0.07);
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.3s ease-in-out;

  .cus-bor {
    padding-bottom: 28px;
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }
`;

export const Inner = styled(Box)<{ _show: boolean }>`
  width: ${({ _show }) => (_show ? "calc(100% - 308px)" : "100%")};
  height: 100%;
  min-height: 100vh;
  /* background-image: url('/assets/admin/bannerAdminV2.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain; */
`;

export const BoxFooter = styled(FlexPkt)`
  background-image: url("/assets/admin/bannerAdmin2.png");
  height: 50%;
  /* max-height: 400px; */
  background-position: initial;
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 30px;

  .cus-seft {
    align-self: end;
  }
`;
