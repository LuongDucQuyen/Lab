import { Box } from '@pkt2022/uikit';
import React from 'react';
import styled from 'styled-components';
import Arrow from "../../assets/keyboardbackspace.svg";
const DiscoverTitleDetail = styled(Box)`
    display: flex;
    align-items: center;
    p{
        margin-right: 10px;
        color: #333333;
        font-size: 14px;
        font-weight: 400;
        font-family: Gilroy;
        line-height: 20px;
    }
`
const ArrowRight = ()=>{
    return(
        <DiscoverTitleDetail>
            <p>Xem hết</p>
            <img src={Arrow} alt='arrow right'/>
        </DiscoverTitleDetail>
    )
}
export default ArrowRight;