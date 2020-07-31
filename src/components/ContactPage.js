import React from "react";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/styles";
import ContactForm from "./ContactForm";

const useStyles = makeStyles({
  contactForm: {
    marginTop: "7.0rem",
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
  },
});

export default function ContactPage() {
  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <title> Neil Lemmer || Contact Me</title>
      </Helmet>
      <NavBar />
      <section className={classes.contactForm}>
        <ContactForm />
      </section>
    </div>
  );
}
