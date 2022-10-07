import styled from "styled-components";
import { media } from "../../utils/util";

const BeerCardStyle = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  max-height: 100%;

  .hz-card_container {
    /* width: 100%; */
    border-radius: 0.35rem;
    display: flex;
    box-shadow: 2px 2px 6px 2px rgb(0 0 0 / 10%);
    height: 100%;
  }

  ${media.tablet} {
    flex: 50%;
  }

  .hz-card_container:hover {
    cursor: pointer;
    transition: all 0.5s;
    background-color: #f2f8fd;
  }

  .hz-card_img_container {
    padding: 1.2rem 0.5rem;
    width: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
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

  .hz-card_content_container {
    padding: 0.25rem 0.5rem;

    .hz-card_content {
    }

    h3 {
      margin-bottom: 0;
      font-weight: 700;
      font-size: 1.3rem;
    }

    h5 {
      color: #db9d27;
      font-weight: 500;
      margin-bottom: 0;
      margin-top: 0.5rem;
    }

    .hz-card_description {
      p {
        color: #5b5b5b;
        font-size: 0.8rem;
        line-height: 130%;
      }
    }
  }
`;

export default BeerCardStyle;
