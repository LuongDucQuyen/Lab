import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ButtonV1, Box, Heading, Text, Flex, IconButton } from "@pkt2022/uikit";
import { FormInput } from "../../components/Form";
import { FlexPkt, BoxPkt, Row } from "../../components/Layout";
import { Wrapper, Panel, Inner, BoxFooter} from "./styled";
// import LogoPkt from "../../assets/Logo/LogoPktWhite.svg";
// import Picture from "../../components/Picture";
// import { ChevronRightIcon } from "../../components/Svg";
// import { ArrMenu } from "./config";
// import { LogoutIcon } from "../../components/Svg";
import { HomeFUBI } from "./Body";


const UserAdmin = () => {
  const [isShow, setShow] = useState(true);
  // const [isMenu] = useState(ArrMenu);
  const location = useLocation();

  const handleShowMenu = () => {
    setShow((_prev) => !_prev);
  };

  // const HandlePath = () => {
  //   if (location.pathname === "/userAdmin/dashboard") {
  //     return <HomeFUBI />;
  //   }
  // };
  return (
    <Wrapper as="section">
      {/* <Panel _show={isShow}>
        <Row justify="center" padding="45px 0px 34px 0px">
          <Picture url={LogoPkt} />
        </Row>
        <Row className="cus-bor" margin="0 8px" justify="space-between">
          {isShow && (
            <Row gap="8px"> */}
              {/* <Picture url={DemoAd} /> */}
              {/* <Heading color="#fff">Nguyễn văn B</Heading>
            </Row>
          )}

          <IconButton
            variant="tertiary"
            startIcon={<ChevronRightIcon width="27px" />}
            onClick={() => handleShowMenu()}
          />
        </Row>
        <Row direc align="flex-start">
          {isMenu.map((_item) => (
            <BoxPkt key={`menu-${_item.id}`}>
              <FlexPkt pl={isShow ? "22px" : "16px"} py="16px">
                <Box pr="20px">
                  <_item.icon />
                </Box>
                {isShow && (
                  <Heading color="rgba(244,244,244,1)" fontWeight="500 !important">
                    <Link to={_item.href}>{_item.title}</Link>
                  </Heading>
                )}
              </FlexPkt>
            </BoxPkt>
          ))}
        </Row>
        <BoxFooter>
          <Flex className="cus-seft" pl="22px">
            <Box pr="20px">
              <LogoutIcon />
            </Box>
            <Heading fontWeight="500 !important" color="#fff">
              <Link to="/">Logout</Link>
            </Heading>
          </Flex>
        </BoxFooter>
      </Panel> */}
      {/* <Inner _show={isShow}>Right</Inner> */}
    </Wrapper>
  );
};

export default UserAdmin;
