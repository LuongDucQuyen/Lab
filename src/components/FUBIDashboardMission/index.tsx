import { MissonMain, MissonImg } from "./style";
import { MainRight, MainRightBottom } from "../styleDashboardFUBI";
import imgArrow from "../../assets/dashboardFUBI/arrowrightblue.svg";
const DashboardMisson = () => {
  return (
    <MissonMain>
      <MissonImg></MissonImg>
      <MainRight>
        <h1>Mission</h1>
        <h2>FuBi Ecosystem</h2>
        <p>
          FuBi provides an optimal and secure cryptocurrency trading solution
          that provides the most perfect user experience. Built on a large
          database from leading technology corporations in the field of
          cryptocurrencies - FuBi builds safe transaction protocols in the face
          of increasing hacker attacks on crypto projects.
        </p>
        <MainRightBottom>
          <h3>See Explained</h3>
          <img src={imgArrow} />
        </MainRightBottom>
      </MainRight>
    </MissonMain>
  );
};
export default DashboardMisson;
