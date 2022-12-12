import styled from "styled-components";

export const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    border: none;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 700;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    background-color: ${(props) =>
        props.from === "google" ? "#1A202C" : "#04C35C"};
    color: #ffffff;
    &:hover {
      opacity: 0.75;
    }
    svg {
        margin-right: 1.2rem;
        padding: 0;
        width: 2rem;
        height: auto;
    }
`;
