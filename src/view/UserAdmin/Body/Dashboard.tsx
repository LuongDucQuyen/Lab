import React, { useState, useEffect } from "react";
import { Box} from "@pkt2022/uikit";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actGetListUser, actGetLisDasboard, actUserLichSuDauTu } from "../../../redux/actions/UserManagerAction";
import BackGround from "../../../assets/pannerDashboardFUBI.webp";
import DashBoardTop from "../../../components/DashBoarrd/DashBoardTop";
import BackGroundV2 from "../../../assets/dashboardFUBI/backGroundV2.svg";
const Wrapper = styled(Box)`
  width: 100%;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 50%;
    background-image: url("${BackGround}");
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: top;
    z-index: -2;
  }
  :after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
    background-size: 130%;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
    background-image: url("${BackGroundV2}");
  }
  @media only screen and (max-width: 1023px) {
    :before {
      display: none;
    }
  }
`;
const DashboardFUBI = () => {
  const dispatch = useDispatch();
  const [isListDashboard, setIsListDashboard] = useState([]);

  useEffect(() => {
    dispatch(actGetLisDasboard());
  }, []);

  const { listUser, error }: any = useSelector<any>((state) => state.userAdmin);

  console.log(">>>>>>", listUser);

  useEffect(() => {
    if (listUser && listUser !== undefined) {
      setIsListDashboard(listUser);
    }
  }, [listUser]);

  return (
    <Wrapper>
      <DashBoardTop isListDashboard={isListDashboard} />
    </Wrapper>
  );
};
export default DashboardFUBI;
