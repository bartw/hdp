import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">HDP</h1>
          <h2 className="subtitle">Haskey Development Program</h2>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1 className="title">Vision</h1>
        <div className="content">
          <p>
            We want to create an environment where kids can learn to play hockey
            and at the same time learn how to behave in group situations. The
            kids should grow both physically and mentally.
          </p>
          <p>
            Everyone should have fun on and off the ice. Kids should be enabled
            to learn at their own pace, without pressure but with enough
            challenges to grow.
          </p>
          <p>
            We want to create teams that know how to win and how to lose. Teams
            where indiviuals stand up for each other but always stay respectful.
          </p>
          <p>
            All this should be done in a transparant way for all stakeholders.
            Parents, coaches, the board and the kids.
          </p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1 className="title">Goal</h1>
        <div className="content">
          <p>
            The goal of this development program is to create a baseline for all
            Haskey coaches.
          </p>
          <p>
            The development program is a living document and can receive input
            from all stakeholders.
          </p>
          <p>
            We want each coach to teach skills and tactics in a consistent way.
          </p>
          <p>
            If we follow the principles, stay true to our goals and realize our
            vision, we will have created an identity that people associate with
            Haskey. This Haskey DNA will help the club grow.
          </p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1 className="title">Coaching Principles</h1>
        <ul className="list">
          <li className="list-item">Enthusiastic</li>
          <li className="list-item">Positive</li>
          <li className="list-item">Demanding But Considerate</li>
          <li className="list-item">Consistent</li>
          <li className="list-item">Listen To The Players</li>
          <li className="list-item">Effective And Constructive Feedback</li>
          <li className="list-item">Treat Each Player As An Individual</li>
          <li className="list-item">Everyone Is Equal</li>
        </ul>
      </div>
    </section>
  </Layout>
);
