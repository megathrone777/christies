import styled from "styled-components";
import { rem } from "../../App/styled";

export const Wrapper = styled.li`
  margin-bottom: 15px;

  &:first-of-type {
    margin-top: 15px;
  }
`;

export const Label = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  vertical-align: sub;
  padding-left: 30px;
  padding-right: 15px;
  user-select: none;
  line-height: ${rem(25)};

  &::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    outline: 1px solid #ccc;
    border: 2px solid white;
    background-color: white;
    top: 6px;
    left: 0;
  }
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 0;
  height: 0;

  &:checked + ${Label} {
    &::before {
      background-color: red;
    }
  }
`;
