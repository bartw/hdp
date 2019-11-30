import React from "react";
import { Helmet } from "react-helmet";
import Nav from "../nav";
import Footer from "../footer";
import "./index.scss";

export default ({ children }) => (
  <>
    <Helmet>
      <title>HDP</title>
      <meta name="description" content="Haskey Development Program" />
    </Helmet>
    <Nav />
    {children}
    <Footer />
  </>
);
