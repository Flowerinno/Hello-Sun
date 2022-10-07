import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormElement } from "@nextui-org/react";
import userEvent from "@testing-library/user-event";
import Welcome from "../pages/index";

describe("HomePage, Welcome component", () => {
    it("renders content correctly", () => {
        const user = userEvent.setup();
        render(<Welcome />);
		const logoImage = screen.getByTestId("logo");
		const inputElement: FormElement = screen.getByLabelText(
			"Search for any location you think of!"
		);
        

		expect(inputElement).toBeInTheDocument();
        expect(inputElement.value).toBe('');

		expect(logoImage).toHaveAttribute("src", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
        expect(logoImage).toBeInTheDocument();
        
    
    });
    it('handles input changes', () => {
        render(<Welcome />);
        const inputElement: FormElement = screen.getByLabelText(
			"Search for any location you think of!"
        );
        fireEvent.change(inputElement, { target: { value: 'test'}})
        expect(inputElement.value).toBe('test')
    });
    it('handles buttons rendering and clicks', () => {
        const user = userEvent.setup();

        render(<Welcome />);
        const inputElement: FormElement = screen.getByLabelText(
			"Search for any location you think of!"
        );
        const disabledButton = screen.getByTestId('disabledbutton');
        expect(disabledButton).toBeInTheDocument();
        fireEvent.change(inputElement, { target: { value: 'London' } });
        expect(inputElement.value).toBe('London');
        expect(disabledButton).not.toBeInTheDocument();
        const activeButton = screen.getByTestId('activebutton');
        expect(activeButton).toBeInTheDocument();
        
        user.click(activeButton)

    })
});
