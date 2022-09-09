import React, { useState, useContext } from "react";
import { useModal } from "@pkt2022/uikit";
// web3 import
import { useWeb3React } from "@web3-react/core";
import { ConnectWalletCusom } from "../ConnectWalletCustom";
import FubiCoin from "../../assets/FUBIToken/coin-icon.png";
import { InvestmentPopupContext } from "../../InvesmentProvider";
import BUSDIcon from "../../assets/DasboardIcon/BUSD.svg";
import {
  PopUpBuyModal,
  PopUpBuyModalFloor,
  PopUpBuy,
  PopUpTop,
  PopContent,
  PopUpInPut,
  PopUpSelecToken,
  PopUpShowToken,
  PopUpShowTokenList,
  PopUpText,
  PopUptextItem,
  PopUpButton,
  PopUpClose,
} from "./style";

const DataTokenList = [
  {
    img: BUSDIcon,
    name: "BUSD",
    id: 1,
  },
  {
    img: BUSDIcon,
    name: "BUSD",
    id: 2,
  },
  {
    img: BUSDIcon,
    name: "BUSD",
    id: 3,
  },
  {
    img: BUSDIcon,
    name: "BUSD",
    id: 4,
  },
];
const PopUpInvestment = (prop: any) => {
  const context = useWeb3React();
  const { active, error } = context;
  const Data = useContext(InvestmentPopupContext);
  // @ts-ignore
  const DataClickItem = Data.DataPopUpInvestment;
  // @ts-ignore
  const isShowPopUp = Data.isShowPopUp;

  const [ChoseToken, setChoseToken] = useState(0);
  const [ShowListToken, setShowListToken] = useState(false);
  const [onModalConnectWallet] = useModal(
    <ConnectWalletCusom title="modalBuyBox" />
  );
  const handleClickPopUp = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };
  // const handlerClickChooseToken = (index: number) => {
  //   setShowListToken(false);
  //   setChoseToken(index);
  // };
  // Lock body scroll
  return (
    <PopUpBuyModal
      style={{
        width: `${isShowPopUp ? "100%" : "0%"}`,
        height: `${isShowPopUp ? "100%" : "0%"}`,
        top: `${isShowPopUp ? "0%" : "100%"}`,
        left: `${isShowPopUp ? "0%" : "100%"}`,
        transitionDelay: `${isShowPopUp ? "0s" : "0.3s"}`,
      }}
      onClick={() => {
        // @ts-ignore
        Data.handleClosePopUp();
      }}
    >
      <PopUpBuyModalFloor
        className={isShowPopUp ? "popup-show-Modal" : "popup-hide-Modal"}
      >
        <PopUpBuy
          onClick={(e) => {
            handleClickPopUp(e);
          }}
          className={isShowPopUp ? "popup-show" : "popup-hide"}
        >
          {/* @ts-ignore */}
          <PopUpClose
            onClick={() => {
              // @ts-ignore
              Data.handleClosePopUp();
            }}
          />
          <PopUpTop>
            {/* @ts-ignore */}
            <img src={DataClickItem.img} alt="" />
          </PopUpTop>
          <PopContent>
            {/* @ts-ignore */}
            <h1>Buy {DataClickItem.rank}</h1>
            <PopUpInPut>
              <input type="number" placeholder="0.0" />
              <PopUpSelecToken>
                <PopUpShowToken
                  onClick={() => setShowListToken(!ShowListToken)}
                >
                  <img src={DataTokenList[ChoseToken].img} alt="" />
                  <p>{DataTokenList[ChoseToken].name}</p>
                  {/* <img src={PolyGonDown} alt="" /> */}
                </PopUpShowToken>
              </PopUpSelecToken>
            </PopUpInPut>
            <PopUpText>
              <PopUptextItem>
                <p>Price</p>
                {/* @ts-ignore */}
                <p>{DataClickItem.price}</p>
              </PopUptextItem>
              <PopUptextItem>
                <p>Interest rate</p>
                {/* @ts-ignore */}
                <p>{DataClickItem.change}%/month </p>
              </PopUptextItem>
            </PopUpText>
            <PopUpButton>
              {active ? (
                <button>Buy</button>
              ) : (
                <button onClick={onModalConnectWallet}>Connect wallet</button>
              )}
            </PopUpButton>
          </PopContent>
        </PopUpBuy>
      </PopUpBuyModalFloor>
    </PopUpBuyModal>
  );
};
export default PopUpInvestment;
