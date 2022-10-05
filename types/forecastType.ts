export interface OneDayProps {
	data: {
		location: {
			name: string;
		};
		current: {
			temp_c: number;
			last_updated: string;
			wind_mph: number;
			uv: number;
			humidity: number;
			pressure_in: number;
			vis_km: number;
			gust_mph: number;
			feelslike_f: number;
			condition: {
				text: string;
				icon: string;
			};
		};
	};
}

export interface WeekDataType {
	weekData: {
		forecast: {
			forecastday: ForecastDayType[];
		};
	};
}

type ForecastDayType = {
	date_epoch: number;
	day: {
		avhtemp_c: number;
		condition: {
			icon: string;
			text: string;
		};
	};
};

export type HomeTypes = OneDayProps | WeekDataType;
