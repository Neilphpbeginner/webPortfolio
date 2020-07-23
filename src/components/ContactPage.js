import React from "react";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";

export default function ContactPage() {
  return (
    <div>
      <Helmet>
        <title> Neil Lemmer || Contact Me</title>
      </Helmet>
      <NavBar />
    </div>
  );
}
