import { Card1 } from "../components/cards/Card1";
import { Card2 } from "../components/cards/Card2";
import { Card3 } from "../components/cards/Card3";
import { Card4 } from "../components/cards/Card4";
import { Card5 } from "../components/cards/Card5";
import { Card6 } from "../components/cards/Card6";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
type DataType = {
	uv: number;
	humidity: number;
	pressure: number;
	visibility: number;
	gust: number;
	tempF: number;
};
let url =
	"https://assets.ltkcontent.com/images/30735/thermometer-in-snow_0066f46bde.jpg";

describe("renders cards correctly", () => {
	let data: DataType = {
		uv: 5,
		humidity: 4,
		pressure: 5,
		visibility: 5,
		gust: 5,
		tempF: 5,
	};

	it("renders card1 component", () => {
		render(<Card1 uv={data.uv} />);
		const textInfoElement = screen.getByRole("textinfo");
		const textHeadElement = screen.getByText("UV index");
		const imageElement = screen.getByAltText('card image')
		expect(textHeadElement).toBeInTheDocument();
		expect(textInfoElement).toBeInTheDocument();
		expect(imageElement).toBeInTheDocument();
		expect(textInfoElement).toHaveTextContent("Ultraviolet - 5");
	});
});
