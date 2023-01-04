import styled from "styled-components";

interface LogoProps {
  local?: string;
}

export const Logo = styled.div<LogoProps>`
  svg {
    background: #272727;
  }
`;

export const LogoHeader = styled(Logo)`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  p {
    font-size: clamp(1.6rem, 1.25vw + 1rem, 2.4rem);
    font-weight: 600;
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    svg{
      width: 3.2rem;
      height: auto;
    }
  }
  @media screen and (max-width: 600px) {
    gap: 0.8rem;
    svg{
      width: 2.4rem;
      height: auto;
    }
  }
`;
