import React from "react";
import { Wrapper, Items, ItemsTop, ItemIcon, BoxTitle , Overlay } from "./style";
import BUSD from "../../../assets/DasboardIcon/BUSD.svg";
import FUBI from "../../../assets/DasboardIcon/FUBI.svg";
import TOTAL from "../../../assets/DasboardIcon/TotalInvestment.svg";
import NETWORD from "../../../assets/DasboardIcon/TotalProfit.svg";
import PROFIT from "../../../assets/DasboardIcon/Daily.svg";
import Member from "../../../assets/DasboardIcon/MemBer.svg";

const FakeApi = [
  {
    title: "BUSD Wallet",
    icons: BUSD,
    price: "0.00",
    nameApi: "NextInvest",
  },
  {
    title: "FUBI Wallet",
    icons: FUBI,
    price: "0.00",
    nameApi: "NextInvest",
  },
  {
    title: "Total Member",
    icons: Member,
    price: "0.00",
    nameApi: "NextInvest",
  },
  {
    title: "Total Invest",
    icons: TOTAL,
    price: "0.00",
    nameApi: "NextInvest",
  },
  {
    title: "Total Profit",
    icons: NETWORD,
    price: "0.00",
    nameApi: "NextInvest",
  },
  {
    title: "Profit Daily",
    icons: PROFIT,
    price: "0.00",
    nameApi: "NextInvest",
  },
];

interface PropsDashboard {
  isListDashboard?: any;
}

const DashBoardTop: React.FC<PropsDashboard> = ({ isListDashboard }) => {

  return (
    <Wrapper>
      <Overlay>
      {FakeApi.map((item) => {
        return (
          <Items>
            <ItemsTop>
              <BoxTitle>{item.title}</BoxTitle>
              <ItemIcon>
                <img src={item.icons} alt="icon" />
              </ItemIcon>
            </ItemsTop>
            <h1>${isListDashboard[item.nameApi]}</h1>
          </Items>
        );
      })}
      </Overlay>
    </Wrapper>
  );
};
export default DashBoardTop;
