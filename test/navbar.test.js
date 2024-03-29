import React from "react";
import { NavBar } from "../components/widgets/navbar/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";

describe("NavBar", () => {
	const mockSession = {
		data: {
			user: {
				name: "John Doe",
				image: "https://example.com/user-image.jpg",
			},
		},
	};
	it("renders ", () => {
		render(
			<SessionProvider
				// @ts-ignore
				session={mockSession}>
				<NavBar />
			</SessionProvider>
		);
		const title = screen.getByRole("heading", { name: "My Blog" });
		expect(title).toBeInTheDocument();

		const name = screen.getByTestId('username');
		expect(name).not.toBeNull();
	});
});

