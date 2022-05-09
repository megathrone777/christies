import styled from "styled-components";
import { fonts } from "../../App/styled";
import { rem } from "../../App/styled";

interface TContent {
  opened: boolean;
}

interface TTitle extends TContent, React.HTMLProps<HTMLButtonElement> {
  type: string;
}

export const Wrapper = styled.div`
  margin-bottom: 2px;
`;

export const Title = styled.button<TTitle>`
  display: block;
  width: 100%;
  border: none;
  text-align: left;
  height: 60px;
  color: black;
  background-color: #f8f8f8;
  font: ${rem(14)} ${fonts.fontMedium};
  cursor: pointer;
  padding-left: 20px;
  position: relative;
  user-select: none;
  line-height: ${rem(60)};

  &::after {
    content: ${(props): string => (props.opened ? "'\\0026'" : "'\\0025'")};
    font: 33px ${fonts.icon};
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 5px;
  }

  &:hover {
    color: #808080;
  }

  &:focus {
    outline: none;
  }
`;

export const Content = styled.div<TContent>`
  height: ${(props): string | number => (props.opened ? "410px" : 0)};
  padding: 0 15px;
  overflow-x: hidden;
  overflow-y: auto;
  transition: height 0.2s;

  &::-webkit-scrollbar {
    background-color: white;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    width: 6px;
  }
`;
