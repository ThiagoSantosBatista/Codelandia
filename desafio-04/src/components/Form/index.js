import React from "react";
import ButtonForm from "../ButtonForm";
import InputCheckboxForm from "../InputCheckboxForm";
import InputForm from "../InputForm";
import { LoginForm, LembrarSenhaDiv, CriarContaP, TituloP } from "./style";

const Form = () => {
    return (
        <LoginForm onSubmit={(e) => e.preventDefault()}>
            <TituloP>Bem vindo de volta</TituloP>
            <h1>Faça login na sua conta</h1>

            <InputForm
                label="E-mail"
                type="email"
                placeholder="Digite seu e-mail"
                id="email"
            />
            <InputForm
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                id="senha"
            />
            <LembrarSenhaDiv>
                <InputCheckboxForm label="Lembre de mim" name="LembrarLogin" />
                <a href="#">Esqueceu sua senha?</a>
            </LembrarSenhaDiv>
            <ButtonForm name="Entrar" />
            <ButtonForm from="google" name="Ou faça login com o Google" />
            <CriarContaP>Não tem uma conta? <a href="#">Cadastre-se</a></CriarContaP>
        </LoginForm>
    );
};

export default Form;
