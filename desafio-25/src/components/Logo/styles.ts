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
    font-size: 2.4rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`;
