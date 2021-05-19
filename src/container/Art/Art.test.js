import React from "react";
import { render } from "@testing-library/react";
import Art from "./Art";

describe("Art tests", () => {
  it("should render", () => {
    expect(render(<Art />)).toBeTruthy();
  });
});
