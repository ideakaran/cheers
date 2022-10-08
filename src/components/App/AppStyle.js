import styled from "styled-components";
import { MEDIA } from "../../utils/constants";

const AppStyle = styled.div`
  box-sizing: border-box;
  font-family: "proxima nova", "Roboto", sans-serif;

  ${MEDIA.desktop} {
    max-width: 1200px;
  }

  .hz-beer-id-page {
    text-align: center;
  }
`;

export default AppStyle;
