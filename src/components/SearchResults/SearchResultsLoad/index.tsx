import React from "react";
import { Wrapper, LoadMore, LoadAll } from "./styled";

interface TLoad {
  more: () => void;
  all: () => void;
}

const SearchResultsLoad: React.FC<TLoad> = ({ more, all }): JSX.Element => (
  <Wrapper>
    <LoadMore onClick={more}>Load more</LoadMore>
    <LoadAll onClick={all}>Load all</LoadAll>
  </Wrapper>
);

export default SearchResultsLoad;
