import styled from "styled-components";

const PaginationStyle = styled.button`
  background-color: transparent;
  border: none;
  color: #2e82ce;
  display: flex;
  margin: auto;
  gap: 0.3rem;
  cursor: pointer;
  font-weight: 500;
  padding: 0;
  &:hover {
    border-bottom: 0.08rem solid #2e82ce;
  }

  svg {
    align-self: center;
  }
`;

export default PaginationStyle;
