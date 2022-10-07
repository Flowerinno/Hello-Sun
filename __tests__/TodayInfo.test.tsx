import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "../components/Sidebar";
import { FormElement } from "@nextui-org/react";
import userEvent from '@testing-library/user-event'
import TodayInfo from "../components/TodayInfo";
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

describe('TodayInfo component', () => {
    it('renders all cards', () => { 
        render(<TodayInfo data={data} />);
        expect(screen.getByRole('container')).toBeInTheDocument();
    })
})