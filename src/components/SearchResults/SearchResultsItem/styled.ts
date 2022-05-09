import styled from "styled-components";
import { TImage } from "./types";
import Link from "../../Link";
import { TLink } from "../../Link/types";
import { fonts, rem } from "../../App/styled";

export const Wrapper = styled.div`
  animation: fadeIn 0.2s ease-in;
  ${(props): string =>
    props.theme.isList
      ? `
			flex: auto;
			padding-bottom: 20px;
			border-bottom: 1px solid #e5e5e5;
			display: flex;
			margin: 20px 10px 20px;
			max-width: 100%;
		`
      : `
			flex: 0 1 275px;
			margin: 0 10px 20px;
			max-width: 275px;
		`};
`;

export const ImageHolder = styled.div`
  ${(props): string =>
    props.theme.isList
      ? `
			height: 140px;
			width: 140px;
			min-width: 140px;
			flex: 0 1 140px;
		`
      : `
			height: 280px;
		`};
`;

export const Details = styled.div`
  ${(props): string =>
    props.theme.isList &&
    `
			padding: 0 20px;
			flex: 0 1 100%;
		`};
`;

export const LinkWrapper = styled(Link)<TLink>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: ${(props): string =>
    props.theme.isList ? "center" : "flex-end"};
`;

export const Image = styled.img<TImage>`
  max-width: 100%;
  max-height: 100%;
  width: ${(props): string => props.theme.isList && "100%"};
`;

export const Title = styled.div`
  margin-top: 20px;
  font-family: ${fonts.fontMedium};
  line-height: ${rem(25)};
`;

export const TitleText = styled.p``;

export const Description = styled.div`
  font-style: italic;
  margin-top: ${(props): string => (props.theme.isList ? "15px" : "10px")};
`;

export const DescriptionText = styled.p``;

export const Price = styled.div`
  margin: 20px 0;
  ${(props): string =>
    props.theme.isList &&
    `
			flex: 0 1 180px;
			min-width: 180px;
			line-height: ${rem(20)};
		`};
`;

export const PriceText = styled.p``;
