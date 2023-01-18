import styled from 'styled-components';

export const Button = styled.button`
  padding: 1.5rem 9.3rem;
  border: none;
  border-radius: 1rem;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;

  @media screen and (max-width: 1000px) {
    font-size: clamp(1.6rem, 1.375rem + 0.625vw, 2rem);
  }
  @media screen and (max-width: 550px) {
    font-size: clamp(1.6rem, 1.375rem + 0.625vw, 2rem);
    width: 100%;
  }
`;

export const Header__Button = styled(Button)`
  padding: 1rem 5.8rem;
  border: 0.2rem solid #292929;

  @media screen and (max-width: 550px) {
    width: auto;
  }
`;
