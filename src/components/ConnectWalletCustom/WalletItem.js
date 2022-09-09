import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { InjectedModalProps, Box, Flex, Text } from "@pkt2022/uikit";
import { ArrowConnectIcon } from "../Svg";

export default function WalletItem(props) {
  return (
    <div className={`flex items-center ${props.className}`} onClick={props.onClick}>
      <Flex justifyContent="space-between" alignItems="center" className="wallet-flex">
        <Flex>
          <Box pr="4px">{props.icon}</Box>
          <Text
            color="#fff"
            fontSize="20px"
            fontWeight="700"
            lineHeight="22px"
            letterSpacing="1px"
            as="a"
            className="item-text"
            href=""
            onClick={(e) => e.preventDefault()}
          >
            {props.title}
          </Text>
        </Flex>

        <Box pr='8px'>
          <ArrowConnectIcon width='14px' />
        </Box>
      </Flex>
    </div>
  );
}

WalletItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
