import * as React from "react";
import { render } from "@testing-library/react";
import QuestionCard from ".";
import { BrowserRouter } from "react-router-dom";

describe("QuestionCard", () => {
  it("matches the snapshot when question is passed", () => {
    var component = render(
      <BrowserRouter>
        <QuestionCard
          question={{
            id: "8xf0y6ziyjabvozdd253nd",
            author: "sarahedo",
            timestamp: 1467166872634,
            optionOne: {
              votes: ["sarahedo"],
              text: "Build our new application with Javascript",
            },
            optionTwo: {
              votes: [],
              text: "Build our new application with Typescript",
            },
          }}
        />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });

  it("matches the snapshot when no question is passed", () => {
    var component = render(
      <BrowserRouter>
        <QuestionCard />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
