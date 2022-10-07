import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormElement } from "@nextui-org/react";
import userEvent from "@testing-library/user-event";

describe("404 page", () => {
	it("renders error message, input and button", () => {
		const text = screen.getByText(
			"Sorry, seems like something went wrong. Please try again!"
		);
		const homeLink = screen.getByRole("homebutton");
		const catsLink = screen.getByRole("catsbutton");

		expect(catsLink).toHaveAttribute(
			"href",
			"https://www.youtube.com/watch?v=anJ9OyfmE3A"
		);
		expect(homeLink).toHaveAttribute("href", "/");
		expect(text).toBeInTheDocument();
	});
});
