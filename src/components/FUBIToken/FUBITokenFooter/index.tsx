import { Box, Flex } from "@pkt2022/uikit";
import styled from "styled-components";
import Logo from "../../../assets/dashboardFUBI/FLOGO.svg";
import Arrow from "../../../assets/dashboardFUBI/arrowGreen.svg";

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

const FooterContent = styled(Flex)`
  width: 70%;
  margin: auto;
  @media only screen and (max-width: 641px){
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const FooterLeft = styled(Flex)`
  width: 50%;
  padding: 25px 0px;
  flex-wrap: wrap;
  justify-content: center;

  p {
    color: #b6b6b6;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    width: 100%;
    font-family: RALEWAYMEDIUM;
  }
  h2 {
    color: #fafbfc;
    font-size: 24px;
    line-height: 39px;
    font-weight: 500;
    width: 100%;
    font-family: GilroyMedium;
  }

  h2:not(:last-child) {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 913px) {
    width: 100%;
    justify-content: start;
    padding: 18px;
    padding-top: 0;
    p {
      margin: 10px 0px;
    }
  }
`;

const FooterRight = styled(Flex)`
  width: 50%;
  padding: 25px 0px;
  flex-wrap: wrap;
  justify-content: center;
  .title {
    color: #b6b6b6;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    width: 100%;
    font-family: RALEWAYMEDIUM;
  }
  .text {
    color: #fafbfc;
    font-size: 24px;
    line-height: 39px;
    font-weight: 500;
    width: 100%;
    font-family: GilroyMedium;
  }
  h2:not(:last-child) {
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 913px) {
    width: 100%;
    justify-content: flex-start;
    padding: 18px;
    padding-bottom: 0;
    p {
      margin: 10px 0px;
    }
  }
`;

const FooterRightTop = styled(Flex)`
  width: 100%;
  align-items: center;
  cursor: pointer;
  margin-bottom: 25px;
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
  min-width: 50px;
  min-height: 50px;
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
`;
const FooterFuBiToken = () => {
  return (
    <>
      <FooterMain>
        <FooterContent>
          <FooterLeft>
            <div>
              <p>Total FUBI Supply</p>
              <h2>500,000,000 FUBI</h2>
              <p>Standard</p>
              <h2>BEP-20</h2>
              <p>Decimal</p>
              <h2>18</h2>
            </div>
          </FooterLeft>
          <FooterRight>
            <div>
              <FooterRightTop>
                <FooterLogo>
                  <img src={Logo} />
                </FooterLogo>
                <h1>Future Big Finance</h1>
                <p>FUBI</p>
                <FooterArrow>
                  <img src={Arrow} />
                </FooterArrow>
              </FooterRightTop>
              <p className="title">Network</p>
              <h2 className="text">Binance Smart Chain</h2>
              <p className="title">Smart Contract Address</p>
              <h2 className="text">TBA</h2>
            </div>
          </FooterRight>
        </FooterContent>
      </FooterMain>
    </>
  );
};

export default FooterFuBiToken;
