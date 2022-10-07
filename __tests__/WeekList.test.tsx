import { render, screen } from "@testing-library/react";
import WeekList from "../components/WeekList";
import "@testing-library/jest-dom";

describe("WeekList component", () => {
	it("renders elements with appropriate content", () => {
		let weekData = {
			forecast: {
				forecastday: [
					{
						date_epoch: 1664906680,
						day: {
							avhtemp_c: 20,
							condition: {
								icon: "//1.png",
								text: "Monday text",
							},
						},
					},
				],
			},
		};
		render(<WeekList weekData={weekData} />);
		const spanForecastList = screen.getByRole("forecastlist");
		const spanElement = screen.getByRole("day");
		const h1Element = screen.getByRole("avhtemp");
		const imageElement = screen.getByRole("forecastimage");
		expect(h1Element).toBeInTheDocument();
		expect(spanElement).toBeInTheDocument();
		expect(h1Element).toHaveTextContent("Average 20");
		expect(spanForecastList).not.toBeNull();
		expect(imageElement).toBeInTheDocument();
	});
});
