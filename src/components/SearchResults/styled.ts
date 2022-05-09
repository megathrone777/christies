import styled from "styled-components";
import { fonts, rem } from "../App/styled";

export const Wrapper = styled.div``;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font: ${rem(20)} ${fonts.fontMedium};
  margin: ${(props): string =>
    props.theme.isList ? "20px 0 10px" : "20px 0 30px"};
`;

export const TitleCounter = styled.span`
  font-family: ${fonts.fontMain};
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -10px;
  margin-right: -10px;
  ${(props): string =>
    props.theme.isList
      ? `
			flex-direction: column;
		`
      : `
			flex-wrap: wrap;
		`};
`;
