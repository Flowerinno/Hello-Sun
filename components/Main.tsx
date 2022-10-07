import { Button , Text} from "@nextui-org/react";
import styles from "./Main.module.css";
import React, { useState } from "react";
import WeekList from "./WeekList";
import TodayInfo from "./TodayInfo";
import { OneDayProps, WeekDataType } from "../types/forecastType";

const Main: React.FC<OneDayProps & WeekDataType> = ({ data, weekData }) => {
	const [weekInfo, setWeekInfo] = useState(false);

	return (
		<div className={styles.main_container}>
			<span className={styles.main_show}>
				<Button role='weekbutton' bordered color="gradient" shadow auto ghost size="lg" onClick={() => setWeekInfo(!weekInfo)}>
					Week forecast
				</Button>
			</span>
			<main className={styles.main_content}>
				{weekInfo && <WeekList weekData={weekData} />}
				<TodayInfo data={data} />
			</main>

		</div>
	);
};

export default Main;
