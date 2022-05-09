import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchWrapper from "./index";
import SearchFilter from "../SearchFilter";
import SearchResults from "../SearchResults";

configure({ adapter: new Adapter() });

it("should render Search Filter", (): void => {
  const wrapper = shallow(<SearchWrapper />).contains(<SearchFilter />);
  expect(wrapper).toBeTruthy();
});

it("should render Search Results", (): void => {
  const wrapper = shallow(<SearchWrapper />).contains(<SearchResults />);
  expect(wrapper).toBeTruthy();
});
