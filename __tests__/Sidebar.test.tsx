import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "../components/Sidebar";
import { FormElement } from "@nextui-org/react";
import userEvent from '@testing-library/user-event'
let data = {
	location: {
		name: "London",
	},
	current: {
		temp_c: 44,
		last_updated: "2022/10/12",
		wind_mph: 10,
		uv: 5,
		humidity: 5,
		pressure_in: 10,
		vis_km: 5,
		gust_mph: 5,
		feelslike_f: 20,
		condition: {
			text: "text",
			icon: "//1.png",
		},
	},
};

describe("Sidebar component", () => {
	it("renders content with default text", () => {
		render(<Sidebar data={data} />);
		const buttonElement = screen.getByText("Weather");
		const inputElement: FormElement = screen.getByRole("sidebarinput");
		expect(inputElement).toHaveTextContent("");
		expect(buttonElement).toBeInTheDocument();
		expect(screen.getByText("London")).toBeInTheDocument();
		expect(screen.getByText("text")).toBeInTheDocument();
		expect(screen.getByRole('temp')).toBeInTheDocument();
		expect(screen.getByRole('wind')).toBeInTheDocument();
	});
	it('handles input changes', () => {
		render(<Sidebar data={data} />);
		const inputElement: FormElement = screen.getByRole("sidebarinput");
		fireEvent.change(inputElement, { target: { value: "text" } });
		expect(inputElement.value).toBe("text");
	});
	it('handles clicks on Weather button and validates if input !== 0 & === 0', () => {
		const user = userEvent.setup();
		render(<Sidebar data={data} />);
		const buttonElement = screen.getByText("Weather");
		const inputElement: FormElement = screen.getByRole("sidebarinput");
		user.click(buttonElement);
		expect(inputElement.value).toBe('');
		fireEvent.change(inputElement, {target: {value: "test"}});
		expect(inputElement.value).toBe('test')
		user.click(buttonElement);
	})
});
