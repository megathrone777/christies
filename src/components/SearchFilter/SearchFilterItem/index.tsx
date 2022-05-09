import React, { useState } from "react";
import { Wrapper, Checkbox, Label } from "./styled";
import { AppliedFilters } from "../../SearchFilter";
import { TSearchFilterItem } from "./types";

const SearchFilterItem: React.FC<TSearchFilterItem> = ({
  id,
  label,
  amount
}): JSX.Element => {
  const [checkboxChecked, setCheckbox] = useState<boolean>(false);

  const handleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    applyFilter: (filter: TSearchFilterItem) => void,
    removeFilter: (id: string) => void
  ): void => {
    if (e.target.checked) {
      setCheckbox(true);
      applyFilter({ id, label, amount });
    } else {
      setCheckbox(false);
      removeFilter(id);
    }
  };

  return (
    <AppliedFilters.Consumer>
      {({
        appliedFilters,
        applyFilter,
        removeFilter,
        resetCheckbox,
        currentCheckbox
      }): JSX.Element => {
        if (appliedFilters.length === 0 || currentCheckbox === id) {
          setCheckbox(false);
          resetCheckbox("");
        }

        return (
          <Wrapper>
            <Checkbox
              type="checkbox"
              id={id}
              checked={checkboxChecked}
              onChange={(e): void =>
                handleCheckbox(e, applyFilter, removeFilter)
              }
            />
            <Label htmlFor={id}>
              {label} ({amount})
            </Label>
          </Wrapper>
        );
      }}
    </AppliedFilters.Consumer>
  );
};

export default SearchFilterItem;
