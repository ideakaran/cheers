import styled from "styled-components";
import { media } from "../../utils/util";

const AppStyle = styled.div`
  box-sizing: border-box;
  font-family: "proxima nova", "Roboto", sans-serif;

  ${media.desktop} {
    max-width: 1200px;
  }
`;

export default AppStyle;
