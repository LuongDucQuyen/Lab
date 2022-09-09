import styled from "styled-components";
import FlexPkt from "./FlexPkt";

const Row = styled.div<{
  align?: string;
  justify?: string;
  padding?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  gap?: string;
  direc?: boolean;
}>`
  display: flex;
  padding: 0;
  align-items: ${({ align }) => align ?? "center"};
  gap: ${({ gap }) => gap && gap};
  justify-content: ${({ justify }) => justify ?? "flex-start"};
  flex-direction: ${({ direc }) => (direc ? "column" : "row")};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export default Row;
