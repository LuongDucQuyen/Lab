import { Box, Flex, Text } from "@pkt2022/uikit";
import styled from "styled-components";
import Logo from "../../assets/dashboardFUBI/FLOGO.svg";
import Arrow from "../../assets/dashboardFUBI/arrowGreen.svg";

const FooterMain = styled(Flex)`
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  margin: 18px 0px;
  align-items: flex-start;
  justify-content: center;
  @media only screen and (max-width: 913px) {
    flex-direction: column-reverse;
  }
`;

const FooterLeft = styled(Flex)`
  width: 40%;
  padding-top: 24px;
  padding-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;
  p {
    color: #b6b6b6;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    width: 100%;
    font-family: RALEWAYMEDIUM;
    padding-bottom: 9px;
  }
  h2 {
    color: #fafbfc;
    font-size: 24px;
    line-height: 39px;
    font-weight: 500;
    width: 100%;
    font-family: GilroyMedium;
  }
  @media only screen and (max-width: 913px) {
    width: 100%;
    justify-content: start;
    padding-left: 36px;
    p {
      margin: 10px 0px;
    }
  }
`;

const FooterRight = styled(Flex)`
  width: 40%;
  padding-top: 25px;
  flex-wrap: wrap;
  justify-content: center;
  .footerRightText {
    color: #b6b6b6;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    width: 100%;
    padding-top: 35px;
    font-family: RALEWAYMEDIUM;
  }
  .footerRightNumber {
    color: #fafbfc;
    font-size: 24px;
    line-height: 160%;
    font-weight: 500;
    font-style: normal;
    padding-top: 10px;
    font-family: GilroyMedium;
  }
  @media only screen and (max-width: 913px) {
    width: 100%;
    justify-content: flex-start;
    padding-left: 36px;
    .footerRightText {
      display: none;
    }
    .footerRightNumber {
      display: none;
    }
  }
`;

const FooterRightTop = styled(Flex)`
  width: 100%;
  align-items: center;
  cursor: pointer;
  h1 {
    color: #ecf1f0;
    font-size: 18px;
    line-height: 21px;
    font-weight: 600;
    margin-right: 15px;
    font-family: RALEWAYSEMIBOLD;
  }
  p {
    background-color: #b6b6b6;
    border-radius: 4px;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    font-weight: 600;
    padding: 4px 6px;
    margin-right: 15px;
    font-family: RALEWAYSEMIBOLD;
  }
`;
const FooterLogo = styled(Flex)`
  background-color: black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  min-height: 50px;
  min-width: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;
const FooterArrow = styled(Flex)`
  background-color: black;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  min-width: 34px;
  min-height: 34px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const FooterHomeFuBi = () => {
  return (
    <>
      <FooterMain>
        <FooterLeft>
          <div>
            <Box pb="20px">
              <p>Total FUBI Supply</p>
              <h2>$ 500,000,000</h2>
            </Box>

            <Box pb="20px">
              <p>Total FUBI Burned</p>
              <h2>$ 00,00</h2>
            </Box>
            <Box>
              <p>Total FUBI circulation</p>
              <h2>$ 400,000,000</h2>
            </Box>
          </div>
        </FooterLeft>
        <FooterRight>
          <div>
            <FooterRightTop pt="2px">
              <FooterLogo>
                <img src={Logo} />
              </FooterLogo>
              <h1>Future Big Finance</h1>
              <p>FUBI</p>
              <FooterArrow>
                <img src={Arrow} />
              </FooterArrow>
            </FooterRightTop>
            <p className="footerRightText">Total Value FUBI DEFI Locked</p>
            <h2 className="footerRightNumber">$ 100,000,000</h2>
          </div>
        </FooterRight>
      </FooterMain>
    </>
  );
};

export default FooterHomeFuBi;
