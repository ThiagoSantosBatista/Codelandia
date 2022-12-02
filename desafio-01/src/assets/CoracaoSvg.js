import styled from "styled-components";
import React from "react";

const Svg = styled.svg`
  fill: none;
  stroke: #574ae8;
  stroke-width: 2;
  &.ativo {
    fill: #574ae8;
  }
`;

const CoracaoSvg = (props) => {
  const [ativo, setAtivo] = React.useState(props.defaultValue);
  const toggle = ativo ? 'none' : 'ativo';

  return (
    <Svg className={toggle}
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 32 32" 
      onClick={() => {setAtivo(!ativo)}}
    >
      <path d="M15.53 7.122c-2.979-4.166-9.174-4.162-12.146.009a7.462 7.462 0 0 0 .609 9.409l11.275 12.14a1 1 0 0 0 1.464.001L28 16.583a7.48 7.48 0 0 0 .584-9.485c-3.01-4.155-9.216-4.114-12.171.081l-.417.593l-.465-.65Z" />
    </Svg>
  );
};

export default CoracaoSvg;
