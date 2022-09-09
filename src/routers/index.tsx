import HomeTemplate from "../Templates/HomeTemplate";
import UserAdminTemplate from "../Templates/UserAdminTemplate";
import {
  HomeFUBI,
  DashboardFUBI,
  InvestmentFUBI,
  TransactionHistory,
  FubiToken,
  Tokenomics,
  Affiliates,
  RoadMap,
  SwapFUBI,
  WithdrawFubi,
} from "../view/UserAdmin/Body";

import "./styled.css";

const routeHomeTemplate = [
  {
    Component: HomeFUBI,
    exact: true,
    path: "/",
  },
  {
    Component: DashboardFUBI,
    exact: true,
    path: "/dashboard",
  },
  {
    Component: SwapFUBI,
    exact: true,
    path: "/swap",
  },
  {
    Component: InvestmentFUBI,
    exact: true,
    path: "/investment",
  },
  {
    Component: WithdrawFubi,
    exact: true,
    path: "/Withdraw",
  },
  {
    Component: TransactionHistory,
    exact: true,
    path: "/Transaction-History",
  },

  {
    Component: TransactionHistory,
    exact: true,
    path: "/Whitepapper",
  },

  {
    Component: Affiliates,
    exact: true,
    path: "/Affiliates",
  },
  {
    Component: FubiToken,
    exact: true,
    path: "/Fubi-Token",
  },

  {
    Component: RoadMap,
    exact: true,
    path: "/Roadmap",
  },

  {
    Component: Tokenomics,
    exact: true,
    path: "/Tokenomics",
  },
];

export const renderRouteUser = () => {
  return routeHomeTemplate.map((_route: any, index: any) => {
    return (
      <>
        <UserAdminTemplate
          key={`route-${index}`}
          exact={_route.exact}
          Component={_route.Component}
          path={_route.path}
        />
      </>
    );
  });
};
