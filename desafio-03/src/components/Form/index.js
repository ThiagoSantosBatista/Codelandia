import React from "react";
import FormInput from "../FormInput";
import Button from "../Button";
import { FormStyle } from "./style.js";
import FormTextArea from "../FormTextArea";

const inputArray = [
    {
        type: "text",
        placeholder: "Nome",
    },
    {
        type: "email",
        placeholder: "E-mail",
    },
    {
        type: "tel",
        placeholder: "Telefone",
    },
];

const Form = () => {
    return (
        <FormStyle>
            {inputArray.map(({ type, placeholder }) => <FormInput type={type} placeholder={placeholder} />)}
            <FormTextArea />
            <Button px="1rem" mgTop="1rem" text="Enviar Mensagem" />
        </FormStyle>
    );
};

export default Form;
