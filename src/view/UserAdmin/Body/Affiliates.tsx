import { Box, Flex, useMatchBreakpoints } from "@pkt2022/uikit";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BG from "../../../assets/investmentFUBI/background.png";
import BG2 from "../../../assets/AffilatesFuBi/AffilatesFUBI.svg";
import History from "../../../components/DashBoarrd/History";
import HistoryMobile from "../../../components/DashBoarrd/HistoryMobile";
import { clearTimeout } from "timers";
const AffiliatesWapper = styled(Box)`
  width: 100%;
  height: 420px;
  padding-top: 20px;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    left: 0px;
    height: 420px;
    top: 0px;
    background-image: url("${BG}");
    background-repeat: no-repeat;
    background-size: 120%;
    background-position: center center;
    z-index: -1;
  }
  :after{
    content: "";
    width: 100%;
    height: 420px;
    position: absolute;
    left: -0px;
    top: 0px;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("./assets/backgroundLeft.png");
  }
  @media only screen and (max-width: 550px) {
    :before {
      background-size: 400%;
    }
  }
`;
const Overlay = styled(Box)`
width: 100%;
height: 100%;
:before{
  content: "";
  width: 100%;
  height: 420px;
  position: absolute;
  background: linear-gradient(to bottom,transparent ,transparent,#262626);
  top: 0;
  left: 0;
  z-index: -0;
}
`
const AffiliatesPanner = styled(Box)`
  width: 100%;
  height: calc(100% - 40px);
  background-image: url("${BG2}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  margin-bottom: 20px;
  z-index: 2;
`;
const AffiliatesPannerGroup = styled(Box)`
  position: absolute;
  height: 50%;
  width: 100%;
  bottom: 0%;
  left: 0%;
  padding-top: 28px;
`;
const AffiliatesPannerContent = styled(Flex)`
  max-width: 806px;
  width: 100%;
  position: absolute;
  flex-wrap: wrap;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;
const AffiliatesPannerTitle = styled(Box)`
  width: 100%;
  padding-bottom: 10px;
  padding-left: 16px;
  h1 {
    color: #ffffff;
    font-family: GilroyBold;
    font-size: 16px;
    line-height: 19px;
    width: 110px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.07);
    text-align: center;
  }
`;
const AffiliatesPannerInput = styled(Flex)`
  width: 100%;
  padding-left: 18px;
  padding-right: 18px;
  input {
    width: 100%;
    min-width: 250px;
    max-width: 550px;
    height: 52px;
    padding: 18px 29px 18px 29px;
    border-radius: 28px;
    background: #262626;
    border: none ;
    border-bottom: 2px solid #656565;
    box-shadow: inset 0px 11px 13px #000000;
    outline: none;
    color: #ffffff;
  }
  button {
    width: 226px;
    height: 55px;
    cursor: pointer;
    border-radius: 9px 9px 9px 9px;
    color: #cfd9e6;
    font-size: 16px;
    line-height: 28px;
    font-family: RALEWAYMEDIUM;
    background-color: linear-gradient(180deg, #3ea2ff 0%, #7743e6 0%);
    border: none;
    outline: none;
    margin-left: 30px;
    box-shadow: 0px 1.5px 0px 0.75px #959ca5;
    background: transparent;
    transition: all 0.5s linear;
    :hover {
      background: linear-gradient(180deg, #3ea2ff 0%, #7743e6 100%);
    }
    :active {
      transform: translateY(7px);
    }
  }
  @media only screen and (max-width: 550px) {
    flex-direction: column;
    button {
      margin-top: 20px;
      margin-left: 0px;
    }
  }
`;

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
];
const Affiliates = () => {
  const ApiHref = "http://lbt.finance/register-by?referral=thinhpham";
  const { isMobileL } = useMatchBreakpoints();
  const [message , setMessage] = useState("Coppy")
  const mgref = useRef();
  const handleClick = (e: any) => {
    navigator.clipboard.writeText(ApiHref)
      .then(() => {
        setMessage("Copied");
      })
      .catch(() => {
        setMessage("Copy error");
      })
      .finally(()=>{
        //@ts-ignore
        mgref.current = setTimeout(()=>{
          setMessage("Coppy")
        }, 500);
      })
      //@ts-ignore
    clearTimeout(mgref.current);
  };
  return (
    <>
    <AffiliatesWapper>
      <Overlay>
      <AffiliatesPanner>
        <AffiliatesPannerGroup>
          <AffiliatesPannerContent>
            <AffiliatesPannerTitle>
              <h1>Referral Link</h1>
            </AffiliatesPannerTitle>
            <AffiliatesPannerInput>
              <input value={ApiHref} />
              <button
                onClick={(e: any) => {
                  handleClick(e);
                }}
                onPointerDown={(e: any)=>{
                  handleClick(e);
                }}
              >
                {message}
              </button>
            </AffiliatesPannerInput>
          </AffiliatesPannerContent>
        </AffiliatesPannerGroup>
      </AffiliatesPanner>
      </Overlay>
    </AffiliatesWapper>
    {isMobileL ? (
      <HistoryMobile api={Fakeapi} limit={10} Title="View Details" />
    ) : (
      //@ts-ignore
      <History api={Fakeapi} limit={10} Title="View Details" />
    )}
    </>
  );
};
export default Affiliates;
