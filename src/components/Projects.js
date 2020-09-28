import React from "react";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";

export default function Projects() {
	return (
		<div>
			<Helmet>
				<title> Neil Lemmer || Projects</title>
				<meta name="description" content="Neil Lemmer Project's Page" />
			</Helmet>
			<NavBar />
		</div>
	);
}
