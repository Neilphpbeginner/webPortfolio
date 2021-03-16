import React from "react";
import NavBar from "./components/NavBar";
import theme from "../src/MaterialUI Theme/theme";
import Head from "next/head";
import { Card, makeStyles, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: "11.7rem",
  },
  cardContect: {
    backgroundColor: theme.palette.primary.main,
    width: "90%",
    margin: "auto",
    minHeight: "100vh",
    borderRadius: "2.5rem",
    color: theme.palette.background.default,
    "@media (max-width: 500px)": {
      marginTop: "10rem",
    },
  },
});
export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title> Neil Lemmer || Full Stack Web Developer</title>
        <meta
          name="description"
          content="Neil Lemmer Full Stack Web developer. I am a motivated, hardworking individual that thrives on a challenge.  I perform my duties to the best of my abilities, and often clients work under pressure to achieve targets.  I am reliable and trustworthy and possess exceptional leadership qualities. "
        />
        <meta
          name="keywords"
          content="Reactjs, Redux, Javascript, Python, Java, Nodejs, Express, HTML, CSS, PHP, Windows Suite, Linux knexjs, Mysql, Postgress, Passportjs, Backend developer, Frontend Developer.  "
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <NavBar />

      <Card className={classes.root}>
        <CardContent className={classes.cardContect}>
          <Typography variant="h1" style={{ textAlign: "center" }}>
            Web Site is still being develop. But feel free to contact me on the
            contact page.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
