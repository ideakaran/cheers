import styled from "styled-components";

const PaginationStyle = styled.button`
  background-color: transparent;
  border: none;
  color: #2e82ce;
  display: flex;
  margin: 1rem auto;
  gap: 0.3rem;
  cursor: pointer;
  padding: 0.2rem;
  font-weight: 700;
  &:hover {
    border-bottom: 0.08rem solid #2e82ce;
  }

  svg {
    align-self: center;
  }
`;

export default PaginationStyle;
