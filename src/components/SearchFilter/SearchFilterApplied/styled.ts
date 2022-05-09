import styled, { css } from "styled-components";
import { fonts, rem } from "../../App/styled";

interface TButton extends React.HTMLProps<HTMLButtonElement> {
  type: string;
}

interface TWrapper {
  isVisible: boolean;
}

export const Wrapper = styled.div<TWrapper>`
  display: ${(props): string | null => (!props.isVisible ? "none" : null)};
  margin-bottom: 40px;
`;

export const Title = styled.div`
  height: 60px;
  background-color: #f8f8f8;
  padding-left: 20px;
  font: ${rem(14)} ${fonts.fontMedium};
  line-height: ${rem(60)};
`;

export const TitleText = styled.span``;

export const ListLayout = styled.div`
  max-height: 410px;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: white;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    width: 6px;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  margin-bottom: 30px;

  &:first-of-type {
    margin-top: 20px;
  }
`;

export const ListLink = styled.span`
  display: inline-block;
  padding-left: 45px;
  padding-right: 15px;
  text-decoration: none;
  position: relative;
  color: black;
  cursor: pointer;
  line-height: ${rem(18)};

  &:hover {
    color: #808080;
  }

  &::before {
    content: "\\0027";
    font: ${rem(30)} ${fonts.icon};
    position: absolute;
    left: 15px;
    top: -6px;
  }
`;

export const ButtonsLayout = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
`;

const button = css`
  height: 65px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  font: 14px ${fonts.fontMain};
  white-space: nowrap;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #808080;
  }
`;

export const ButtonClear = styled.button<TButton>`
  ${button};
  flex: 0 1 107px;
  min-width: 107px;
  padding: 0 25px;
  border-right: 1px solid #ccc;
`;

export const ButtonSave = styled.button<TButton>`
  ${button};
  flex: 0 1 100%;
`;
