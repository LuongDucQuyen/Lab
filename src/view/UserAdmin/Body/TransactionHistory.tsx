import HistoryMobile from "../../../components/DashBoarrd/HistoryMobile";
import History from "../../../components/DashBoarrd/History";
import { Box, useMatchBreakpoints } from "@pkt2022/uikit";
import styled from "styled-components";
import BackGroundV2 from "../../../assets/dashboardFUBI/backGroundV2.svg";

const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  :before {
    background-image: url("${BackGroundV2}");
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    background-position: center center;
    backdrop-filter: blur(20px);
  }
`

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

const TransactionHistory = () => {
  const { isMobileL } = useMatchBreakpoints();
  return (
    <Wrapper>
      {isMobileL ? (
        <HistoryMobile api={Fakeapi} limit={15} Title="Transaction History" />
      ) : (
        //@ts-ignore
        <History api={Fakeapi} limit={15} Title="Transaction History" />
      )}
    </Wrapper>
  );
};
export default TransactionHistory;
