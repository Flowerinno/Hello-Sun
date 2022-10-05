import React, { useState } from "react";
import { FormElement, Input } from "@nextui-org/react";
import styles from "../styles/Welcome.module.css";
import { Button, Loading } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Text } from "@nextui-org/react";
import Image from "next/image";
const Welcome = () => {
	const [input, setInput] = useState("");
	const [valid, setValid] = useState(true);
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
	const submitHandler = (e: any) => {
		if (input === "") {
			alert("Please enter a valid location! (Upper case)");
		}
		let url = input.toLowerCase().trim();
		router.push(`/${url}`);
	};
	return (
		<div className={styles.welcome}>
			<Image
				src="/hellosun.jpg"
				alt="logo hello-sun"
				width="250"
				height="250"
			/>
			<Input
				width="450px"
				value={input}
				onChange={inputHandler}
				required
				min="5"
				labelPlaceholder="Search for any location you think of!"
			/>
			{input.length < 2 && (
				<Button
					disabled
					auto
					bordered
					color="warning"
					css={{ width: "100px" }}
					aria-label="loading"
				>
					<Loading type="points-opacity" color="currentColor" size="sm" />
				</Button>
			)}
			{input.length >= 2 && valid && (
				<Button
					onClick={submitHandler}
					auto
					css={{
						width: "100px",
						backgroundColor: "black",
					}}
				>
					Weather
				</Button>
			)}
			{!valid && (
				<Text
					h1
					size={25}
					css={{
						textGradient: "45deg, $blue600 -20%, $pink600 50%",
						padding: "0",
						margin: "0",
					}}
					weight="bold"
				>
					Please enter a valid location
				</Text>
			)}
		</div>
	);
};

export default Welcome;
