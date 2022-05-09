import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Header from "./index";
import { Wrapper } from "./styled";
import { configure, shallow } from "enzyme";

configure({ adapter: new Adapter() });

it("should render Header", (): void => {
  const header = shallow(<Header />).contains(<Wrapper>Header</Wrapper>);
  expect(header).toBeTruthy();
});
