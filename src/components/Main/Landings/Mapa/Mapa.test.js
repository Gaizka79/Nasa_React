import React from "react";
import { shallow } from "enzyme";
import Mapa from "./Mapa";

describe("Mapa", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Mapa />);
    expect(wrapper).toMatchSnapshot();
  });
});
