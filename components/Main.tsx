import { Button } from "@nextui-org/react";
import styles from "./Main.module.css";
import React from "react";
import WeekList from "./WeekList";
import TodayInfo from "./TodayInfo";

const Main: React.FC = ({ weekData }: any) => {
	
	return (
		<div className={styles.main_container}>
			<span className={styles.main_show}>
				<Button bordered color="gradient" shadow auto ghost size="lg">
					Today
				</Button>
				<Button bordered color="gradient" shadow auto ghost size="lg">
					Week
				</Button>
            </span>
            <WeekList weekData={weekData}/>
            {/* <TodayInfo /> */}
		</div>
	);
};

export default Main;
