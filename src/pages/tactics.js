import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <h1 className="title">Tactics</h1>
        <div className="panel is-primary">
          <header className="panel-heading">Offensive</header>
          <div className="panel-block">
            <ul>
              <li>Breakout</li>
              <li>Triangle</li>
              <li>One On One</li>
              <li>Rebound</li>
            </ul>
          </div>
        </div>
        <div className="panel is-primary">
          <header className="panel-heading">Defensive</header>
          <div className="panel-block">
            <ul>
              <li>Passing Lane</li>
              <li>Backcheck</li>
              <li>One On One</li>
              <li>Rebound</li>
              <li>Forecheck</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
