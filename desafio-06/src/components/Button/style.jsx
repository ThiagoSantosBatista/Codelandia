import styled from "styled-components"

export const ButtonStyle = styled.button`
   cursor: pointer;
   border-radius: .5rem;
   padding: 1.5rem 2.5rem;
   text-transform: uppercase;
   text-align: center;
   font-size: clamp(1.4rem, 1.11vw, 1.6rem);
   border: ${props => props.type === 'a' ? "none" : "solid .1rem #ffffff"};
   font-family: ${props => props.theme.font.secondary};
   background: ${props => props.type === 'a' ? "#0072D2" : "#131318"};

   @media screen and (max-width: 600px){
      padding: 1rem; 
      width: 100%;
   }
`