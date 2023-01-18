import styled from 'styled-components';

export const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 81rem;
  font-size: 2rem;

  .map {
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

    &:focus,
    &:hover {
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

    svg {
      display: none;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1100px) {
    max-width: 80%;
  }
  @media screen and (max-width: 1000px) {
    input {
      font-size: clamp(1.2rem, 0.6rem + 1.6667vw, 2rem);
    }
  }
  @media screen and (max-width: 850px) {
    button {
      padding: 0 2rem;

      p {
        display: none;
      }
      svg {
        display: block;
      }
    }
  }
  @media screen and (max-width: 650px) {
    max-width: 100%;;
    input{
      height: 4rem;
      padding: 0 1.5rem 0 5rem;
    }
    button{
      height: 4rem;
      padding: 0 1.5rem;
    }
    svg {
      height: 2rem;
      width: auto;
    }
    .map {
      left: 1.5rem;
    }
  }
`;
