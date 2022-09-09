import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Box, Flex } from "@pkt2022/uikit";
import Slider from "react-slick";

import Img from "../../assets/PannerHome/pannerDestop.png";
import Img2 from "../../assets/PannerHome/pannerDestop2.png";
import Img3 from "../../assets/PannerHome/pannerDestop3.png";
import Pause from "../../assets/pause.png";
import Play from "../../assets/play.svg";


const Wrapper = styled(Box)`
  width: 100%;
  max-height: 592px;
  position: relative;
  overflow: hidden;
`
const Panner = styled(Box)`
  width: 100%;
  height: 512px;
  max-width: 1440px;
  margin: 80px auto 0px;
  .slick-list{
    overflow: inherit;
  }
  .slick-prev, .slick-next {
    z-index: 1;
  }
  .slick-slide {
    
  }
  .slick-slide img{
    height: 100%;
  }
  @keyframes animate {
    from {
      left: 100%;
    }
    to {
      left: 0%;
    }
  }
  .slick-prev {
    background-image: url("../assets/Arrow1.svg");
    left: 36px;
    width: 30px;
    height: 48px;
    background-size: contain;
    background-repeat: no-repeat;
    :after , :before {
      display: none;
    }
  }
  .slick-next {
    background-image: url("../assets/Arrow2.svg");
    right: 36px;
    width: 30px;
    height: 48px;
    background-size: contain;
    background-repeat: no-repeat;
    :before {
      display: none;
    }
  }
  @media screen and (max-width: 1281px) {
    height: 455px;
  }
  @media screen and (max-width: 1025px) {
    height: 365px;
  }
  @media screen and (max-width: 968px){
    margin: 152px auto 0px;
  }
  @media screen and (max-width: 821px) {
    height: 290px;
    .slick-next , .slick-prev{
      width: 30px;
      height: 38px;
    }
    .slick-next{
      right: 20px;
    }
    .slick-prev{
      left: 20px;
    }
  }
  @media screen and (max-width: 769px) {
    height: 265px;
  }
  @media screen and (max-width: 641px) {
    height: 235px;
  }
  @media screen and (max-width: 576px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 571px) {
    height: 205px;
  }
  @media screen and (max-width: 430px) {
    height: 153px;
  }
  @media screen and (max-width: 426px) {
    height: 150px;
  }
  @media screen and (max-width: 376px) {
    height: 130px;
  }
  @media screen and (max-width: 326px) {
    height: 110px;
  }
`;

const ButtonPanner = styled(Flex)`
  position: absolute;
  z-index: 1;
  width: 200px;
  height: 45px;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 641px) {
    display: none;
  }
`;
const ButtonArr = styled(Flex)`
  width: 45px;
  height: 100%;
  border-radius: 22px;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  margin-right:10px;
  position:relative;
  .numberOrder {
    font-size: 14px;
    font-family: Gilroy;
    font-weight: 600;
    line-height: 44px;
    color: #ffffff;
    padding-right: 1px;
  }
  .pannerLength {
    font-size: 12px;
    font-family: Gilroy;
    font-weight: 400;
    line-height: 44px;
    color: #ffffff;
  }
  @media screen and (max-width: 769px) {
    width: 64px;
    height: 24px;
    .numberOrder {
      font-size: 12px;
    }
    .pannerLength {
      font-size: 10px;
    }
    button {
      width: 4px;
      height: 8px;
    }
  }
`;

const ButtonPlayPause = styled(Flex)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
    width: 22px;
    height: 22px;
  }
`;
const fakeApi = [Img, Img2, Img3, Img , Img2, Img3];

function SampleNextArrow(props : any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props : any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const PannerTop = () => {
  const [AutoPlay , setAutoPlay] = useState(true)
  const sliderRef = React.useRef<Slider>(null);
  const handlePlayPause = (e : any) => {
    if(AutoPlay){
      // @ts-ignore
      sliderRef.current.slickPause()
    }else{
      // @ts-ignore
      sliderRef.current.slickPlay()
      console.log(sliderRef.current)
    }
    setAutoPlay(!AutoPlay)
  }
  const [activeSlide , setActiveSlide] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    className: "center",
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0px",
    speed: 500,
    nextArrow: <SampleNextArrow className="btn-Left" />,
    prevArrow: <SamplePrevArrow className="btn-Right" />,
    beforeChange: (current : any , next : number) =>{setActiveSlide(next)},
    appendDots: (dots : any)=> (
      <div
        style={{
          display: "none",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <Wrapper>
      <Panner >
        <Slider ref ={sliderRef} {...settings}>
          {fakeApi.map((items, index) => {
              return (
                <img 
                  src={items}
                  key={index}
                />
              );
            })}
        </Slider>
        <ButtonPanner>
          <ButtonArr>
            <p className="numberOrder">{activeSlide + 1}</p>
            <p className="pannerLength">/{fakeApi.length}</p>
          </ButtonArr>
          <ButtonPlayPause onClick={(e: any)=>{handlePlayPause(e)}}>
            <img src={AutoPlay ?  Pause : Play}/>
          </ButtonPlayPause>
        </ButtonPanner>
      </Panner>
    </Wrapper>
  );
};
export default PannerTop;
