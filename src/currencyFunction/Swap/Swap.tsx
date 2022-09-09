import React from "react";
import styled from "styled-components";
import { ButtonV1, Box, Heading, Text, Flex, IconButton } from "@pkt2022/uikit";
import { FlexPkt, BoxPkt, Row } from "../../components/Layout";

const BoxInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  padding-right: 30px;
  font-weight: bold;
`;

const BoxHeading = styled(Heading)`
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 95%;
    background-color: #828282;
  }
`;

const Swaps = () => {
  return (
    <BoxPkt maxWidth="500px" px="8px">
      <BoxPkt pb="18px">
        <FlexPkt justifyContent="space-between">
          <Text pl="16px" pb="12px" fontSize="16px">
            Bán
          </Text>
          <Text pl="16px" pb="12px" fontSize="16px">
            Có sẵn:
            <Heading scale="sm" display="inline-block" bold>
              51.8686
            </Heading>{" "}
            USDT
          </Text>
        </FlexPkt>
        <FlexPkt background="#F2F2F2" height="48px" borderRadius="8px" py="15px" px="21px">
          <BoxInput type="text" placeholder="20" />
          <BoxHeading px="10px">MAX</BoxHeading>
          <Row gap="8px" padding="0 0 0 10px">
            <Box>
              {/* <UsdtIcon width="24px" /> */}
            </Box>
            <Heading>USDT</Heading>
          </Row>
        </FlexPkt>
      </BoxPkt>
      <BoxPkt pb="18px">
        <Text pl="16px" pb="12px" fontSize="16px">
          Mua
        </Text>
        <FlexPkt background="#F2F2F2" height="48px" borderRadius="8px" py="15px" px="21px">
          <BoxInput type="text" placeholder="19.9795" />
          <Box width="1px" height="30px" background="#828282" />
          <Row gap="8px" padding="0 0 0 10px">
            <Box>
              {/* <UsdtIcon width="24px" /> */}
            </Box>
            <Heading>USDT</Heading>
          </Row>
        </FlexPkt>
      </BoxPkt>
      <BoxPkt maxWidth="483px" minHeight="130px" background="#F2F2F2" borderRadius="10px" py="18px" px="21px">
        <Row justify="space-between" padding="0 0 12px 0">
          <Heading scale="sm">Giá bán</Heading>
          <Heading scale="sm">1 BUSD = 1 USDT</Heading>
        </Row>
        <Row justify="space-between" padding="0 0 12px 0">
          <Heading scale="sm">Phí</Heading>
          <Heading scale="sm">0.02 USDT</Heading>
        </Row>
        <Row justify="space-between" padding="0 0 12px 0">
          <Heading scale="sm">Trượt</Heading>
          <Heading scale="sm">0%</Heading>
        </Row>
      </BoxPkt>
      <FlexPkt justifyContent="center" py="36px">
        <ButtonV1 variant="success" width="100%">
          HOÁN ĐỔI
        </ButtonV1>
      </FlexPkt>
    </BoxPkt>
  );
};

export default Swaps;
