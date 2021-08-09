import React from "react";
import NavBar from "../src/components/NavBar";
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
    </div>
  );
}
