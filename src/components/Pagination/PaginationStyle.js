import styled from "styled-components";

const PaginationStyle = styled.button`
  background-color: transparent;
  border: none;
  color: #2169aa;
  display: flex;
  margin: 1rem auto;
  gap: 0.3rem;
  cursor: pointer;
  padding: 0.2rem;
  font-weight: 700;
  &:hover {
    border-bottom: 0.08rem solid #2169aa;
  }

  .loadMore {
    border: none;
    width: 32px;
    height: 32px;
    background-color: #eee;
    cursor: pointer;
  }
  .loadMore:hover {
    border: 1px solid #888;
    background-color: #ddd;
  }

  svg {
    align-self: center;
  }
`;

export default PaginationStyle;
