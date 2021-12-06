import { createGlobalStyle } from "styled-components";
import Ruthie from "../assets/Ruthie-Regular.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Ruthie';
    src: url(${Ruthie});
    font-style: normal;
  }
  *{
    font-family: 'Ruthie';
    color: var(--gray-1);
  }
`;

export default Typography;
