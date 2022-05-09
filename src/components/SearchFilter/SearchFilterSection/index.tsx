import React from "react";
import { Wrapper, Title, Content } from "./styled";
import SearchFilterItem from "../SearchFilterItem";
import { TSearchFilterItem } from "../SearchFilterItem/types";

interface TSearchFilterSection {
  category: string;
  filters: TSearchFilterItem[];
  onToggle: () => void;
  isOpened: boolean;
}

const SearchFilterSection: React.FC<TSearchFilterSection> = ({
  category,
  filters,
  isOpened,
  onToggle
}): JSX.Element => {
  return (
    <Wrapper>
      <Title type="button" onClick={onToggle} opened={isOpened}>
        {category}
      </Title>

      <Content opened={isOpened}>
        <ul>
          {filters.map(
            ({ id, label, amount }): JSX.Element => (
              <SearchFilterItem
                id={id}
                label={label}
                amount={amount}
                key={id}
              />
            )
          )}
        </ul>
      </Content>
    </Wrapper>
  );
};

export default SearchFilterSection;
