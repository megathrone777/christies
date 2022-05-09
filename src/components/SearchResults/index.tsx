import React, { useState, useEffect } from "react";
import * as styledComponents from "styled-components";
import { Wrapper, List, Title, TitleCounter, Toolbar } from "./styled";
import SearchResultsSwitcher from "./SearchResultsSwitcher";
import SearchResultsItem from "./SearchResultsItem";
import SearchResultsSort from "./SearchResultsSort";
import SearchResultsLoad from "./SearchResultsLoad";
import { TItem } from "./SearchResultsItem/types";

interface TTheme {
  isList: boolean;
}

const {
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<TTheme>;

const SearchResults: React.FC = (): JSX.Element => {
  const [isList, switchList] = useState<boolean>(false);
  const [searchResults, setResults] = useState<TItem[]>([]);
  const [visible, setVisible] = useState<number>(6);

  const loadMore = (): void => {
    setVisible(visible + 6);
  };

  const loadAll = (): void => {
    setVisible(searchResults.length);
  };

  useEffect((): void => {
    fetch(`/src/data/SearchResults.json`)
      .then((res): Promise<TItem[]> => res.json())
      .then((data): void => setResults(data))
      .catch((err): void => console.error(err));
  }, []);

  return (
    <Wrapper>
      <ThemeProvider theme={{ isList }}>
        <>
          <Toolbar>
            <SearchResultsSwitcher onToggle={(): void => switchList(!isList)} />
            <SearchResultsSort />
          </Toolbar>

          <Title>
            Sold Lots <TitleCounter>({searchResults.length})</TitleCounter>
          </Title>

          <List>
            {searchResults.slice(0, visible).map(
              (
                { image, title, description, price, url }: TItem,
                index: number
              ): JSX.Element => (
                <SearchResultsItem
                  key={index}
                  image={image}
                  title={title}
                  description={description}
                  price={price}
                  url={url}
                />
              )
            )}
          </List>

          <SearchResultsLoad more={loadMore} all={loadAll} />
        </>
      </ThemeProvider>
    </Wrapper>
  );
};

export default SearchResults;
