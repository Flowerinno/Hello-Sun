import Head from "next/head";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";
import { fetchHandler } from "../services/fetchData";
import { OneDayProps, WeekDataType } from "../types/forecastType";

const Home: React.FC<OneDayProps & WeekDataType> = ({ data, weekData }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Hello-Sun</title>
				<meta name="description" content="Don't get wet!" />
				<link rel="icon" href="/logo.png" />
			</Head>
			<Sidebar data={data} />
			<Main weekData={weekData} data={data} />
		</div>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({
	params,
}: any) => {
	const location = params["location"];
	const api = process.env.API_KEY;
	const { res, res7 }: any = await fetchHandler(
		`http://api.weatherapi.com/v1/current.json?key=${api}&q=${location}&aqi=no`,
		`http://api.weatherapi.com/v1/forecast.json?key=${api}&q=${location}&days=7&aqi=no&alerts=no`
	);
	return {
		props: {
			data: res,
			weekData: res7,
		},
	};
};
