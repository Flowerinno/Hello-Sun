import { Text, Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import styles from "../styles/404.module.css";

const ErrorPage: React.FC = () => {
	return (
		<div className={styles.error} style={{cursor: 'pointer'}}>
			<Text size={30} weight="bold" color="red">
				Sorry, seems like something went wrong. Please try again!
			</Text>
			<br />
			<NextLink href="/" role='homebutton'>
				<Link block color="secondary">
					Go to the home page
				</Link>
			</NextLink>

			<NextLink href="https://www.youtube.com/watch?v=anJ9OyfmE3A" role='catsbutton'>
				<Link block color="secondary" >
					Watch some cats jump around?
				</Link>
			</NextLink>
		</div>
	);
};

export default ErrorPage;
