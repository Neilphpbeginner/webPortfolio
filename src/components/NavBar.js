import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
// import Head from "react-helmet";

const useStyles = makeStyles({
  menuAppBar: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    "@media (max-width: 500px)": {
      flexDirection: "column",
    },
  },
  mainHeading: {
    flexShrink: 1,
    fontSize: "2.3rem",
  },
  menuItems: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 2,
    justifyContent: "flex-end",
    "@media (max-width: 500px)": {
      justifyContent: "space-evenly",
      alignItems: "center",
      flexDirection: "column",
    },
    "& h6": {
      margin: "0rem 1.0rem 0rem 1.0rem",
      textAlign: "center",
    },
    "& a": {
      color: "#FFFFFF",
      fontSize: "2.3rem",
      textDecoration: "none",
    },
  },
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar className={classes.menuAppBar}>
          <Typography variant="h6" className={classes.mainHeading}>
            Neil Lemmer's Web Portfolio
          </Typography>
          <section className={classes.menuItems}>
            <Typography variant="h6" color="textPrimary">
              <Link href="/" as="/" prefetch={true}>
                <a>Home</a>
              </Link>
            </Typography>
            <Typography variant="h6" color="textPrimary">
              <Link href="/about" as="/about" prefetch={true}>
                <a>About</a>
              </Link>
            </Typography>
            <Typography variant="h6" color="textPrimary">
              <Link href="/projects" as="/projects" prefetch={true}>
                <a>Projects</a>
              </Link>
            </Typography>
            <Typography variant="h6" color="textPrimary">
              <Link href="/contact" as="/contact" prefetch={true}>
                <a>Contact</a>
              </Link>
            </Typography>
          </section>
        </Toolbar>
      </AppBar>
    </div>
  );
}
