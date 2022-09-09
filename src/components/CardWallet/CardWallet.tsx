import React, { useState } from "react";
import styled from "styled-components";
import { FlexPkt, BoxPkt, Row } from "../Layout";
import { ButtonV1, Box, Heading, Text, Flex, IconButton } from "@pkt2022/uikit";
import { ArrCard } from "./config";
import Picture from "../../components/Picture";

const Wrapper = styled(Box)`
  padding: 7px;
  width: calc(4 / 12 * 100%);

  @media only screen and (max-width: 820px) {
    width: calc(6 / 12 * 100%);
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
  }
`;

const WrapperV2 = styled(Box)`
  background-image: url("/assets/admin/CardBanner.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 29px;
  padding-bottom: 15px;
  padding-left: 17px;
  padding-right: 8px;
  min-height: 180px;
  border-radius: 12px;

  img {
    width: 60px;
  }

  .cus-text {
    font-size: 38px;
  }

  @media only screen and (max-width: 960px) {
    .cus-text {
      font-size: 30px;
    }
  }
`;

const CardWallet: React.FC = () => {
  const [isArr] = useState(ArrCard);

  return (
    <FlexPkt flexWrap="wrap">
      {isArr.map((_item) => (
        <Wrapper>
          <WrapperV2 className="boxShadow">
            <BoxPkt key={`card-${_item.id}`}>
              <BoxPkt minHeight="60px" pb="16px">
                <Picture url={`${_item.icon}`} />
              </BoxPkt>
              <Heading fontSize="17px !important">{_item.title}</Heading>
              <Flex alignItems="baseline">
                <Text bold className="cus-text">
                  {_item.pirce}
                </Text>
                {_item.pirce !== "Giám Đốc" && (
                  <Text fontSize="20px" bold>
                    &nbsp;USDT
                  </Text>
                )}
              </Flex>
            </BoxPkt>
          </WrapperV2>
        </Wrapper>
      ))}
    </FlexPkt>
  );
};

export default CardWallet;
