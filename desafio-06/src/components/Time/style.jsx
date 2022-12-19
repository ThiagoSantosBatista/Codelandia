import styled from "styled-components";

export const TimeBox = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
   
    @media screen and (max-width: 1000px) {
        svg {
            width: 2rem;
            height: auto;
        }
    }
`;
