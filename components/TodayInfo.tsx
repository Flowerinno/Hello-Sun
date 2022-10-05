import styles from "./TodayInfo.module.css";
import { Grid } from "@nextui-org/react";
import { Card1 } from "./cards/Card1";
import { Card2 } from "./cards/Card2";
import { Card3 } from "./cards/Card3";
import { Card4 } from "./cards/Card4";
import { Card5 } from "./cards/Card5";
import { Card6 } from "./cards/Card6";
import React from "react";

// interface TodayInfoTypes {
// 	uv: string
// }

const TodayInfo: React.FC = ({ data }: any) => {
	
	return (
		<div>
			<h1 style={{ margin: "0", padding: "0" , marginLeft: '4%',fontSize: '22px'}}>Today{`'`}s highlights</h1>
			<div className={styles.todayInfo_firstRow}>
				<Grid.Container gap={2} justify="center">
					<Grid xs={4}>
						<Card1 uv={data.current.uv}/>
					</Grid>
					<Grid xs={4}>
						<Card2 humidity={data.current.humidity}/>
					</Grid>
					<Grid xs={4}>
						<Card3 pressure={data.current.pressure_in}/>
					</Grid>
				</Grid.Container>
			</div>
			<div className={styles.todayInfo_secondRow}>
				<Grid.Container gap={2} justify="center">
					<Grid xs={4}>
						<Card4 visibility={data.current.vis_km}/>
					</Grid>
					<Grid xs={4}>
						<Card5 gust={data.current.gust_mph}/>
					</Grid>
					<Grid xs={4}>
						<Card6 tempF={data.current.feelslike_f}/>
					</Grid>
				</Grid.Container>
			</div>
		</div>
	);
};

export default TodayInfo;
