import { Text, Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import styles from "../styles/404.module.css";

const ErrorPage: React.FC = () => {
	return (
		<div className={styles.error}>
			<Text size={30} weight="bold" color="red">
				Sorry, seems like something went wrong. Please try again!
			</Text>
			<br />
			<NextLink href="/" style={{ cursor: "pointer" }}>
				<a>
					<Link block color="secondary">
						Go to the home page
					</Link>
				</a>
			</NextLink>
			<a
				href="https://www.youtube.com/watch?v=anJ9OyfmE3A"
				style={{ cursor: "pointer" }}
			>
				<Link block color="secondary">
					Watch some cats jump around?
				</Link>
			</a>
		</div>
	);
};

export default ErrorPage;
