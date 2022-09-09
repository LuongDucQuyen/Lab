import { Box, Flex } from "@pkt2022/uikit";
import styled from "styled-components";
import backgroundAbout from "../assets/dashboardFUBI/AboutFUBI.png";

export const MainGroup = styled(Flex)`
    width: 100%;
    margin-top: 33px;
    background-color: rgba(255,255,255,0.02);
    border-radius: 10px;
    border: 2px solid rgba(255,255,255,0.05);
    @media only screen and (max-width: 913px) {
        flex-direction: column;
    }
`
export const MainLeft = styled(Box)`
    width: 50%;
    height: 339px;
    background-image: url("${backgroundAbout}");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    background-position: center;
    @media only screen and (max-width: 913px) {
        width: 100%;
    }
    @media only screen and (max-width: 640px) {
        height: 250px;
    }
    @media only screen and (max-width: 430px) {
        height: 220px;
    }
`
export const MainRight = styled(Flex)`
width: 50%;
height: 100%;
/* min-height: 339px; */
align-items: center;
/* padding-left: 18px;
padding-right: 24px; */
padding: 0 32px;
flex-wrap: wrap;
letter-spacing: 0.01rem;
h1{
    color: #ffffff;
    width: 100%;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    font-family: RALEWAYBOLD;
    margin-bottom: 22px;
}
h2{
    padding: 4px 8px;
    font-size: 12px;
    font-family: RALEWAYMEDIUM;
    color: #3EA2FF;
    font-weight: 500;
    line-height: 19px;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    border-radius: 5px;
    margin-bottom: 11px;
}
p{
    width: 100%;
    font-weight: 400px;
    font-size: 16px;
    line-height: 24px;
    color: #B6B6B6;
    margin-bottom: 22px;
    font-family: RALEWAYREGULAR;
}
@media only screen and (max-width: 913px) {
    width: 100%;
    padding-top: 10px;
}
@media only screen and (max-width: 641px) {
    p{
        font-size: 16px;
    }
    h1{
        font-size: 24px;
    }
    h2{
        font-size: 12px;
    }
}
`
export const MainRightBottom = styled(Flex)`
width: 100%;
align-items: center;
justify-content: flex-end;
cursor: pointer;
border-radius: 10px;
h3{
    color: #3EA2FF;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    margin-right: 5px;
    font-family: RALEWAYMEDIUM;
}
`