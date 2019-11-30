import React from "react";
import { Helmet } from "react-helmet";
import "./index.scss";

export default () => (
  <>
    <Helmet>
      <title>HDP</title>
      <meta name="description" content="Haskey Development Program" />
    </Helmet>
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">HDP</h1>
          <h2 className="subtitle">Haskey Development Program</h2>
        </div>
      </div>
    </section>
  </>
);
