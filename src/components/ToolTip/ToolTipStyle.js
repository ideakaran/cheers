import styled from "styled-components";

const ToolTipStyle = styled.div`
  position: relative;
  display: inline-block;

  .hz-card_img_tooltip {
    position: absolute;
    border-radius: 0.15rem;
    left: 50%;
    height: 1.8rem;
    width: max-content;
    max-width: 7rem;
    transform: translateX(-50%);
    padding: 6px;
    color: white;
    background: black;
    font-size: 12px;
    font-weight: ${(props) => props.theme.fontWeights.semilight};
    font-family: ${(props) => props.theme.fonts.tooltip};
    z-index: 100;
    text-align: center;
    word-break: break-word;
  }

  .hz-card_img_tooltip.top {
    top: calc(50px * -1);
  }

  .hz-card_img_tooltip::before {
    content: " ";
    position: absolute;
    border: solid transparent;
    width: 0;
    height: 0;
    left: 50%;
    position: absolute;
    pointer-events: none;
    border-width: 6.5px;
    margin-left: calc(6px * -1);
  }

  .hz-card_img_tooltip.top::before {
    top: 100%;
    border-top-color: #000;
  }
`;

export default ToolTipStyle;
