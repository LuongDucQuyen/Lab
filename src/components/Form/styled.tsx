import styled from "styled-components";
import { BoxPkt, FlexPkt } from "../Layout";

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  background: #f2f2f2;
  border-radius: 10px;
  border: none;
  outline: none;
  padding-left: 21px;
  padding-right: 60px;
  ::-webkit-input-placeholder {
    /* Edge */
    padding-left: 10px;
    color: #bdbdbd;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    padding-left: 10px;
    color: #bdbdbd;
  }

  ::placeholder {
    padding-left: 10px;
    color: #bdbdbd;
  }
`;
