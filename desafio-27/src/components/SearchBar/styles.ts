import styled from 'styled-components';

export const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 81rem;
  font-size: 2rem;

  svg {
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
  }

  input {
    width: 100%;
    height: 6rem;
    padding: 0 2rem 0 7rem;
    border: none;
    border: 0.1rem solid #292929;
    background-color: #fbfbfb;
    border-radius: 1rem 0 0 1rem;
    font-size: 2rem;

    &:focus, &:hover {
      border-color: #da2535;
      outline-color: #da2535;
    }
    &::placeholder {
      color: #292929;
    }
  }

  button {
    height: 6rem;
    padding: 0 5rem;
    color: #fbfbfb;
    background: #da2535;
    border: 1px solid #da2535;
    border-radius: 0 1rem 1rem 0;
    cursor: pointer;
  }
`;
