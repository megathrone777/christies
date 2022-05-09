import React from "react";
import {
  Wrapper,
  ImageHolder,
  Image,
  Details,
  LinkWrapper,
  Title,
  TitleText,
  Description,
  DescriptionText,
  Price,
  PriceText
} from "./styled";
import { TItem } from "./types";

const SearchResultsItem: React.FC<TItem> = ({
  image,
  title,
  url,
  description,
  price
}): JSX.Element => (
  <Wrapper>
    <ImageHolder>
      <LinkWrapper href={url} className="">
        <Image src={image} alt={title} />
      </LinkWrapper>
    </ImageHolder>

    <Details>
      <Title>
        <TitleText>{title}</TitleText>
      </Title>

      <Description>
        <DescriptionText>{description}</DescriptionText>
      </Description>
    </Details>

    <Price>
      <PriceText>{price}</PriceText>
    </Price>
  </Wrapper>
);

export default SearchResultsItem;
