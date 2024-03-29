import React from "react";
import { PostCard } from "../components/widgets/card/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("PostCard", () => {
  it("renders post card title and comments", () => {
    const post = {
      userId: 1,
      id: 1,
      title: "Nice Page",
      body: "Hello World",
    };
    const comments = [
      {
        postId: 1,
        id: 1,
        name: "Ali",
        email: "ali@gmail.com",
        body: "Hello",
      },
      {
        postId: 1,
        id: 2,
        name: "Ali2",
        email: "ali2@gmail.com",
        body: "Hello",
      },
    ];

    render(<PostCard post={post} comments={comments} />);

    const title = screen.getByRole("heading", { name: "Nice Page" });
    expect(title).toBeInTheDocument();

    const commentElements = screen.getAllByText("Hello");
    expect(commentElements.length).toBe(2);
  });
});


