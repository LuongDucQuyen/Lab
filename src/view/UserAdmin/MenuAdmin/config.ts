import {HomeFUBIICON} from "../../../components/Svg";

export const MENU_HEIGHT = 0;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 332;
export const SIDEBAR_WIDTH_REDUCED = 87;

export const links = [
  {
    label: "Home",
    icon: "DashboardIcon",
    href: "/",
    FUBIIcon: HomeFUBIICON,
  },
  {
    label: "Dashboard",
    icon: "DashboardIcon",
    href: "/dashboard",
    FUBIIcon: HomeFUBIICON,
  },
  {
    label: "Swap",
    icon: "InvestmentIcon",
    href: "/swap",
    FUBIIcon: HomeFUBIICON,
  },
  {
    label: "Investment",
    icon: "DepositIcon",
    href: "/investment",
    FUBIIcon: HomeFUBIICON,
  },
  {
    label: "Withdraw",
    icon: "DepositIcon",
    href: "/Withdraw",
    FUBIIcon: HomeFUBIICON,
  },
  {
    label: "Transaction History",
    icon: "TransactionIcon",
    href: "/Transaction-History",
    FUBIIcon: HomeFUBIICON,
  },
  {
    label: "Affiliates",
    icon: "AffiliatesIcon",
    href: "/Affiliates",
    FUBIIcon: HomeFUBIICON,
  },
  {
    label: "More",
    icon: "MaThongBaoIcon",
    href: "/",
    FUBIIcon: HomeFUBIICON,
    items: [
      {
        label: "Fubi Token",
        href: "/Fubi-Token",
      },
      {
        label: "Tokenomics",
        href: "/Tokenomics",
      },
      {
        label: "Roadmap",
        href: "/Roadmap",
      },
      {
        label: "Whitepapper",
        href: "http://docs.fubi.finance",
      },
    ],
  },
];
