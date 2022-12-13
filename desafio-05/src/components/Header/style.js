import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4.1rem 16.5rem 7.5rem;

    @media screen and (max-width: 1440px) {
        padding: 4.1rem 11.46vw 7.5rem;
    }
`;

export const SocialUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    li{
      cursor: pointer;
      &:hover path{
         transition: all .3s;
         stroke: #FE4A23;
      }
    }
`;
