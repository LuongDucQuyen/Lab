import { Flex ,Box } from "@pkt2022/uikit";
import styled from "styled-components";
import Img from "../../assets/dashboardFUBI/MissionImg.png";

export const MissonMain = styled(Flex)`
    width: 100%;
    align-items: center;
    background-color: rgba(255,255,255,0.02);
    border-radius: 10px;
    border: 2px solid rgba(255,255,255,0.05);
    @media only screen and (max-width: 913px) {
        flex-direction: column;
    }
`
export const MissonImg = styled(Box)`
    width: 50%;
    height: 339px;
    background-image: url("${Img}");
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