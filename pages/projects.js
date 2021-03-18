import React from "react";
import NavBar from "./components/NavBar";
import { Helmet } from "react-helmet";

export default function Projects() {
  return (
    <div>
      <Helmet>
        <title> Neil Lemmer || Projects</title>
        <meta name="description" content="Neil Lemmer Project's Page" />
        <meta
          name="google-site-verification"
          content="2RtZ7IsH_mEiSx0kHDspedV61VUK-kv6s-9EcUg7eU4"
        />
      </Helmet>
      <NavBar />
    </div>
  );
}
