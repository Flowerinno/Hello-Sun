import styles from "./WeekList.module.css";

import React from "react";
import Image from "next/image";

const WeekList: React.FC = ({ weekData }: any) => {
	const uniqueForecast = weekData.forecast.forecastday;
	console.log(uniqueForecast);
	const forecastList = weekData.forecast.forecastday.map((weather: any) => {
		const dateMs = weather.date_epoch * 1000;
		const day = new Date(dateMs);
		const currDay = day.toString().split(" ")[0];

		return (
			<div key={weather.date_epoch} className={styles.weekList_item}>
				<span>{currDay}</span>
				<Image
					alt="days"
					src={`http:${weather.day.condition.icon}`}
					width="50px"
					height="50px"
				/>
				<h1>Average {weather.day.avgtemp_c}°C</h1>
				<p>{weather.day.condition.text}</p>
			</div>
		);
	});
	return <span className={styles.weekList_container}>{forecastList}</span>;
};

export default WeekList;
