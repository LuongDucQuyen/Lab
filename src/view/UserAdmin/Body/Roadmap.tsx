import { Box, Flex, useMatchBreakpoints } from "@pkt2022/uikit";
import styled from "styled-components";
import Map from "../../../assets/Roadmap/roadmap.svg";
import MapMobile from "../../../assets/Roadmap/roadmapmobile.svg";
import Polygon from "../../../assets/Roadmap/PolygonMap.svg";
import { WrapperBg, PannerFubiToken, LogoFubi } from "./styleBgFubi";
import CoinIcon from "../../../assets/FUBIToken/coin-icon.png";

const RoadMapWapper = styled(Box)`
  width: 100%;
`;

const RoadMapContent = styled(Flex)`
  width: 100%;
  justify-content: center;
`;
const RoadMapContentGroup = styled(Flex)`
  width: 100%;
  max-width: 880px;
  flex-wrap: wrap;
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
  justify-content: center;
  h1 {
    width: 50%;
    font-family: RALEWAYBOLD;
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    background: linear-gradient( to bottom, rgba(255,255,255,1), rgba(255,255,255,0) );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 40px;
    :after {
      width: 50%;
      position: absolute;
      content: "";
      height: 2px;
      background-color: #ffffff;
      top: 104px;
      left: 50%;
      transform: translateX(-50%);
    }
    :before {
      content: "";
      width: 10px;
      height: 10px;
      border-right: 2px solid #ffffff;
      border-bottom: 2px solid #ffffff;
      position: absolute;
      right: 25%;
      top: 104px;
      transform: translatex(40%) rotateZ(-45deg) translateY(-55%);
    }
  }
`;
const RoadMapMap = styled(Flex)`
  width: 100%;
  padding-top: 35px;
  justify-content: center;
  padding: 0px 123px;
  flex-wrap: wrap;
  position: relative;
  @media only screen and (max-width: 577px) {
    flex-direction: column;
    padding: 0px;
    padding-top: 155px;
    background-image: url("${MapMobile}");
    background-size: content;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 30px;
    padding-bottom: 50px;
  }
`;
const RoadMapItem = styled(Box)`
  width: 20%;
  align-items: start;
  height: 250px;
  padding: 10px 0px;
  position: relative;
  :nth-child(1) {
    :after {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 11px;
      height: 11px;
      position: absolute;
      background-image: url("${Polygon}");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  :nth-child(3) {
    :after {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 11px;
      height: 11px;
      position: absolute;
      background-image: url("${Polygon}");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  :nth-child(5) {
    :after {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 11px;
      height: 11px;
      position: absolute;
      background-image: url("${Polygon}");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  :nth-child(8) {
    :after {
      top: 0;
      left: 50%;
      transform: translateX(-50%) rotateZ(180deg);
      content: "";
      width: 11px;
      height: 11px;
      position: absolute;
      background-image: url("${Polygon}");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  :nth-child(10) {
    :after {
      top: 0;
      left: 50%;
      transform: translateX(-50%) rotateZ(180deg);
      content: "";
      width: 11px;
      height: 11px;
      position: absolute;
      background-image: url("${Polygon}");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  h2 {
    width: 100%;
    color: white;
    font-size: 22px;
    line-height: 53px;
    font-weight: 600;
  }
  p {
    width: 100%;
    color: white;
    font-size: 12px;
    line-height: 20px;
    font-weight: 300;
  }
  @media only screen and (max-width: 577px) {
    width: 35%;
    min-width: 170px;
    align-items: center;
    justify-content: center;
    height: 200px;
    padding-top: 4%;
    :nth-child(2) , :nth-child(4) , :nth-child(6) , :nth-child(7), :nth-child(9) {
      display: none;
    }
    :nth-child(11){
      height: 300px;
    }
  }
`;
const MapRoadmap = styled(Flex)`
  width: 100%;
  height: 292px;
  position: relative;
  @media only screen and (max-width: 821px) {
    height: 270px;
  }
  @media only screen and (max-width: 577px) {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 57%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    display: flex;
    alignitems: center;
    justifycontent: center;
    img {
      width: 100%;
      height: 110%;
    }
  }
`;
const MapGroup = styled(Flex)`
  position: absolute;
  width: calc(100% + 246px);
  left: -123px;
`;

const RoadMap = () => {
  const { isMobileL } = useMatchBreakpoints();
  return (
    <RoadMapWapper>
      <WrapperBg>
        <PannerFubiToken>
          <LogoFubi src={CoinIcon}></LogoFubi>
        </PannerFubiToken>
      </WrapperBg>
      <RoadMapContent>
        <RoadMapContentGroup>
          <h1>Roadmap</h1>
          <RoadMapMap>
            <RoadMapItem>
              <h2>Q3/2022</h2>
              <p>Research</p>
              <p>Product Development</p>
              <p>Internal Testnet</p>
              <p>Sale Invesment</p>
              <p>Community Development</p>
            </RoadMapItem>
            <RoadMapItem />
            <RoadMapItem>
              <h2>Q1/2023</h2>
              <p>Mainet</p>
              <p>IDO</p>
              <p>FUBI CEX listing</p>
              <p>Social</p>
              <p>Reward allocation</p>
            </RoadMapItem>
            <RoadMapItem />
            <RoadMapItem>
              <h2>Q2/2023</h2>
              <p>Marketing, Service and FuBi Platform</p>
              <p>Social Platform Integratio</p>
            </RoadMapItem>
            <MapRoadmap>
              {isMobileL ? (
                // <img src={MapMobile} alt="" />
                <></>
              ) : (
                <MapGroup>
                  <img src={Map} alt="" />
                </MapGroup>
              )}
            </MapRoadmap>
            <RoadMapItem />
            <RoadMapItem>
              <h2>Q4/2022</h2>
              <p>Testnet</p>
              <p>Smart Contract</p>
              <p>Future Big Finance Token (FUBI) Launch</p>
            </RoadMapItem>
            <RoadMapItem />
            <RoadMapItem>
              <h2>Q2/2023</h2>
              <p>Features Update</p>
              <p>Build</p>
              <p>Metaverse Entertaiment</p>
              <p>Social Activities: Chat, Voice</p>
            </RoadMapItem>
            <RoadMapItem />
          </RoadMapMap>
        </RoadMapContentGroup>
      </RoadMapContent>
    </RoadMapWapper>
  );
};
export default RoadMap;
