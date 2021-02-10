import React from "react";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/styles";
import ContactForm from "./ContactForm";

const useStyles = makeStyles({
  contactForm: {
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
        <meta name="description" content="NNeil Lemmer || About Page" />
        <meta name="keywords" content="Neil Lemmer, Contact Page" />
      </Helmet>
      <NavBar />
      <section className={classes.contactForm}>
        <ContactForm />
      </section>
    </div>
  );
}
