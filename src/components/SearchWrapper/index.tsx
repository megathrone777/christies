import React from "react";
import { Layout, SideLeft, SideRight } from "./styled";
import SearchResults from "../SearchResults";
import SearchFilter from "../SearchFilter";

const SearchWrapper: React.FC = (): JSX.Element => (
  <Layout>
    <SideLeft>
      <SearchFilter />
    </SideLeft>

    <SideRight>
      <SearchResults />
    </SideRight>
  </Layout>
);

export default SearchWrapper;
