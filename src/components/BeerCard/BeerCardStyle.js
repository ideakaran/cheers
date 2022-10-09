import styled from "styled-components";
import { MEDIA } from "../../utils/constants";

const BeerCardStyle = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  max-height: 100%;

  .hz-card_container {
    /* width: 100%; */
    border-radius: ${(props) => props.theme.radii.base};
    display: flex;
    box-shadow: 2px 2px 6px 2px rgb(0 0 0 / 10%);
    height: 100%;
  }

  ${MEDIA.tablet} {
    flex: 50%;
  }

  .hz-card_container:hover {
    cursor: pointer;
    transition: all 0.5s;
    background-color: ${(props) => props.theme.colors.accent};
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

  .hz-card_img_loading {
    width: 6rem;
    height: 100%;
  }

  img {
    max-height: 8rem;
  }

  .hz-card_content_container {
    flex: 1;
    padding: 0.25rem 0.5rem;

    h5.hz-card_loading,
    h3.hz-card_loading,
    div.hz-card_loading {
      width: 100%;
      height: 1.5rem;
    }
    .hz-card_content {
    }

    h3 {
      margin-bottom: 0;
      font-weight: ${(props) => props.theme.fontWeights.bold};
      font-size: ${(props) => props.theme.fontSizes.m};
    }

    .hz-card_tagline {
      color: ${(props) => props.theme.colors.primary};
      font-weight: ${(props) => props.theme.fontWeights.normal};
      margin-bottom: 0;
      font-size: 0.83rem;
      margin-top: 0.5rem;
    }

    .hz-card_description {
      p {
        color: ${(props) => props.theme.colors.text};
        font-size: ${(props) => props.theme.fontSizes.s};
        line-height: ${(props) => props.theme.lineheights.body};
      }
    }
  }

  .hz-card_loading {
    background: ${(props) => props.theme.colors.muted};
    background-image: linear-gradient(
      90deg,
      #f7eded33,
      #dbe5db 50%,
      #d0beca 50%,
      #e7d6c7 50%,
      #f7d6c7 50%,
      #c0c0a9 100%
    );
    border-radius: 1rem;
    background-size: 400% 400%;
    animation: loadings 1.5s ease infinite;
  }

  @keyframes loadings {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
`;

export default BeerCardStyle;
