import styled from "styled-components";

const ScrollToStyle = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1.3rem;
  cursor: pointer;
  border: none;
  background-color: black;
  border-radius: 5px;
  padding: 0.1rem 0.2rem;

  &:hover {
    background-color: #f3a147;
    border-radius: 5px;
  }
`;

export default ScrollToStyle;
