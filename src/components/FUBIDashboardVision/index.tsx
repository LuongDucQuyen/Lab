import React from "react";
import { MainRight , MainRightBottom } from "../styleDashboardFUBI";
import { VisionMain , VisonImg } from "./style";
import imgArrow from "../../assets/dashboardFUBI/arrowrightblue.svg";
const DashboardVision = () => {
  return (
    <VisionMain>
      <MainRight>
        <h1>Vision</h1>
        <h2>FuBi Ecosystem</h2>
        <p>
          We own a team with many years of experience in the financial field,
          technology and cryptocurrencies. With more than 8 years of
          construction and management investment fund we know that the
          transmission.<br /> “FUBI - FUTURE BIG FINANCE. INVESTMENT BENEFITS FOR THE
          COMMUNITY AND INVESTORS”
        </p>
        <MainRightBottom>
            <h3>See Explained</h3>
            <img src={imgArrow}/>
        </MainRightBottom>
      </MainRight>
      <VisonImg/>
    </VisionMain>
  );
};
export default DashboardVision;
