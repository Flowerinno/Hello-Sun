import { Text, Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import styles from "../styles/Error.module.css";

const ErrorPage: React.FC = () => {
	return (
		<div className={styles.error} style={{ cursor: "pointer" }}>
			<Text size={30} weight="bold" color="red">
				Sorry, seems like something went wrong. Please try again!
			</Text>
			<br />
			<NextLink href="/" role="homebutton" className={styles.home_button}>
				<a>Go to the home page</a>
			</NextLink>

			<NextLink
				href="https://www.youtube.com/watch?v=anJ9OyfmE3A"
				role="catsbutton"
				className={styles.cats_button}
			>
				<a target="_blank">Watch some cats jump around?</a>
			</NextLink>
		</div>
	);
};

export default ErrorPage;
