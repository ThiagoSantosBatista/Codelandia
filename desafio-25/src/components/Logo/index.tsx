import React from "react";
import * as S from "./styles";
import { ReactComponent as LogoImg } from "../../assets/home.svg";

interface LogoProps {
  local?: string;
}

const Logo = ({local}: LogoProps) => {
  if (local === "header") {
    return (
      <S.LogoHeader local={local}>
        <LogoImg />
        <p>Homeyou</p>
      </S.LogoHeader>
    );
  }
  return <S.Logo><LogoImg /></S.Logo>;
};

export default Logo;
