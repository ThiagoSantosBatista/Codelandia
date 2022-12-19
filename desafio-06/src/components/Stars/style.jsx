import styled from "styled-components";

export const StarsBox = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    @media screen and (max-width: 1300px) {
        svg {
            width: 3rem;
            height: auto;
        }
    }
    @media screen and (max-width: 1000px) {
        svg {
            width: 2.5rem;
            height: auto;
        }
    }
    @media screen and (max-width: 600px) {
      gap: .5rem;
        svg {
            width: 2rem;
            height: auto;
        }
    }
`;
