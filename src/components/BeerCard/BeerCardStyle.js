import styled from "styled-components";
import { media } from "../../utils/util";

const BeerCardStyle = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  .hz-card_container {
    width: 100%;
    display: flex;
    box-shadow: 2px 2px 6px 2px rgb(0 0 0 / 10%);
  }
  ${media.tablet} {
    flex: 50%;
  }

  .hz-card_container:hover {
    cursor: pointer;
    transition: all 0.5s;
    background-color: #f2f8fd;
  }

  .hz-card_img {
    width: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-height: 8rem;
  }

  .hz-card_content {
    flex: 1;
    line-height: 150%;

    h5 {
      color: #db9d27;
      font-weight: 500;
    }

    .hz-card_description {
      color: #5b5b5b;
      font-size: 0.8rem;
      line-height: 130%;
    }
  }
`;

export default BeerCardStyle;
