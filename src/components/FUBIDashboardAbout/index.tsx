import React from "react";
import { MainGroup, MainLeft, MainRight , MainRightBottom } from "../styleDashboardFUBI";
import imgArrow from "../../assets/dashboardFUBI/arrowrightblue.svg";

const DashboardAbout = () => {
  return (
    <MainGroup>
      <MainLeft />
      <MainRight>
        <h1>About FuBi Finance</h1>
        <h2>FuBi Platform</h2>
        <p>
          FuBi is backed by blockchains on the Binance Smart Chain platform that
          direct dividends to our holders and amplify their value with the
          token. We protect the value of FuBi with a variety of built-in
          deflation mechanisms. We will soon provide some protocol native
          products to increase your income, not only in FuBi but also in other
          assets.
        </p>
        <MainRightBottom>
            <h3>See Explained</h3>
            <img src={imgArrow}/>
        </MainRightBottom>
      </MainRight>
    </MainGroup>
  );
};
export default DashboardAbout;
