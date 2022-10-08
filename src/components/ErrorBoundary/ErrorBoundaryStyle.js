import styled from "styled-components";

const ErrorBoundaryStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  .hz-error-label {
    font-size: x-large;
    color: red;
  }

  .hz-error-message {
    font-size: large;
  }

  .hz-retry-btn {
    width: 10rem;
    font-size: large;
  }

  p::first-letter {
    text-transform: capitalize;
    white-space: pre-wrap;
  }
`;

export default ErrorBoundaryStyle;
