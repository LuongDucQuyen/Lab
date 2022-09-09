import { Box, Flex } from "@pkt2022/uikit";
import styled from "styled-components";
import chart from "../../../assets/Tokennomicst/tokentnomist.svg";
import { WrapperBg , PannerFubiToken , LogoFubi } from "./styleBgFubi";
import CoinIcon from "../../../assets/FUBIToken/coin-icon.png";

const TokenomicsContainer = styled(Box)`
  width: 100%;
`;
const TokenomicsContent = styled(Flex)`
  width: 100%;
  max-width: 484px;
  margin: auto;
  flex-wrap: wrap;
  padding-bottom: 20px;
  p {
    color: #b6b6b6;
    font-family: RALEWAYREGULAR;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
`;
const TokenomicsContentTitle = styled(Box)`
  width: 100%;
  padding: 40px 0px;
  h1 {
    font-size: 24px;
    font-family: RALEWAYBOLD;
    line-height: 24px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const TokenomicsChartWapper = styled(Box)`
  width: 100%;
  border-radius: 6px;
  background-color: #2c2d33;
  @media only screen and (max-width: 539px) {
    position: relative;
    width: calc(100% + 36px);
    left: -18px;
    top: 20px;
  }
`;
const TokenomicsChartContent = styled(Flex)`
  width: 100%;
  max-width: 484px;
  flex-wrap: wrap;
  padding: 0px 18px;
  padding-bottom: 18px;
  margin: auto;
  h1 {
    width: 100%;
    color: #ffffff;
    font-size: 19px;
    line-height: 75px;
    font-family: RALEWAYSEMIBOLD;
    font-weight: 600px;
    border-bottom: 2px solid #4f4f4f;
  }
`;
const TokenomicsChart = styled(Flex)`
  padding: 50px 0px;
  width: 50%;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 539px) {
    width: 100%;
  }
`;
const TokenomicsChartTitle = styled(Box)`
  width: 50%;
  padding-left: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  p {
    width: calc(100% - 30px);
    color: white;
    font-size: 12px;
    font-family: RALEWAYMEDIUM;
    font-weight: 400;
    line-height: 15px;
    padding: 10px 0px;
    position: relative;
    :before {
      content: "";
      width: 20px;
      height: 10px;
      position: absolute;
      left: -30px;
      top: 50%;
      transform: translateY(-50%);
    }
    :nth-child(1) {
      :before {
        background-color: #63abfd;
      }
    }
    :nth-child(2) {
      :before {
        background: linear-gradient(
          to right,
          rgba(230, 151, 255, 1),
          rgba(195, 78, 232, 1)
        );
      }
    }
    :nth-child(3) {
      :before {
        background-color: #7b54fe;
      }
    }
    :nth-child(4) {
      :before {
        background-color: #82f0ff;
      }
    }
    :nth-child(5) {
      :before {
        background-color: #7affc7;
      }
    }
  }
  @media only screen and (max-width: 539px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    p {
      width: 200px;
    }
  }
`;

const Tokenomics = () => {
  return (
    <TokenomicsContainer>
      <WrapperBg>
            <PannerFubiToken>
                <LogoFubi src={CoinIcon}></LogoFubi>
            </PannerFubiToken>
        </WrapperBg>
      <TokenomicsContent>
        <TokenomicsContentTitle>
          <h1>Tokenomics</h1>
        </TokenomicsContentTitle>
        <p>
          FuBi Finance has only raised the most necessary funds for Product
          Development and to help the FuBi ecosystem grow sustainably, bringing
          more value to users through our mainstream products. All allocation
          for Team members, Advisors, Partners, and Foundation tokens are locked
          for at least 1 year, the rest of the tokens are allocated to the
          Invester via Invesment sale, Bounty and Airdrop, Liquidity Provision
          and rewards as well as Marketing activities.
        </p>
      </TokenomicsContent>
      <TokenomicsChartWapper>
        <TokenomicsChartContent>
          <h1>FUBI Tokenomics</h1>
          <TokenomicsChart>
            <img src={chart} alt="" />
          </TokenomicsChart>
          <TokenomicsChartTitle>
            <p>Products development : 10%</p>
            <p>Burning : 49%</p>
            <p>Marketing : 20%</p>
            <p>Liquidity and Exchange: 11%</p>
            <p>Ecosystem : 10%</p>
          </TokenomicsChartTitle>
        </TokenomicsChartContent>
      </TokenomicsChartWapper>
    </TokenomicsContainer>
  );
};
export default Tokenomics;
