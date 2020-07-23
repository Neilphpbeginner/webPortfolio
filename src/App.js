import React from "react";
import NavBar from "./components/NavBar";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: "4.5rem",
    textAlign: "center",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <section className={classes.root}>
        <Typography variant="h3" color="secondary">
          Hello
        </Typography>
      </section>
    </div>
  );
}
