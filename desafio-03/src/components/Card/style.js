import styled from "styled-components";

export const CardLi = styled.li`
    width: 100%;
    border-radius: .5rem;
    background: #ffffff;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
`;

export const CardColor = styled.span`
    display: block;
    height: 22.2rem;
    width: 100%;
    background: ${(props) => props.cor};
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
`;

export const CardContent = styled.div`
    padding: 2.4rem 3rem 3rem;

    h2 {
        font-size: 2.4rem;
        font-weight: 700;
        font-family: "Merriweather", serif;
        margin-bottom: 2.6rem;
    }

    p {
        font-size: 1.8rem;
        line-height: 1.5;
        color: #555555;
    }
`;
