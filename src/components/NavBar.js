import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

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
      color: "#FFFFFF",
      margin: "0rem 1.0rem 0rem 1.0rem",
      textAlign: "center",
      fontSize: "2.3rem",
    },
    "& a": {
      fontSize: ".5rem",
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
            <Link to="/">
              <Typography variant="h6" color="textPrimary">
                Home
              </Typography>
            </Link>
            <Link to="/about">
              <Typography variant="h6" color="textPrimary">
                About
              </Typography>
            </Link>
            <Link to="/projects">
              <Typography variant="h6" color="textPrimary">
                Projects
              </Typography>
            </Link>
            <Link to="/contact">
              <Typography variant="h6" color="textPrimary">
                Contact
              </Typography>
            </Link>
          </section>
        </Toolbar>
      </AppBar>
    </div>
  );
}
