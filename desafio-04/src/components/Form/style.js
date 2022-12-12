import styled from "styled-components";

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 5rem 2rem;
    max-width: 34.7rem;
    background: #ffffff;

    h1 {
        font-size: 2.6rem;
        font-weight: 700;
        font-family: "Merriweather", serif;
        margin-bottom: 3.9rem;
    }
`;

export const LembrarSenhaDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 2.8rem;
    a {
        font-size: 1.4rem;
    }
`;

export const TituloP = styled.p`
    font-size: 1.6rem;
    font-family: "Merriweather", serif;
    margin-bottom: 0.8rem;
`;

export const CriarContaP = styled.p`
    font-size: 1.6rem;
    font-family: "Lato", sans-serif;
    text-align: center;
    margin-top: 5.6rem;
    a {
        font-size: 1.6rem;
    }
`;
