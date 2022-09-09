import { ButtonV1, Box, Heading, Text , Flex } from "@pkt2022/uikit";
import { BoxPkt, Row, FlexPkt } from "../../components/Layout";
import styled from "styled-components";
// import BannerSidebar from "../../assets/Admin/bannerSidebar.png";
// import AfterBannerSidebar from "../../assets/Admin/afterBannerSidebar.png";

export const Wrapper = styled(FlexPkt)`
  min-height: 100vh;
  justify-content: flex-start;
  align-items: flex-start;
  transition: all 0.3s ease;
  background-color: #f3f6f9;
  background-image: url("/assets/admin/bannerAdminV2.svg");
  /* background-position: left top; */
  background-position-y: -2%;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  transition: all 0.3s ease;

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

  .cus-opa {
    opacity: 0;
    visibility: hidden;
    min-width: 150px;
    transition: all 0.3s ease;
  }

  .active {
    opacity: 1;
    visibility: visible;
  }

  .cus-a-z {
    min-height: 41px;
  }

  .cus-ml {
    margin-left: 4px;
  }

  .activeImg {
    width: 40px;
    height: 40px;
  }
`;

export const Panel = styled(Box)<{ _show: boolean }>`
  width: ${({ _show }) => (_show ? "280px" : "65px")};
  height: 100vh;
  max-height: 100vh;
  /* background: linear-gradient(180deg, #4c84f3 0%, #0543c0 100%); */
  background-color: #23363e;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: relative;
  z-index: 2;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.3s ease;

  .cus-bor {
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }

  .cus-indexx {
    position: relative;
    z-index: 19;
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
    width: 140%;
    height: 100%;
  }

  /* ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
    width: 100%;
    height: 100%;
    z-index: -1;
  } */

  @media only screen and (max-width: 1200px) {
    width: ${({ _show }) => (_show ? "280px" : "0")};
    position: absolute;
  }
`;

export const Inner = styled(Box)<{ _show: boolean }>`
  width: ${({ _show }) => (_show ? "calc(100% - 280px)" : "100%")};
  max-width: 1536px;
  margin: 0 auto;
  height: 100%;
  max-height: 100vh;
  /* background-image: url('/assets/admin/bannerAdminV2.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain; */
  padding-left: 18px;
  padding-right: 24px;
  /* padding-top: 34px; */
  padding-bottom: 30px;
  overflow-y: auto;
  transition: all 0.3s ease;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
  }
`;

export const BoxFooter = styled(FlexPkt)`
  /* background-image: url("/assets/admin/bannerAdmin2.png"); */
  height: 40%;
  /* max-height: 400px; */
  background-position: initial;
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 30px;
  justify-content: center;

  .cus-seft {
    align-self: end;
  }
`;

export const BoxTransition = styled(BoxPkt)`
  position: relative;
  transition: all 0.3s ease;
`;
