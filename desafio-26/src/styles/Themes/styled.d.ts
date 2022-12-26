import "styled-components"

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      black600: string;
      black400: string;
      white: string;
      gray: string;
      blue: string;
    },
    font: {
      h1: string;
      h2: string;
      h3: string;
      p1: string;
      p2: string;
      p3: string;
      p4: string;
      btn: string;
    },
  }
}