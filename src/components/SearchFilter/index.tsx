import React, { useState, useEffect, createContext, ReactElement } from "react";
import { Wrapper, Title, Layout } from "./styled";
import SearchFilterSection from "./SearchFilterSection";
import SearchFilterApplied from "./SearchFilterApplied";
import { TSearchFilterItem } from "./SearchFilterItem/types";

interface TFilters {
  appliedFilters: TSearchFilterItem[];
  applyFilter: (filter: TSearchFilterItem) => void;
  removeFilter: (id: string) => void;
  clearFilters: () => void;
  resetCheckbox: (id: string) => void;
  currentCheckbox: string;
}

interface TList {
  category: string;
  filters: TSearchFilterItem[];
}

export const AppliedFilters = createContext<TFilters>({
  appliedFilters: [],
  applyFilter: (): void => {},
  removeFilter: (): void => {},
  clearFilters: (): void => {},
  resetCheckbox: (): void => {},
  currentCheckbox: ""
});

const SearchFilter: React.FC = (): ReactElement => {
  const [filtersList, setFiltersList] = useState<TList[]>([]);
  const [activeAccordion, setActiveAccordion] = useState<string>();
  const [appliedFilters, handleAppliedFilters] = useState<TSearchFilterItem[]>(
    []
  );
  const [currentCheckbox, setCurrentCheckbox] = useState<string>("");

  const applyFilter = (filter: TSearchFilterItem): void => {
    handleAppliedFilters([...appliedFilters, filter]);
  };

  const removeFilter = (newId: string): void => {
    const filteredFilters = appliedFilters.filter(
      ({ id }): boolean => id !== newId
    );
    handleAppliedFilters(filteredFilters);
  };

  const clearFilters = (): void => {
    handleAppliedFilters([]);
  };

  const resetCheckbox = (id: string): void => {
    setCurrentCheckbox(id);
  };

  const handleToggle = (category: string): void => {
    if (category === activeAccordion) {
      setActiveAccordion("");
    } else {
      setActiveAccordion(category);
    }
  };

  useEffect((): void => {
    fetch(`/src/data/SearchFilter.json`)
      .then((res): Promise<TList[]> => res.json())
      .then((data): void => {
        setFiltersList(data);
      })
      .catch((err): void => console.error(err));
  }, []);

  return (
    <Wrapper>
      <Title>Refine Lot Results</Title>

      <AppliedFilters.Provider
        value={{
          appliedFilters,
          applyFilter,
          removeFilter,
          clearFilters,
          resetCheckbox,
          currentCheckbox
        }}
      >
        <SearchFilterApplied />

        <Layout>
          {filtersList.map(
            ({ category, filters }): JSX.Element => (
              <SearchFilterSection
                onToggle={(): void => handleToggle(category)}
                isOpened={activeAccordion === category}
                category={category}
                filters={filters}
                key={category}
              />
            )
          )}
        </Layout>
      </AppliedFilters.Provider>
    </Wrapper>
  );
};

export default SearchFilter;
