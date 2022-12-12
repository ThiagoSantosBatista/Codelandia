import styled from "styled-components";

export const MainStyle = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    min-height: 100vh;
    max-width: 144rem;
    margin: 0 auto;
    background: #f7fafc;
    svg {
        max-width: 100%;
        height: 33rem;
        width: auto;
        padding: 0 5%;
    }
`;
