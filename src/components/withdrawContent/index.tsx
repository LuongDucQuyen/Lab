import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ConnectWalletCusom } from "../ConnectWalletCustom";
import { useModal } from "@pkt2022/uikit";
import {
  Wrapper,
  Title,
  TitleInput,
  InputItem,
  InputRight,
  TextContent,
  BtnConnect,
  ListCoins,
  Coin,
} from "./style";
import BUSDIcon from "../../assets/DasboardIcon/BUSD.svg";
import FUBIIcon from "../../assets/DasboardIcon/FUBI.svg";
import PolyGonDown from "../../assets/PolygonDownFUBI.svg";

const ListIcon = [
  {
    id: 1,
    img: BUSDIcon,
    title: "BUSD",
  },
  {
    id: 1,
    img: FUBIIcon,
    title: "FUBI",
  },
];

const WithdrawContent = () => {
  const context = useWeb3React();
  const { active, error } = context;
  const [onModalConnectWallet] = useModal(
    <ConnectWalletCusom title="modalBuyBox" />
  );
  const [showList , setShowList] = useState(false);
  const [isCoinShow, setIscoinShow] = useState(0);
  const handleShowList = (index: number) => {
    setIscoinShow(index);
  };
  return (
    <Wrapper>
      <Title>
        <h1>WITHDRAW</h1>
      </Title>
      <TitleInput>From Wallet</TitleInput>
      <InputItem mb="22px" onClick={()=>{setShowList(!showList)}}>
        <p>{ListIcon[isCoinShow].title}</p>
        <InputRight>
          <img src={ListIcon[isCoinShow].img} alt="" />
          <img src={PolyGonDown} alt="" style={{transform: `${showList ? 'rotateZ(180deg)' : 'rotateZ(0deg)'}`}} />
        </InputRight>
        <ListCoins style={{height:`${showList ? '100%' : '0px'}`}}>
          {ListIcon.map((item, index: number) => {
            if (!(index === isCoinShow)) {
              return (
                <Coin
                  onClick={() => {
                    handleShowList(index);
                  }}
                >
                  <p>{item.title}</p>
                  <InputRight>
                    <img src={item.img} alt="" />
                  </InputRight>
                </Coin>
              );
            }
          })}
        </ListCoins>
      </InputItem>
      <TitleInput>Amount</TitleInput>
      <InputItem mb="33px">
        <input type="number" placeholder="0,00" />
      </InputItem>
      <TextContent>
        <p>Fee</p>
        <p>$0</p>
      </TextContent>
      <BtnConnect>
        {active ? (
          <button>WITHDRAW</button>
        ) : (
          <button onClick={onModalConnectWallet}>Connect wallet</button>
        )}
      </BtnConnect>
    </Wrapper>
  );
};
export default WithdrawContent;
