import { MainRight, MainRightBottom } from "../styleDashboardFUBI";
import { MainEcosystem , MainEcosystemImg } from "./style";
import imgArrow from "../../assets/dashboardFUBI/arrowrightblue.svg";
const DashboardEcosytem = () => {
  return (
    <MainEcosystem>
      <MainRight>
        <h1>FuBi Ecosystem</h1>
        <h2>FuBi Decentralized</h2>
        <p>
          FuBi Decentralized Exchange will facilitate transactions performed
          faster, more cost-effectively than centralized exchanges. The
          elimination of the intermediary validator significantly reduces fees
          and latency before the buy/sell order is processed.{" "}
        </p>
        <MainRightBottom>
        <h3>See Explained</h3>
        <img src={imgArrow}/>
      </MainRightBottom>
      </MainRight>
      <MainEcosystemImg></MainEcosystemImg>
    </MainEcosystem>
  );
};
export default DashboardEcosytem;
