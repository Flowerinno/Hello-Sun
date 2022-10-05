import { FormElement, Input } from "@nextui-org/react";
import styles from "./Sidebar.module.css";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Text } from "@nextui-org/react";
import { OneDayProps } from "../types/forecastType";

const Sidebar: React.FC<OneDayProps> = ({ data }) => {
	const [input, setInput] = useState("");
	const [valid, setValid] = useState(true);
	const date = data.current.last_updated;
	const [dateValues, timeValues] = date.split(" ");
	const router = useRouter();
	const pattern = /(?:^|[^A-Z])[A-Z](?![A-Z])/;

	const inputHandler = (e: React.ChangeEvent<FormElement>) => {
		if (pattern.test(e.target.value) === true) {
			setValid(true);
			setInput(e.target.value);
		} else {
			setValid(false);
		}
	};

	const clickHandler = () => {
		if (input === "") {
			setValid(false);
		}
		let url = input.toLowerCase().trim();
		router.push(`/${url}`);
	};
	return (
		<div className={styles.sidebar_container}>
			<Head>
				<title>{`${data.location.name}`} weather</title>
				<meta property="og:title" content="weather hello-sun" key="title" />
			</Head>

			<div className={styles.sidebar_header}>
				<div className={styles.sidebar_input}>
					<Input
						size="md"
						labelPlaceholder="Search for places..."
						width="80%"
						status="default"
						clearable={true}
						aria-label="search-input"
						value={input}
						onChange={inputHandler}
					/>
					<Button color="gradient" auto ghost onClick={clickHandler}>
						Weather
					</Button>
				</div>
				{!valid && (
					<Text color="error">Please enter a valid location! (Upper case)</Text>
				)}
			</div>

			<Image
				src={`http:${data.current.condition.icon}`}
				alt="current weather"
				width="200"
				height="200"
			/>
			<main>
				<span className={styles.sidebar_temp}>
					<Text
						h1
						size={30}
						css={{
							textGradient: "45deg, $blue600 -20%, $pink600 50%",
						}}
						weight="bold"
					>
						{data.location.name}
					</Text>
					<h2>{data.current.temp_c}°C</h2>
					<p>
						{dateValues}, {timeValues}
					</p>
				</span>
				<div className={styles.sidebar_temp2}>
					<p>{data.current.condition.text}</p>
					<p>{data.current.wind_mph} - wind mph</p>
				</div>
			</main>
		</div>
	);
};

export default Sidebar;
