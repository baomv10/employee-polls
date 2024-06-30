import * as React from "react";
import { render } from "@testing-library/react";
import AnsweredQuestionDetail from ".";

describe("AnsweredQuestionDetail", () => {
  it("matches the snapshot when question is passed", () => {
    var component = render(
      <AnsweredQuestionDetail
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
    );
    expect(component).toMatchSnapshot();
  });

  it("matches the snapshot when no question is passed", () => {
    var component = render(<AnsweredQuestionDetail />);
    expect(component).toMatchSnapshot();
  });
});
