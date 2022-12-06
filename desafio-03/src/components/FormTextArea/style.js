import styled from "styled-components";

export const Textarea = styled.textarea`
    font-size: 1.8rem;
    resize: none;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    padding: 2rem 1.5rem;
    background: #ffffff;

    &::placeholder {
        color: rgba(110, 114, 117, 0.74);
    }
`;
