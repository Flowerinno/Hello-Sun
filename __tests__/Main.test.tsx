import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "../components/Main";

describe("Main component renders elements", () => {
	it("renders elements appropriately", () => {
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
        let data = {
            location: {
                name: 'London'
            },
            current: {
                temp_c: 44,
                last_updated: '2022/10/12',
                wind_mph: 10,
                uv: 5,
                humidity: 5,
                pressure_in: 10,
                vis_km: 5,
                gust_mph: 5,
                feelslike_f: 20,
                condition: {
                    text: 'text',
                    icon: '//1.png'
                }
            }
        }
		render(<Main data={data} weekData={weekData} />);
		const todayButton = screen.getByRole("todaybutton");
        const weekButton = screen.getByRole("weekbutton");
        expect(todayButton && weekButton).toBeInTheDocument();
    });
    
});


