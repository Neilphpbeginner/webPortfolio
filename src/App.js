import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import About from "./components/About";
import ContactPage from "./components/ContactPage";
import Projects from "./components/Projects";
import Home from "./components/Home";

export default function App() {
  return (
    <div>
      <Helmet>
        <title> Neil Lemmer || Full Stack Web Developer</title>
        <meta
          name="description"
          content="Neil Lemmer Full Stack Web developer. I am a motivated, hardworking individual that thrives on a challenge.  I perform my duties to the best of my abilities, and often clients work under pressure to achieve targets.  I am reliable and trustworthy and possess exceptional leadership qualities. "
        />
        <meta
          name="keywords"
          content="Reactjs, Redux, Javascript, Python, Java, Nodejs, Express, HTML, CSS, PHP, Windows Suite, Linux knexjs, Mysql, Postgress, Passportjs, Backend developer, Frontend Developer.  "
        />
      </Helmet>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
