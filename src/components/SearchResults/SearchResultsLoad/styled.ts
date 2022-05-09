import styled, { css } from "styled-components";
import { fonts, rem } from "../../App/styled";

export const Wrapper = styled.div`
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    margin-bottom: 30px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const button = css`
  min-width: 120px;
  display: block;
  height: 50px;
  font: ${rem(16)} ${fonts.fontMain};
  cursor: pointer;
  padding: 0 18px;
  border-width: 2px;
  border-style: solid;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const LoadMore = styled.button<React.HTMLProps<HTMLButtonElement>>`
  ${button};
  border-color: black;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const LoadAll = styled.button<React.HTMLProps<HTMLButtonElement>>`
  ${button};
  border-color: transparent;
  transition: color 0.2s;

  &:hover {
    color: #808080;
  }
`;
