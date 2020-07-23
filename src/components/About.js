import React from "react";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
import { makeStyles, Button } from "@material-ui/core";
import theme from "../MaterialUI Theme/theme";

const useStyles = makeStyles({
  AboutPageMainContent: {
    marginTop: "4.5rem",
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
        <Button variant="contained" color="secondary">
          Hello
        </Button>
      </section>
    </div>
  );
}
