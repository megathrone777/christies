import React, { useEffect, useState } from "react";
import { Wrapper, Select, Option } from "./styled";
import { TOption } from "./types";

const SearchResultsSort: React.FC = (): JSX.Element => {
  const [sortOptions, setSortOptions] = useState<TOption[]>([]);

  useEffect((): void => {
    fetch(`/src/data/SearchResultsSort.json`)
      .then((res): Promise<TOption[]> => res.json())
      .then((data): void => setSortOptions(data))
      .catch((err): void => console.log(err));
  });

  return (
    <Wrapper>
      <Select>
        {sortOptions.map(
          ({ id, value }): JSX.Element => (
            <Option value={`${id}`} key={`${id}-${value}`}>
              {value}
            </Option>
          )
        )}
      </Select>
    </Wrapper>
  );
};

export default SearchResultsSort;
