import React from "react";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title> Neil Lemmer's Web Portfolio</title>
      </Helmet>
      <NavBar />
    </div>
  );
}
