import React from "react";
import NavBar from "../src/components/NavBar";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  AboutPageMainContent: {
    marginTop: "7rem",
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <title> Neil Lemmer || About</title>
        <meta name="description" content="Neil Lemmer || About Page" />
        <meta
          name="keywords"
          content="Neil Lemmer, Web Developer, Software Developer, Java Developer, About Page"
        />
        <meta
          name="google-site-verification"
          content="2RtZ7IsH_mEiSx0kHDspedV61VUK-kv6s-9EcUg7eU4"
        />

        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L2VS7L8PKX"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-L2VS7L8PKX');
        </script> */}
      </Helmet>
      <div>
        <NavBar />
        <section className={classes.AboutPageMainContent}></section>
      </div>
    </div>
  );
}
