import React from "react";
import Layout from "../components/layout";
import tactics from "../data/tactics";

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <h1 className="title">Tactics</h1>
        <div className="columns">
          {tactics.map(({ id, label, items }) => (
            <div key={id} className="column">
              <div className="panel is-primary">
                <header className="panel-heading">{label}</header>
                <div className="panel-block">
                  <ul>
                    {items.map(({ id, label }) => (
                      <li key={id}>{label}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);
