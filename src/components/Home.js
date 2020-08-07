import React from "react";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
import theme from ".";
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
    "@media (max-width: 500px)": {
      marginTop: "10rem",
    },
  },
});
export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <title> Neil Lemmer's Web Portfolio</title>
      </Helmet>
      <NavBar />
      <Card className={classes.root}>
        <CardContent className={classes.cardContect}>
          <Typography color="textSecondary">Hello</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
