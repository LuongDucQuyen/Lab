import { Flex } from "@pkt2022/uikit";
import styled from "styled-components";

export const FlexPkt = styled(Flex)<{ gap?: string }>`
  gap: ${({ gap }) => gap};
  width: 100%;
  height: 100%;
`;

export default FlexPkt;
