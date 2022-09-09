import React, { useState, useEffect, useContext } from "react";
import { Box, useMatchBreakpoints, Flex, Text } from "@pkt2022/uikit";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actGetListUser, actGetLisDasboard, actUserLichSuDauTu } from "../../../redux/actions/UserManagerAction";
import History from "../../../components/DashBoarrd/History";
import HistoryMobile from "../../../components/DashBoarrd/HistoryMobile";
import BG from "../../../assets/investmentFUBI/background.png";
import BGitem from "../../../assets/investmentFUBI/ArticleItem.png";
import img1 from "../../../assets/investmentFUBI/item1.png";
import img2 from "../../../assets/investmentFUBI/item2.png";
import img3 from "../../../assets/investmentFUBI/item3.png";
import img4 from "../../../assets/investmentFUBI/item4.png";
import LineInvest from "../../../assets/investmentFUBI/lineInvest.png";
import PopUpInvestment from "../../../components/PopUpBuyInvesment";
import { InvestmentPopupContext } from "../../../InvesmentProvider";
// web3 import
import { useWeb3React } from "@web3-react/core";

import FubiCoin from "../../../assets/FUBIToken/coin-icon.png";

const Wrapper = styled(Box)`
  width: 100%;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 420px;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("${BG}");
    background-position: center center;
    z-index: -100;
  }
  :after {
    content: "";
    width: 100%;
    height: 420px;
    position: absolute;
    left: -18px;
    top: 0px;
    z-index: -100;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("./assets/backgroundLeft.png");
  }
  /* @media only screen and (max-width: 639px) {
    :before {
      background-position: center center;
    }
  } */
  @media only screen and (max-width: 1079px) {
    width: calc(100%);
    left: -18px;
    :before {
      width: 100%;
    }
  }
`;
const Overlay = styled(Box)`
width: 100%;
height: fit-content;
:before{
  content:"";
  width:100%;
  height: 420px;
  background: linear-gradient(to bottom, transparent , transparent, #262626);
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 1;
}
`
const PannerInvestmentWapper = styled(Flex)`
  width: 100%;
  height: 420px;
  z-index: 6;
  position: relative;
  @media only screen and (max-width: 1079px) {
    width: calc(100% + 36px);
    left: -18px;
  }
`;
const PannerInvestmentFloor = styled(Flex)`
  height: 100%;
  width: 100%;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
`;

const PannerInvestmentGroup = styled(Flex)`
  height: 100%;
  min-width: 100%;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 1079px) {
    padding: 0px 18px;
  }
`;
const PannerInvestmentItem = styled(Box)`
  width: 255px;
  height: 346px;
  min-width: 255px;
  background-image: url("${BGitem}");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  padding: 18px 0;
  margin-right: 16px;
  :nth-child(4) {
    margin-right: 0px;
  }
`;
const PannerInvestmentItemBottom = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 20px;
  h3,
  h4,
  h5,
  h6,
  p {
    color: #ffffff;
  }
  h3 {
    font-size: 20px;
    width: 45%;
    font-family: RALEWAYBOLD;
    line-height: 21px;
    background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 19px 0px 5px 0px;
  }
  h6 {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 12px;
    font-family: GilroyBold;
    p {
      padding: 0px 3px;
      font-size: 30px;
      font-weight: 700;
      font-family: GilroyBold;
    }
  }
  h5 {
    font-size: 10px;
    font-family: GilroyBold;
    text-align: end;
    width: 100%;
  }

  .cus-bg-invest {
    background-image: url(${LineInvest});
    background-position: right -25px center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
const PannerInvestmentItemPrice = styled(Box)`
  width: 100%;
  padding: 0 18px;
  h4 {
    font-size: 16px;
    font-weight: 600;
    font-family: GilroyBold;
    line-height: 21px;
    min-width: 110px;
    display: inline-block;
    text-align: center;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.07);
  }

  .cus-3 {
    min-width: 80px;
  }
  .cus-2 {
    min-width: 120px;
  }
`;
const PannerInvestmentItemBTN = styled(Box)`
  width: 100%;
  margin-top: 19px;
  margin-left: 18px;
  margin-right: 18px;
  padding-bottom: 2px;
  border-radius: 0px 0px 5.86px 5.86px;
  /* background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(149, 156, 165, 1)); */
  button {
    width: calc(100% - 4px);
    height: 45px;
    background-color: black;
    color: #cfd9e6;
    font-family: RALEWAYMEDIUM;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    border-radius: 5.86px;
    margin-left: 2px;
    border: none;
    background: linear-gradient(180deg, rgba(42, 43, 45, 0) 0%, #2a2b2d 100%);
    transition: all 0.3s linear;
    cursor: pointer;

    :hover {
      background: linear-gradient(180deg, #3ea2ff 0%, #7743e6 100%);
    }
  }
`;
const Fakeapi = [
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Gold",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Gold",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Gold",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Gold",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Gold",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Gold",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Gold",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Gold",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Gold",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Gold",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Silver",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Silver",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Silver",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Silver",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Silver",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Silver",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Silver",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
  {
    CreateAt: "2022-08-08 11:32",
    Description: "Silver",
    ByUser: "Bryan Pham",
    Type: "USDT",
    Amount: "$213.67",
    Status: "Active",
  },
];

const initialData = [
  {
    img: img1,
    price: "$300 < $1,000",
    rank: "SILVER",
    change: "5",
  },
  {
    img: img2,
    price: "$1,000 < $5,000",
    rank: "GOLD",
    change: "9",
  },
  {
    img: img3,
    price: "$5,000 < $10,000",
    rank: "DIAMOND",
    change: "11",
  },
  {
    img: img4,
    price: "≥$10,000",
    rank: "TITANIUM",
    change: "15",
  },
];
const InvestmentFUBI = () => {
  const PopUpData = useContext(InvestmentPopupContext);
  const { isMobileL } = useMatchBreakpoints();
  const [DataClickItem, setDataClickItem] = useState({});
  const [showPopUp, setShowPopUp] = useState(false);
  const dispatch = useDispatch();
  const [isPage, setIsPage] = useState({
    pageIndex: "0",
    pageSize: "10",
    type: 2,
  });
  const [isList, setIsList]: any = useState([]);

  const { userLichSu, error }: any = useSelector<any>((state) => state.userAdmin);

  useEffect(() => {
    dispatch(actUserLichSuDauTu(isPage));
  }, [dispatch, isPage]);

  console.log("userLichSu >>>>>", userLichSu);

  useEffect(() => {
    if (userLichSu !== null) {
      setIsList(userLichSu.Data.Item);
      // setTotal(userLichSu.Data.Total);
    }
  }, [userLichSu]);

  const handlerClickBuy = (item: any) => {
    // @ts-ignore
    PopUpData.handleSetDataPopUpInvestment(item);
    // @ts-ignore
    PopUpData.handleShowPopUp();
  };
  return (
    <Wrapper>
      <Overlay></Overlay>
      <PannerInvestmentWapper>
        <PannerInvestmentFloor>
          <PannerInvestmentGroup>
            {initialData.map((item: any, index: number) => {
              return (
                <PannerInvestmentItem>
                  <Flex justifyContent="center" alignItems="center">
                    <img src={item.img} alt="" />
                  </Flex>
                  <PannerInvestmentItemBottom>
                    <PannerInvestmentItemPrice>
                      <h4 className={`cus-${index}`}>{item.price}</h4>
                    </PannerInvestmentItemPrice>
                    <Flex width="100%" justifyContent="space-between" alignItems="center" className="cus-bg-invest">
                      <Flex width="100%" pl="18px" pr="12px" justifyContent="space-between" alignItems="center">
                        <h3>{item.rank}</h3>
                        <Flex alignItems="flex-end">
                          <Flex alignItems="flex-end" pr="4px">
                            <Text fontSize="32px" color="#fff" lineHeight="inherit" fontWeight="bold">
                              {item.change}
                            </Text>
                            <Text as="p" lineHeight="inherit" fontSize="20px">
                              %
                            </Text>
                          </Flex>
                          <h5>MONTH</h5>
                        </Flex>
                      </Flex>
                    </Flex>

                    <PannerInvestmentItemBTN>
                      {/* @ts-ignore */}
                      <button
                        type="button"
                        onClick={() => {
                          handlerClickBuy(item);
                        }}
                      >
                        Buy
                      </button>
                    </PannerInvestmentItemBTN>
                  </PannerInvestmentItemBottom>
                </PannerInvestmentItem>
              );
            })}
          </PannerInvestmentGroup>
        </PannerInvestmentFloor>
      </PannerInvestmentWapper>
      {isMobileL ? (
        <HistoryMobile api={Fakeapi} limit={10} Title="Investment History" />
      ) : (
        //@ts-ignore
        <History api={Fakeapi} limit={10} Title="Investment History" />
      )}
    </Wrapper>
  );
};


export default InvestmentFUBI;
