import { Box, Flex } from "@pkt2022/uikit";
import React from "react";
import styled from "styled-components";
import Frame1 from "./img/Frame1.png";
import imgTitle from "./img/Vector.svg";

import IMAGE1 from "./img/IMAGE1.png";
import IMAGE2 from "./img/IMAGE2.png";
import IMAGE3 from "./img/IMAGE3.png";
import IMAGE4 from "./img/IMAGE4.png";

const Wrapper = styled(Box)`
  width: 100%;
  background-color: #f5f5f5;
  padding-top: 30px;
  padding-bottom: 30px;
  background-image: url("../assets/backgroundGym.png");
  background-repeat: no-repeat;
  @media screen and (max-width: 821px) {
    padding-top: 24px;
  }
  @media screen and (max-width: 641px) {
    padding-top: 15px;
  }
`;

const CategoryGYMContainer = styled(Box)`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 0px 36px;
  @media screen and (max-width: 821px) {
    padding: 0px 18px;
  }
  @media screen and (max-width: 641px) {
    position: relative;
    z-index: 0;
  }
`;
const CategoryGYMTitle = styled(Box)`
  width: 100%;
  position: relative;
  /*h1 {
    font-size: 24px;
    font-weight: 1000;
    font-family: Gilroy;
    color: #333333;
    line-height: 36px;
    margin-bottom: 6px;
    font-style: italic;
    vertical-align: top;
    position: relative;
    z-index: 2;
    display: flex;
    p{
        font-size: 24px;
        font-weight: 10000;
        font-family: Gilroy;
        color: #333333;
        line-height: 36px;
        font-style: italic;
        padding-left: 6px;
    }
  }
  img {
    position: absolute;
    top: 0%;
    left: 13%;
    z-index: -1;
  }*/
  @media screen and (max-width: 641px) {
    h1 {
      font-size: 16px;
    }
  }
`;
const CategoryGYMContent = styled(Flex)`
  width: 100%;
  justify-content: end;
  height: 392px;
  margin: 20px 0px;
  box-sizing: boder-box;
  @media screen and (max-width: 1025px) {
    height: 347px;
  }
  @media screen and (max-width: 821px) {
    height: 250px;
  }
  @media screen and (max-width: 641px) {
    flex-direction: column;
    min-height: 580px;
  }
`;
const CategoryGYMPanner = styled(Flex)`
  width: 40%;
  height: 100%;
  background-image: url("./assets/pannerGym.svg");
  background-size: cover;
  background-position-x: center;
  img {
    border-radius: 6px;
  }
  @media screen and (max-width: 641px) {
    width: 100%;
    height: 50%;
    border-radius: 6px;
    position: relative;
    z-index: 2;
    img {
      width: 100%;
    }
  }
`;
const CategoryProductTrends = styled(Flex)`
  width: 60%;
  padding: 0 73px;
  height: 100%;
  flex-wrap: wrap;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 0px 6px 6px 0px;
  background-color: #ffffff;
  position: relative;
  h1 {
    width: 100%;
    text-align: center;
    color: #8b8b8b;
    font-family: Gilroy;
    font-size: 36px;
    line-height: 37.8px;
    font-weight: 400;
    margin-top: 77px;
    margin-bottom: 57px;
  }
  .CategoryProductTrendsGroup {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .CategoryProductTrendsItem {
    width: 20%;
    min-width: 110px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
    img {
      min-height: 85px;
    }
    h2 {
      width: 100%;
      text-align: center;
      margin-top: 33px;
      font-family: Gilroy;
      font-size: 13px;
      font-weight: 400;
      line-height: 13.65px;
      letter: 0.5px;
      color: #222222;
    }
    p {
      font-family: Gilroy;
      font-size: 24px;
      font-weight: 700;
      line-height: 25.2px;
      color: #222222;
      margin-top: 10px;
      margin-bottom: 54px;
    }
  }
  @media screen and (max-width: 1025px) {
    padding: 0 30px;
    h1{
      margin-top: 30px;
    }
  }
  @media screen and (max-width: 821px) {
    padding: 0 35px;
    h1 {
      font-size: 18px;
      line-height: 19px;
      margin: 30px 0px;
    }
    .CategoryProductTrendsItem {
      width: 23%;
      /*img {
        max-width: 65px;
        max-height: 60px;
      }*/
      h2 {
        font-size: 14px;
      }
      p {
        font-size: 12px;
        margin-bottom: 0px;
      }
    }
  }
  @media screen and (max-width: 641px) {
    width: calc(100% + 36px);
    height: 50%;
    position: relative;
    .CategoryProductTrendsItem {
      min-width: 112px;
    }
  }
`;
const fakeApi = [
  {
    img: IMAGE1,
    title: "Sản phẩm 1",
    price: "62,560",
  },
  {
    img: IMAGE2,
    title: "Sản phẩm 1",
    price: "62,560",
  },
  {
    img: IMAGE3,
    title: "Sản phẩm 1",
    price: "1,262,560",
  },
  {
    img: IMAGE4,
    title: "Sản phẩm 1",
    price: "62,560",
  },
];

const CategoryGYM = () => {
  return (
    <Wrapper>
      <CategoryGYMContainer>
        <CategoryGYMTitle>
            <img src={Frame1}/>
          {/* <h1>
            CHUYÊN MỤC <p> GYM</p>
            <img src={imgTitle} />
          </h1> */}
        </CategoryGYMTitle>
        <CategoryGYMContent>
          <CategoryGYMPanner>
            {/* <img src={panner} /> */}
          </CategoryGYMPanner>
          <CategoryProductTrends>
            <h1>Xu hướng sản phẩm</h1>
            <div className="CategoryProductTrendsGroup">
              {fakeApi.map((items) => {
                return (
                  <div className="CategoryProductTrendsItem">
                    <div  className="CategoryProductTrendsItemImg">
                      <img src={items.img} alt="" />
                    </div>
                    <h2>{items.title}</h2>
                    <p>{items.price}đ </p>
                  </div>
                );
              })}
            </div>
          </CategoryProductTrends>
        </CategoryGYMContent>
      </CategoryGYMContainer>
    </Wrapper>
  );
};
export default CategoryGYM;
