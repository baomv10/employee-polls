import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./index";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../stores";

describe("Login", () => {
  it("will display an error if the user/password are not provided.", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const submitButton = component.getByTestId("btnSubmit");
    fireEvent.click(submitButton);
    expect(component.getByTestId("error-user")).toBeInTheDocument();
    expect(component.getByTestId("error-password")).toBeInTheDocument();
  });

  it("will not display an error if all fields are provided", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const inputUser = component.getByTestId("user");
    fireEvent.change(inputUser, { target: { value: "sales" } });

    const inputPassword = component.getByTestId("password");
    fireEvent.change(inputPassword, { target: { value: "sales" } });

    const submitButton = component.getByTestId("btnSubmit");
    fireEvent.click(submitButton);

    expect(component.queryByTestId("error-user")).not.toBeInTheDocument();
    expect(component.queryByTestId("error-password")).not.toBeInTheDocument();
  });
});
