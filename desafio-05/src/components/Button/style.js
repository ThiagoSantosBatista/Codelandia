import styled from "styled-components";

export const ButtonStyle = styled.button`
    display: flex;
    gap: 1.4rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 22.5rem;
    border: 0.2rem solid #658e76;
    background: ${(props) => (props.bg ? props.bg : "transparent")};
    transform: skew(-24deg);
    @media (hover: hover) {
        &:hover,
        &:focus {
            transition: all 0.3s;
            background: ${(props) => (props.bg ? "#658e76" : "#658e76")};
            transform: translateY(-0.2rem) skew(-24deg);
            box-shadow: 0 0.2rem 0.5rem black;
        }
    }
    @media (hover: none) {
        &:hover,
        &:focus {
            transition: all 0.3s;
            background: ${(props) => (props.bg ? props.bg : "transparent")};
            transform: skew(-24deg);
            box-shadow: none;
        }
    }

    p {
        padding: 0.8rem 1rem;
        color: #f9f9f9;
        font-size: 1.6rem;
        font-weight: 500;
        text-transform: uppercase;
        transform: skew(24deg);
    }
    svg {
        transform: skew(24deg);
    }
`;
