import { Button } from "@nextui-org/react";
import styles from "./Main.module.css";
import React, { useState } from "react";
import WeekList from "./WeekList";
import TodayInfo from "./TodayInfo";

const Main: React.FC = ({ data, weekData }: any) => {
	const [weekInfo, setWeekInfo] = useState(false);
	return (
		<div className={styles.main_container}>
			<span className={styles.main_show}>
				<Button bordered color="gradient" shadow auto ghost size="lg">
					Today
				</Button>
				<Button bordered color="gradient" shadow auto ghost size="lg" onClick={() => setWeekInfo(!weekInfo)}>
					Week
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
