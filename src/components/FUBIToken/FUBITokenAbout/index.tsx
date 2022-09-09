import { Box, Flex } from "@pkt2022/uikit";
import styled from "styled-components";
import Logo from "../../../assets/dashboardFUBI/FLOGO.svg";
import Arrow from "../../../assets/dashboardFUBI/arrowGreen.svg";

const AboutMain = styled(Flex)`
  width: 100%;
  border: none;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
`;

const ContentContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 484px;
`;

const Title = styled.h1`
  font-family: "RALEWAYMEDIUM";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  padding-bottom: 25px;

  background: linear-gradient(
    176.16deg,
    #ffffff 27.89%,
    rgba(255, 255, 255, 0) 97.65%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const AboutContent = styled.p`
  font-family: "RALEWAYMEDIUM";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #b6b6b6;
`;

const AboutFuBi = () => {
  return (
    <>
      <AboutMain>
        <ContentContainer>
          <Title>FuBi Token</Title>
          <AboutContent>
            The native currency of the Future Big Finance economy is the token
            FUBI. All transactions on FuBi Finance will be done through FUBI in
            the future.<br></br> Plus, a portion of all FuBi Platform Fees will go into
            the Reward Pool, which will be managed by a smart contract
            independent of FuBi’s control.<br></br> And since the Reward Pool is already
            fully independent, it represents the first and most critical step in
            allowing Future Big Finance to evolve into a fully operational DAO
            in the near future.
          </AboutContent>
        </ContentContainer>
      </AboutMain>
    </>
  );
};

export default AboutFuBi;
