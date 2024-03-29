import React from "react";
import { BlogCard } from "../components/widgets/card/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("BlogCard", () => {
	it("renders blog card title and button", () => {
		const post = {
			userId: 1,
			id: 1,
			title: "Nice Page",
			body: "Hello World",
		};

		render(<BlogCard post={post} />);

		const title = screen.getByRole("heading", { name: "Nice Page..." });
		expect(title).toBeInTheDocument();

		const body = screen.getByTestId('body');
		expect(body).not.toBeNull();

		const button = screen.getByRole("button", { name: "Read More" });
		expect(button).toBeInTheDocument();
	});
});