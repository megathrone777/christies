import styled, { css } from "styled-components";
import { fonts, rem } from "../App/styled";

interface TInput {
  type: string;
  placeholder: string;
}

interface TButton extends React.HTMLProps<HTMLButtonElement> {
  type: string;
}

export const Wrapper = styled.div`
  text-align: right;
`;

export const Button = styled.button<TButton>`
  font: 40px ${fonts.icon};
  width: 40px;
  height: 40px;
  padding: 0;
  appearance: none;
  border: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: transparent;
  color: #ccc;
  line-height: ${rem(40)};

  &::before {
    content: "\\0034";
  }

  &:focus {
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  height: 50px;
  margin-top: 35px;
  position: relative;

  &:hover ${Button} {
    color: #808080;
  }
`;

const placeholder = css`
  transition: color 0.2s;
  color: #808080;
  text-transform: capitalize;
`;

export const Input = styled.input<TInput>`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 55px;
  text-align: left;
  color: #808080;
  font-size: ${rem(18)};
  font-family: ${fonts.fontMedium};
  border: 1px solid #ccc;
  transition: border-color 0.2s, color 0.2s;

  ::placeholder {
    ${placeholder};
  }

  &:hover {
    border-color: #808080;
  }

  &:focus {
    color: black;
    border-color: black;
    outline: none;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: black;
    }

    :-ms-input-placeholder {
      color: black;
    }
  }
`;

export const PlaceholderSwitcher = styled.span`
  display: inline-block;
  cursor: pointer;
  text-decoration: underline;
  text-transform: capitalize;
  color: black;
  margin-top: 18px;
  user-select: none;

  &:hover {
    color: #808080;
  }
`;
