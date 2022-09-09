import React, { useEffect, useState, useMemo } from "react";

import { Box, Flex, useModal } from "@pkt2022/uikit";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actUserLichSuGiaoDich, actUserSwap, actGetLisDasboard } from "../../../redux/actions/UserManagerAction";

import { useActiveWeb3React } from "../../../hooks";
import BackGround from "../../../assets/swapFUBI/backGround.webp";
import FUBIIcon from "../../../assets/DasboardIcon/FUBI.svg";
import FUBIArrow from "../../../assets/swapFUBI/arrowDown.svg";
import ChangeIcon from "../../../assets/swapFUBI/changeIcon.svg";
import backgroundPrice from "../../../assets/swapFUBI/backGroundPrice.svg";
import ChangeIconV2 from "../../../assets/swapFUBI/changeV2Icon.svg";
import { ConnectWalletCusom } from "../../../components/ConnectWalletCustom";
import BnbIcon from "../../../assets/investmentFUBI/bnbIcon.svg";

const SwapWapper = styled(Flex)`
  width: 100%;
  min-height: calc(100vh - 70px);
  align-items: center;
  justify-content: center;
  :after {
    content: "";
    width: 100%;
    height: 420px;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("./assets/backgroundLeft.png");
    z-index: -100;
  }
  :before {
    width: 100%;
    height: 420px;
    position: absolute;
    content: "";
    top: 0;
    left: -0px;
    background-image: url("${BackGround}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -10px;
    background-position-x: center;
    z-index: -100;
  }
`;
const SwapContentGroup = styled(Flex)`
  width: 100%;
  max-width: 416px;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  :before {
    content: "";
    width: 100%;
    height: 420px;
    background: linear-gradient(to bottom, transparent, transparent, #262626);
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 1;
  }
`;
const SwapContent = styled(Box)`
  width: 100%;
  height: 100%;
  height: 570px;
  background: rgba(22, 22, 22, 0.8);
  border: 2px solid #262626;
  box-shadow: inset 0px 40px 50px #000000;
  backdrop-filter: blur(60px);
  border-radius: 10px;
  position: relative;
  padding: 38px 20px 36px 20px;
  z-index: 3;
  h2 {
    width: 100%;
    color: #b6b6b6;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-family: RALEWAYREGULAR;
    text-align: center;
    padding-bottom: 32px;
  }
`;
const SwapIconWapper = styled(Flex)`
  width: 117px;
  align-items: center;
  justify-content: center;
  height: 30px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  h1 {
    font-family: "Devator";
    font-style: normal;
    font-weight: 700;
    width: 100%;
    text-align: center;
    font-size: 36px;
    line-height: 90px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const InPutContainer = styled(Flex)`
  width: 100%;
  height: 60px;
  background: #262626;
  box-shadow: inset 0px 9px 11px #060606;
  border-radius: 28.5px;
  border-bottom: 2px solid #656565;
  padding: 16px 15px;
  justify-content: space-between;
`;
const InPutLeft = styled(Box)`
  input {
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    font-size: 20px;
    line-height: 23px;
    font-weight: 500;
    font-family: RALEWAYMEDIUM;
    color: #ffffff;
    padding-left: 15px;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #ffffff;
      opacity: 1; /* Firefox */
    }
  }
`;
const InPutRight = styled(Flex)`
  height: 100%;
  align-items: center;
  justify-content: space-between;
  button{
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 20px;
    font-family: RALEWAYMEDIUM;
    line-height: 24px;
    font-weight: 500;
    Vertical align: Top;
    padding-right: 10px;
  }

  .cus-width {
    min-width: 60px;
  }
`;
const CoinsList = styled(Flex)`
  flex: 1 1;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  padding-left: 6px;
  :before {
    width: 2px;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-50%);
    background-color: #828282;
  }
  p {
    font-family: RALEWAYSEMIBOLD;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    padding-left: 5px;
  }
`;
const CoinsListLogo = styled(Box)`
  width: 30px;
  height: 30px;
  img {
    width: 30px;
    height: 30px;
  }
`;
const IconDown = styled(Flex)`
  width: 25px;
  padding-left: 13px;
  align-items: center;
  img {
    width: 12px;
  }
`;
const IconChange = styled(Flex)`
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

const Detaill = styled(Flex)`
  width: 100%;
  height: 131px;
  flex-wrap: wrap;
  background-image: url("${backgroundPrice}");
  background-repeat: no-repeat;
  background-size: 130%;
  background-position: center center;
  margin-top: 33px;
  border-radius: 10px;
  border: 1px solid #757575;
  padding: 12px 18px 16px 21px; ;
`;
const DetaillItems = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px 0px;
  h1 {
    color: #ffffff;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    font-family: Gilroy;
    border-bottom: 1px dotted #828282;
  }
`;
const DetaillItemsRight = styled(Flex)`
  p {
    color: #ffffff;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    font-family: Gilroy;
  }
  img {
    margin-left: 10px;
  }
`;

const ConnecWallet = styled.button`
  width: 100%;
  max-width: 226px;
  height: 46px;
  border: none;
  border-radius: 9px;
  border-bottom: 2px solid #656565;
  color: #cfd9e6;
  font-size: 20px;
  font-family: RALEWAYMEDIUM;
  background: linear-gradient(180deg, rgba(42, 43, 45, 0) 0%, #2a2b2d 100%);
  cursor: pointer;
  transition: all 0.3s linear;

  :hover {
    background: linear-gradient(180deg, #3ea2ff 0%, #7743e6 100%);
  }
`;

const SwapFUBI = () => {
  const { account } = useActiveWeb3React();
  const [onModalConnectWallet] = useModal(<ConnectWalletCusom title="modalBuyBox" />);
  const dispatch = useDispatch();
  const [isPage, setIsPage] = useState({
    pageIndex: "0",
    pageSize: "10",
    type: 8,
  });

  const [isConvert, setIsConvert] = useState<Boolean>(false);

  useEffect(() => {
    dispatch(actUserLichSuGiaoDich(isPage));
  }, [dispatch, isPage]);

  useEffect(() => {
    dispatch(actGetLisDasboard());
  }, [dispatch]);

  const { userLichSuGiaoDich, userSwap, listUser }: any = useSelector<any>((state) => state.userAdmin);

  console.log(">>>>>> userLichSuGiaoDich", userLichSuGiaoDich);
  console.log(">>>>>> userSwap", userSwap);
  console.log(">>>>>> listUser", listUser);

  const handleConvert = () => {
    setIsConvert((prev) => !prev);
  };

  return (
    <SwapWapper>
      <SwapContentGroup>
        <SwapContent>
          <SwapIconWapper>
            <h1>SWAP</h1>
          </SwapIconWapper>
          <h2>Trade tokens in an instant</h2>
          {isConvert ? (
            <>
              <InPutContainer>
                <InPutLeft>
                  <input placeholder="0.00" />
                </InPutLeft>
                <InPutRight>
                  <button>MAX</button>
                  <CoinsList>
                    <CoinsListLogo>
                      <img src={FUBIIcon} alt="Icon" />
                    </CoinsListLogo>
                    <p className="cus-width">FUBI</p>
                    {/* <IconDown>
                      <img src={FUBIArrow} alt="Icon" />
                    </IconDown> */}
                  </CoinsList>
                </InPutRight>
              </InPutContainer>
            </>
          ) : (
            <>
              <InPutContainer>
                <InPutLeft>
                  <input placeholder="0.00" />
                </InPutLeft>
                <InPutRight>
                  <button>MAX</button>
                  <CoinsList>
                    <CoinsListLogo>
                      <img src={BnbIcon} alt="Icon" />
                    </CoinsListLogo>
                    <p className="cus-width">BUSD</p>
                    {/* <IconDown>
                      <img src={FUBIArrow} alt="Icon" />
                    </IconDown> */}
                  </CoinsList>
                </InPutRight>
              </InPutContainer>
            </>
          )}

          <IconChange onClick={() => handleConvert()}>
            <img src={ChangeIcon} alt="" />
          </IconChange>

          {isConvert ? (
            <>
              <InPutContainer>
                <InPutLeft>
                  <input placeholder="0.00" />
                </InPutLeft>
                <InPutRight>
                  <CoinsList>
                    <CoinsListLogo>
                      <img src={BnbIcon} alt="Icon" />
                    </CoinsListLogo>
                    <p className="cus-width">BUSD</p>
                    {/* <IconDown>
                      <img src={FUBIArrow} alt="Icon" />
                    </IconDown> */}
                  </CoinsList>
                </InPutRight>
              </InPutContainer>
            </>
          ) : (
            <>
              <InPutContainer>
                <InPutLeft>
                  <input placeholder="0.00" />
                </InPutLeft>
                <InPutRight>
                  <CoinsList>
                    <CoinsListLogo>
                      <img src={FUBIIcon} alt="Icon" />
                    </CoinsListLogo>
                    <p className="cus-width">FUBI</p>
                    {/* <IconDown>
                      <img src={FUBIArrow} alt="Icon" />
                    </IconDown> */}
                  </CoinsList>
                </InPutRight>
              </InPutContainer>
            </>
          )}

          <Detaill>
            <DetaillItems>
              <h1>Price</h1>
              <DetaillItemsRight>
                <p>1 BUSD = 1 USDT</p>
                <img src={ChangeIconV2} alt="" />
              </DetaillItemsRight>
            </DetaillItems>
            <DetaillItems>
              <h1>Gas</h1>
              <DetaillItemsRight>
                <p>0.02 USDT</p>
              </DetaillItemsRight>
            </DetaillItems>
            <DetaillItems>
              <h1>Fee</h1>
              <DetaillItemsRight>
                <p>0%</p>
              </DetaillItemsRight>
            </DetaillItems>
          </Detaill>
          <Flex justifyContent="center" pt="40px">
            {account ? (
              <ConnecWallet>Trade</ConnecWallet>
            ) : (
              <ConnecWallet onClick={onModalConnectWallet}>Connect wallet</ConnecWallet>
            )}
          </Flex>
        </SwapContent>
      </SwapContentGroup>
    </SwapWapper>
  );
};
export default SwapFUBI;
