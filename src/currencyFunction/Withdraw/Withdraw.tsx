import React from "react";
import styled from "styled-components";
import { ButtonV1, Box, Heading, Text, Flex, IconButton, useMatchBreakpoints } from "@pkt2022/uikit";
import { FlexPkt, BoxPkt, Row } from "../../components/Layout";

const BoxInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  padding-right: 30px;
`;

const Withdraws = () => {
  const { isMobileL } = useMatchBreakpoints();

  return (
    <BoxPkt maxWidth="500px" px="8px">
      <BoxPkt pb="18px">
        <Text pl="16px" pb="12px" fontSize="16px">
          Từ Ví
        </Text>
        <FlexPkt background="#F2F2F2" height="48px" borderRadius="8px" py="15px" px="21px">
          <Heading pr="10px">USDT</Heading>
          <BoxInput type="text" placeholder="USDT" />
        </FlexPkt>
      </BoxPkt>
      <BoxPkt pb="18px">
        <Text pl="16px" pb="12px" fontSize="16px">
          Số lượng
        </Text>
        <FlexPkt background="#F2F2F2" height="48px" borderRadius="8px" py="15px" px="21px">
          <Heading pr="10px">Value</Heading>
          <BoxInput type="text" placeholder="60998" />
        </FlexPkt>
      </BoxPkt>
      <BoxPkt pb="18px">
        <Text pl="16px" pb="12px" fontSize="16px">
          Địa chỉ rút tiền của bạn
        </Text>
        <FlexPkt background="#F2F2F2" height="48px" borderRadius="8px" py="15px" px="21px">
          <Heading pr="10px">Address</Heading>
          <BoxInput type="text" value="0xa2623824ef8e942a4e6d2beb3321af19d598e255" readOnly />
        </FlexPkt>
      </BoxPkt>
      {!isMobileL ? (
        <Row justify="space-between">
          <Heading>Bạn sẽ nhận được: 182.6863 BNB</Heading>
          <Heading>Phí: $3049.9</Heading>
        </Row>
      ) : (
        <Row justify="space-between" direc>
          <Heading>Bạn sẽ nhận được: 182.6863 BNB</Heading>
          <Heading>Phí: $3049.9</Heading>
        </Row>
      )}

      <FlexPkt justifyContent="center" pt="24px" pb="33px">
        <ButtonV1 variant="success" width="100%">
          RÚT
        </ButtonV1>
      </FlexPkt>
    </BoxPkt>
  );
};

export default Withdraws;
