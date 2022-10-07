import Head from "next/head";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";
import { fetchHandler } from "../services/fetchData";
import { OneDayProps, WeekDataType } from "../types/forecastType";
import { ParsedUrlQuery } from "querystring";
const Home: React.FC<OneDayProps & WeekDataType> = ({ data, weekData }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>{`${data.location.name}`} weather</title>
				<meta content="weather hello-sun" />
			</Head>
			<Sidebar data={data} />
			<Main weekData={weekData} data={data} />
		</div>
	);
};

export default Home;
interface IParams extends ParsedUrlQuery {
	params: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { location } = params as IParams;
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
