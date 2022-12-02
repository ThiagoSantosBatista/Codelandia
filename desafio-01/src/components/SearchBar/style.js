import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.2);

  input {
    font-size: 1.8rem;
    font-family: "Inter", sans-serif;
    width: 100%;
    height: 5rem;
    border: none;
    color: #ffffff;
    background: none;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    gap: 1.5rem;
    padding: 0 1.5rem;
    input {
      height: 4rem;
      font-size: 1.4em;
    }
    svg {
      width: 1.5rem;
    }
  }
`;
