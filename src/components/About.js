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
      </Helmet>
      <NavBar />
      <section className={classes.AboutPageMainContent}>
      </section>
    </div>
  );
}
