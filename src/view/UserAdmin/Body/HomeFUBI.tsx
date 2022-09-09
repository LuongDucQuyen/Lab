import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, useMatchBreakpoints } from "@pkt2022/uikit";
import Picture from "../../../components/Picture";
import DashboardAbout from "../../../components/FUBIDashboardAbout";
import DashboardVision from "../../../components/FUBIDashboardVision";
import DashboardMisson from "../../../components/FUBIDashboardMission";
import DashboardEcosytem from "../../../components/FUBIDashboardEcosytem";
import FooterHomeFuBi from "../../../components/FUBIDashboardFoodter";
import backGroundSquare1 from "../../../assets/backgroundsque1FUBI.png";
import backGroundSquare from "../../../assets/backgroundsqueFUBI.png";
import SquareLine from "../../../assets/dashboardFUBI/squreLine.svg";
import SquareBlue from "../../../assets/dashboardFUBI/squreBlue.svg";
import BackgroundElip from "../../../assets/dashboardFUBI/Ellipsebackgroound.svg";
import elipContent from "../../../assets/dashboardFUBI/elipGroup.svg";
import backgroundThree from "../../../assets/dashboardFUBI/ThreeGroup.png";
import ContentThree from "../../../assets/dashboardFUBI/threeContent.svg";
import elipContentChildren from "../../../assets/dashboardFUBI/elipChilren.svg";
import ThreeGroup from "../../../assets/dashboardFUBI/threeGroup.svg";
import ArrowSlider from "../../../assets/dashboardFUBI/ArrowSlider.svg";
import PktPartner from "../../../assets/HomeFubi/PktPartner.png";
import Bounce from "../../../assets/HomeFubi/Bounce.png";
import Bnb from "../../../assets/HomeFubi/bnb.png";
import BscPad from "../../../assets/HomeFubi/bscPad.png";
import Pancake from "../../../assets/HomeFubi/Pancake.png";
import Mexc from "../../../assets/HomeFubi/Mexc.png";
import { Link } from "react-router-dom";

// import ThreeGroup from "../../../assets/dashboardFUBI/ThreeGroup.png";
import { BoxPartnership } from "./styleBgFubi";

import { fetchAllUser } from "../../../services/apiBase";

const HomeFUBIMain = styled(Box)`
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 45px;
  :before {
    content:"";
    width: 100%;
    height: 420px;
    position: absolute;
    background: linear-gradient(to bottom,transparent ,transparent,transparent,#262626);
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
const HomeFUBIItem1 = styled(Flex)`
  width: 100%;
  height: 380px;
  position: relative;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
`;
const HomeFUBIItem1Floor = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
  transition: all 0.5s linear;
  @media only screen and (max-width: 912px) {
    width: 300%;
    height: 100%;
  }
`;
const HomeFUBIItem1Conten = styled(Flex)`
  width: 100%;
  height: calc(100% - 96px);
  height: 368px;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  a {
    width: 100%;
    max-width: 226px;
    height: 66px;
    display: flex;
    margin-top: 10px;
    align-items: center;
    border-radius: 9px 9px 9px 9px;
    box-shadow: 0px 2px 2px 0px #959ca5;
    background: linear-gradient(180deg, transparent, transparent);
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
    transition: all 0.5s linear;
    :active {
      transform: translateY(7px);
      transition: all 0.5s linear;
    }
    :hover {
      background: linear-gradient(180deg, #3ea2ff 0%, #7743e6 100%);
      transition: all 0.5s linear;
    }
    p {
      width: 100%;
      text-align: center;
      font-size: 26px;
      line-height: 28px;
      font-weight: 500;
      letter-spacing: -1%;
      color: #cfd9e6;
      font-family: RALEWAYMEDIUM;
    }
  }
  .HomeFUBIItem1Conten {
    height: 290px;
    display: flex;
    /* width: 60%; */
    justify-content: flex-start;
    align-items: center;
  }
  .HomeFUBIItem1ContenCricel {
    background-image: url("${BackgroundElip}");
    background-repeat: no-repeat;
    background-size: contain;
    align-items: center;
    background-position: center center;
    padding: 0px;
    justify-content: center;
    width: 270px;
  }
  .HomeFUBIItem1ContenThree {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .HomeFUBIItem1HoverScale4 {
      position: absolute;
      width: 107px;
      height: 107px;
      top: 14%;
      transform: scale(0.7);
    }
    .HomeFUBIItem1HoverScale5 {
      position: absolute;
      top: 28%;
      width: 48px;
      height: 48px;
      top: 36%;
      transition: all 0.5s linear;
      transform: scale(0.8);
    }
  }
  :hover {
    .HomeFUBIItem1HoverRotate1 {
      transform: rotate(90deg) scale(1.4);
      top: -3%;
    }
    .HomeFUBIItem1HoverScale1 {
      transform: scaleX(1.95);
    }
    .HomeFUBIItem1HoverScale2 {
      transform: rotate(90deg) scale(2.2);
    }
    .HomeFUBIItem1HoverScale3 {
      transform: rotate(90deg) scale(2.2);
      top: 39%;
      left: 41%;
    }
    .HomeFUBIItem1HoverScale4 {
      transform: rotateZ(60deg) scale(0.9) translateX(-5px);
      left: 30%;
    }
    .HomeFUBIItem1HoverScale5 {
      transform: rotateZ(90deg) scale(1.1);
      left: 43%;
      /* top: 35%; */
    }
  }
  @media only screen and (max-width: 913px) {
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .HomeFUBIItem1Conten {
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  }
`;
const HomeFUBIItem1ContenSquare = styled(Box)`
  width: 173px;
  height: 173px;
  background-color: rgba(0, 0, 0);
  border-radius: 14px;
  position: relative;
  left: -12%;
  :before {
    content: "";
    position: absolute;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background: linear-gradient(to bottom, #656565, #575757);
    border-radius: 14px;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  .ContenSquareBG1,
  .ContenSquareBG2 {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .ContenSquareBG1 {
    z-index: -1;
    top: 15%;
    left: 15%;
  }
  .ContenSquareBG2 {
    z-index: -2;
    top: 30%;
    left: 30%;
  }
`;
const HomeFUBIItem1ContenSquareChild = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  .HomeFUBIItem1HoverScale1 {
    width: 60%;
    height: 100%;
    position: absolute;
    z-index: 0;
    transition: all 0.5s linear;
    /* transform: scale(0.8); */
  }
  .SquareChildImg {
    width: 48px;
    height: 48px;
    transition: all 0.5s linear;
    position: relative;
    z-index: 2;
  }
`;

const HomeFUBIItem1ContenCricel = styled(Flex)`
  width: 236px;
  min-width: 236px;
  height: 190px;
  max-height: 215px;
  /* background-color: black; */
  border-radius: 50%;
  position: relative;
  align-items: center;
  justify-content: center;
  /* :before {
    content: "";
    position: absolute;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border-radius: 50%;
    background: linear-gradient(to bottom, #656565, rgba(30, 30, 30));
  } */
  .HomeFUBIItem1HoverScale2 {
    position: absolute;
    z-index: 0;
    transition: all 0.5s linear;
    transform: scale(1);
  }
  .HomeFUBIItem1HoverScale3 {
    position: absolute;
    transition: all 0.5s linear;
    transform: scale(0.9);
    top: 35.5%;
    left: 38.5%;
  }
`;
const HomeFUBIItem1ContenThree = styled(Flex)`
  width: 290px;
  height: 240px;
  background-image: url("${backgroundThree}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  justify-content: center;
  .HomeFUBIItem1HoverScale4 {
    transition: all 0.5s linear;
    margin-top: 40px;
  }
`;
const HomeFUBIItem1Btn = styled(Flex)`
  width: 100%;
  max-width: 226px;
  height: 66px;
  margin-top: 10px;
  align-items: center;
  border-radius: 9px 9px 9px 9px;
  box-shadow: 0px 2px 2px 0px #959ca5;
  background: linear-gradient(180deg, transparent, transparent);
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer */
  -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
  transition: all 0.5s linear;
  :active {
    transform: translateY(7px);
    transition: all 0.5s linear;
  }
  :hover {
    background: linear-gradient(180deg, #3ea2ff 0%, #7743e6 100%);
    transition: all 0.5s linear;
  }
  p {
    width: 100%;
    text-align: center;
    font-size: 26px;
    line-height: 28px;
    font-weight: 500;
    letter-spacing: -1%;
    color: #cfd9e6;
    font-family: RALEWAYMEDIUM;
  }
`;
const SliderBtn = styled(Box)`
  position: absolute;
  top: 50%;
  padding: 10px;
  z-index: 1;
  :nth-child(1) {
    transform: translateY(-50%);
    left: 0%;
  }
  :nth-child(2) {
    transform: translateY(-50%) rotateZ(180deg);
    right: 0%;
  }
`;
const HomeFUBI = () => {
  const { isDesktopL, isTablet } = useMatchBreakpoints();
  const [isCloneArr, setIsCloneArr] = useState<any>([]);
  const { count }: any = useSelector<any>((state) => state.counter);
  const dispatch = useDispatch();
  const history = useHistory();

  const [ShowSlider, setShowSlider] = useState(0);
  const handlerSliderPrev = () => {
    if (!(ShowSlider === 0)) {
      setShowSlider(ShowSlider - 1);
    }
  };
  const handlerSliderNext = () => {
    if (ShowSlider < 2) {
      setShowSlider(ShowSlider + 1);
    }
  };
  return (
    <HomeFUBIMain>
      <HomeFUBIItem1>
        {window.outerWidth < 913 ? (
          <>
            <SliderBtn
              onClick={() => {
                handlerSliderPrev();
              }}
              style={{ opacity: `${ShowSlider === 0 ? 0.3 : 1}` }}
            >
              <img src={ArrowSlider} />
            </SliderBtn>
            <SliderBtn
              onClick={() => {
                handlerSliderNext();
              }}
              style={{ opacity: `${ShowSlider === 2 ? 0.3 : 1}` }}
            >
              <img src={ArrowSlider} />
            </SliderBtn>
          </>
        ) : (
          <></>
        )}
        <>
          {isTablet ? (
            <HomeFUBIItem1Floor
              style={{ transform: `translateX(${ShowSlider * (-100 / 3)}%)` }}
            >
              {/* <Flex> */}
              <HomeFUBIItem1Conten>
                <div className="HomeFUBIItem1Conten">
                  <HomeFUBIItem1ContenSquare>
                    <img className="ContenSquareBG1" src={backGroundSquare} />
                    <img className="ContenSquareBG2" src={backGroundSquare1} />
                    <HomeFUBIItem1ContenSquareChild>
                      <img
                        className="HomeFUBIItem1HoverScale1"
                        src={SquareLine}
                      />
                      <img
                        className="SquareChildImg HomeFUBIItem1HoverRotate1"
                        src={SquareBlue}
                      />
                    </HomeFUBIItem1ContenSquareChild>
                  </HomeFUBIItem1ContenSquare>
                </div>
                <Link to="/swap">
                  <p>Swap</p>
                </Link>
              </HomeFUBIItem1Conten>
              <HomeFUBIItem1Conten>
                <div className="HomeFUBIItem1Conten HomeFUBIItem1ContenCricel">
                  <HomeFUBIItem1ContenCricel>
                    <img
                      className="HomeFUBIItem1HoverScale2"
                      src={elipContent}
                    />
                    {/* <img className="HomeFUBIItem1HoverScale3" src={elipContentChildren} /> */}
                  </HomeFUBIItem1ContenCricel>
                </div>
                <Link to="/dashboard">
                  <p>Dashboard</p>
                </Link>
              </HomeFUBIItem1Conten>
              <HomeFUBIItem1Conten>
                <div className="HomeFUBIItem1Conten HomeFUBIItem1ContenThree">
                  <HomeFUBIItem1ContenThree>
                    <img
                      className="HomeFUBIItem1HoverScale4"
                      src={ThreeGroup}
                    />
                    <img
                      className="HomeFUBIItem1HoverScale5"
                      src={ContentThree}
                    />
                  </HomeFUBIItem1ContenThree>
                </div>
                <Link to="/investment">
                  <p>Investment</p>
                </Link>
              </HomeFUBIItem1Conten>
              {/* </Flex> */}
            </HomeFUBIItem1Floor>
          ) : (
            <Flex justifyContent="center" width="100%">
              <Flex maxWidth="980px" width="100%">
                <HomeFUBIItem1Conten>
                  <div className="HomeFUBIItem1Conten">
                    <HomeFUBIItem1ContenSquare>
                      <img className="ContenSquareBG1" src={backGroundSquare} />
                      <img
                        className="ContenSquareBG2"
                        src={backGroundSquare1}
                      />
                      <HomeFUBIItem1ContenSquareChild>
                        <img
                          className="HomeFUBIItem1HoverScale1"
                          src={SquareLine}
                        />
                        <img
                          className="SquareChildImg HomeFUBIItem1HoverRotate1"
                          src={SquareBlue}
                        />
                      </HomeFUBIItem1ContenSquareChild>
                    </HomeFUBIItem1ContenSquare>
                  </div>
                  <Link to="/swap">
                    <p>Swap</p>
                  </Link>
                </HomeFUBIItem1Conten>
                <HomeFUBIItem1Conten>
                  <div className="HomeFUBIItem1Conten HomeFUBIItem1ContenCricel">
                    <HomeFUBIItem1ContenCricel>
                      <img
                        className="HomeFUBIItem1HoverScale2"
                        src={elipContent}
                      />
                      {/* <img className="HomeFUBIItem1HoverScale3" src={elipContentChildren} /> */}
                    </HomeFUBIItem1ContenCricel>
                  </div>
                  <Link to="/dashboard">
                    <p>Dashboard</p>
                  </Link>
                </HomeFUBIItem1Conten>
                <HomeFUBIItem1Conten>
                  <div className="HomeFUBIItem1Conten HomeFUBIItem1ContenThree">
                    <HomeFUBIItem1ContenThree>
                      <img
                        className="HomeFUBIItem1HoverScale4"
                        src={ThreeGroup}
                      />
                      <img
                        className="HomeFUBIItem1HoverScale5"
                        src={ContentThree}
                      />
                    </HomeFUBIItem1ContenThree>
                  </div>
                  <Link to="/investment">
                    <p>Investment</p>
                  </Link>
                </HomeFUBIItem1Conten>
              </Flex>
            </Flex>
          )}
        </>
      </HomeFUBIItem1>
      <DashboardAbout></DashboardAbout>
      <DashboardVision></DashboardVision>
      <BoxPartnership>
        <Box pb="32px">
          <Picture url={PktPartner} />
        </Box>
        <Box>
          <Flex pb="32px">
            <Box pr="7px">
              <Picture url={Bounce} />
            </Box>
            <Box pr="7px">
              <Picture url={Bnb} />
            </Box>
            <Box>
              <Picture url={BscPad} />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex pb="32px">
            <Box pr="7px">
              <Picture url={Pancake} />
            </Box>
            <Box>
              <Picture url={Mexc} />
            </Box>
          </Flex>
        </Box>
      </BoxPartnership>
      <FooterHomeFuBi/>
    </HomeFUBIMain>
  );
};

export default HomeFUBI;
