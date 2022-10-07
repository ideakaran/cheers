import styled from "styled-components";

const PaginationStyle = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  gap: 0.3rem;
  color: #2e82ce;
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
