import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 4.1rem 16.5rem 7.5rem;

    @media screen and (max-width: 1440px) {
        padding: 4.1rem 11.46vw 7.5rem;
    }
    @media screen and (max-width: 700px) {
        padding: 4.1rem 11.46vw 2.5rem;
    }
    @media screen and (max-width: 360px) {
        justify-content: center;
    }
`;

export const SocialUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    li {
        height: 2.4rem;
        cursor: pointer;

        @media (hover: hover) {
            &:hover path {
                transition: all 0.3s;
                stroke: #fe4a23;
            }
        }
        @media (hover: none) {
         &:hover path {
             transition: all 0.3s;
             stroke: #f9f9f9;
         }
     }
    }
`;
