import styled from "styled-components";

const BeerPageStyle = styled.div`
  margin: 0 auto;

  .skip-to-main-content-link {
    position: absolute;
    left: -9999px;
    z-index: 999;
    padding: 1em;
    background-color: white;
    color: black;
    opacity: 0;
  }
  .skip-to-main-content-link:focus {
    left: 50%;
    color: white;
    background-color: ${(props) => props.theme.colors.text};
    transform: translateX(-50%);
    opacity: ${(props) => props.theme.opacity.full};
  }
`;

export default BeerPageStyle;
