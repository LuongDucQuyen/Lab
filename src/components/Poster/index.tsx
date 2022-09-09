import { Box } from '@pkt2022/uikit';
import React from 'react';
import styled from 'styled-components';
const PosterContainer = styled(Box)`
    background-image: url("../assets/poster.jpg");
    width: calc(100% - 72px);
    max-width: 1440px;
    height: 147px;
    margin: 25px auto;
    background-size: 100%;
    background-repeat: no-repeat;
    @media screen and (max-width:1280px){
        height: 135px;
    }
    @media screen and (max-width:1024px){
        height: 110px;
    }
    @media screen and (max-width:821px){
        height: 90px;
        width: calc(100% - 36px);
    }
    @media screen and (max-width:768px){
        height: 80px;
    }
    @media screen and (max-width:640px){
        height: 70px;
    }
    @media screen and (max-width:570px){
        height: 65px;
    }
    @media screen and (max-width:425px){
        height: 45px;
    }
`
const Poster = ()=>{
    return (
        <PosterContainer/>
    )
}
export default Poster;