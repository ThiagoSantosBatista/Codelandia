import styled from "styled-components";

export const CardLi = styled.li`
    display: grid;
    place-items: center;
    cursor: pointer;
    height: 30rem;
    background: #ebe9ea;

    img {
        width: 25rem;
        height: 15rem;
    }

    @media (hover: hover) {
        &:hover img {
            transform: scale(1.3);
            transition: 0.5s all ease;
        }
    }
    @media (hover: none) {
        &:hover img {
            transform: initial;
            transition: 0.5s all ease;
        }
    }
`;
