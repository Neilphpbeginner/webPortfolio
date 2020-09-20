import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import ContactPage from "./components/ContactPage";
// import Projects from "./components/Projects";
import Home from "./components/Home";

export default function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={ContactPage} />
				{/* <Route path="/projects" component={Projects} /> */}
			</Switch>
		</div>
	);
}
