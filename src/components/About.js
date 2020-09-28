import React from "react";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	AboutPageMainContent: {
		marginTop: "7rem",
	},
});

export default function About() {
	const classes = useStyles();
	return (
		<div>
			<Helmet>
				<title> Neil Lemmer || About</title>
				<meta name="description" content="Neil Lemmer || About Page" />
				<meta
					name="keywords"
					content="Neil Lemmer, Web Developer, Software Developer, Java Developer"
				/>
				<meta name="keywords" content="Neil Lemmer, About Page" />
			</Helmet>
			<div>
				<NavBar />
				<section className={classes.AboutPageMainContent}></section>
			</div>
		</div>
	);
}
