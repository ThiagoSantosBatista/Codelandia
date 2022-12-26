import styled from "styled-components";

export const SearchBar = styled.div`
  max-width: 64.4rem;
  width: 100%;
  position: relative;
  input {
    font-size: 1.4rem;
    height: 4rem;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    padding: 0 5.4rem 0 2rem;
    background: ${(props) => props.theme.color.gray};
    &:hover,
    &:focus {
      outline: 0.1rem solid ${(props) => props.theme.color.black400};
    }
    &::placeholder {
      color: ${(props) => props.theme.color.black400};
    }
  }
  svg {
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;