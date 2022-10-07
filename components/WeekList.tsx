import styles from "./WeekList.module.css";
import { WeekDataType } from "../types/forecastType";
import React from "react";
import Image from "next/image";

const WeekList: React.FC<WeekDataType> = ({ weekData }) => {
	const forecastList = weekData.forecast.forecastday.map((weather) => {
		const dateMs = weather.date_epoch * 1000;
		const day = new Date(dateMs);
		const currDay = day.toString().split(" ")[0];

		return (
			<div key={weather.date_epoch} className={styles.weekList_item}>
				<span role='day'>{currDay}</span>
				<Image
					alt="days"
					src={`http:${weather.day.condition.icon}`}
					width="50px"
					height="50px"
					role='forecastimage'
				/>
				<h1 role='avhtemp'>Average {weather.day.avhtemp_c}°C</h1>
				<p>{weather.day.condition.text}</p>
			</div>
		);
	});
	return <span role='forecastlist' className={styles.weekList_container}>{forecastList}</span>;
};

export default WeekList;
