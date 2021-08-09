import React from "react";
import NavBar from "../src/components/NavBar";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/styles";
import ContactForm from "../src/components/ContactForm";

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
        <meta name="description" content="Neil Lemmer || Contact Page" />
        <meta
          name="google-site-verification"
          content="2RtZ7IsH_mEiSx0kHDspedV61VUK-kv6s-9EcUg7eU4"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L2VS7L8PKX"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-L2VS7L8PKX');
        </script>
      </Helmet>
      <NavBar />
      <section className={classes.contactForm}>
        <ContactForm />
      </section>
    </div>
  );
}
