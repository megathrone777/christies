import React, { SFCElement, ReactElement } from "react";
import {
  Wrapper,
  Title,
  TitleText,
  ListLayout,
  List,
  ListItem,
  ListLink,
  ButtonsLayout,
  ButtonClear,
  ButtonSave
} from "./styled";
import { AppliedFilters } from "../../SearchFilter";

const SearchFilterApplied: React.FC = (): SFCElement<ReactElement> => {
  const handleLink = (
    id: string,
    removeFilter: (id: string) => void,
    resetCheckbox: (id: string) => void
  ): void => {
    removeFilter(id);
    resetCheckbox(id);
  };

  return (
    <AppliedFilters.Consumer>
      {({
        appliedFilters,
        clearFilters,
        removeFilter,
        resetCheckbox
      }): JSX.Element => (
        <Wrapper isVisible={appliedFilters.length ? true : false}>
          <Title>
            <TitleText>Applied Filters ({appliedFilters.length})</TitleText>
          </Title>

          <ListLayout>
            <List>
              {appliedFilters.map(
                ({ id, label, amount }): JSX.Element => (
                  <ListItem key={`${id}-${label}`}>
                    <ListLink
                      onClick={(): void =>
                        handleLink(id, removeFilter, resetCheckbox)
                      }
                    >
                      {label} ({amount})
                    </ListLink>
                  </ListItem>
                )
              )}
            </List>
          </ListLayout>

          <ButtonsLayout>
            <ButtonClear onClick={clearFilters} type="button">
              Clear All
            </ButtonClear>
            <ButtonSave type="button">Save as Interest</ButtonSave>
          </ButtonsLayout>
        </Wrapper>
      )}
    </AppliedFilters.Consumer>
  );
};

export default SearchFilterApplied;
