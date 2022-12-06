import styled from "styled-components";

export const ButtonStyle = styled.button`
    font-size: 2rem;
    font-weight: 700;
    padding: 1.3rem ${(props) => props.px || "5rem"};
    margin-top: ${(props) => props.mgTop || "0"};
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    color: #ffffff;
    background: #6c63ff;
    box-shadow: 0 0.5rem 0.5rem rgba(23, 23, 23, 0.1);
    transition: all 0.3s;

    @media (hover: hover) {
        &:hover {
            background: #9891ff;
        }
    }

    @media (hover: none) {
        &:hover {
            background: #6c63ff;
        }
    }
`;

export default ButtonStyle;
