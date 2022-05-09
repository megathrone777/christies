import styled from "styled-components";
import { TOption } from "./types";
import { fonts, rem } from "../../App/styled";

export const Wrapper = styled.div`
  width: 280px;
  height: 40px;
  border: 1px solid #ccc;
  position: relative;

  &::after {
    content: "\\0029";
    position: absolute;
    width: 40px;
    height: 38px;
    pointer-events: none;
    border-left: 1px solid #cccccc;
    background-color: #fff;
    font: ${rem(40)} ${fonts.icon};
    text-align: center;
    color: #000;
    right: 0;
    top: 0;
    line-height: 40px;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  font: ${rem(14)} ${fonts.fontMedium};
  padding-left: 15px;
  border: 0;
  appearance: none;
  cursor: pointer;
`;

export const Option = styled.option<TOption>`
  cursor: pointer;
`;
