import React from "react";
import NavBar from "./NavBar";
import theme from "../MaterialUI Theme/theme";
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
