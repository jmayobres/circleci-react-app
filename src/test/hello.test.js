import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Hello from "../hello";

// afterEach(() => {
//   // cleanup on exiting

//   container.remove();
//   container = null;
// });

it("renders with or without a name", async () => {
  render(<Hello />);
  expect(screen.queryByText("Hey, stranger")).toBeVisible();
  //   expect(container.textContent).toBe("Hey, stranger");

  //   render(<Hello name="Jenny" />, container);

  //   expect(container.textContent).toBe("Hello, Jenny!");

  //   render(<Hello name="Margaret" />, container);

  //   expect(container.textContent).toBe("Hello, Margaret!");
});
