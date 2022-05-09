import styled from "styled-components";
import { fonts, rem } from "../../App/styled";

export const Button = styled.button<React.HTMLProps<HTMLButtonElement>>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #ccc;
  font: ${rem(38)} ${fonts.icon};
  text-align: center;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.2s, color 0.2s;
  line-height: 38px;

  &::before {
    content: ${(props): string =>
    props.theme.isList ? "'\\0040'" : "'\\0041'"};
  }

  &:hover {
    background-color: black;
    color: white;
    border-color: black;
  }

  &:focus {
    outline: none;
  }
`;
