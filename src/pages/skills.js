import React, { Component } from "react";
import Layout from "../components/layout";

const skills = ["Skating", "Puck Handling", "Passing", "Shooting", "Checking"];

const Skating = () => (
  <ul>
    <li>Ready Stance</li>
    <li>Knees/Belly</li>
    <li>Edges</li>
    <li>Forward Stride</li>
    <li>Forward Starts</li>
    <li>Hockey Stop</li>
    <li>Sharp Turns</li>
    <li>Forward Crossovers</li>
    <li>Backwards Ready Stance</li>
    <li>Backwards Stride</li>
    <li>Backwards Starts</li>
    <li>Backwards Stops</li>
    <li>Backwards Crossover</li>
    <li>Pivot</li>
  </ul>
);

const PuckHandling = () => (
  <ul>
    <li>Front</li>
    <li>Side</li>
    <li>Wide</li>
    <li>Toe Drag</li>
    <li>Feet</li>
    <li>Puck Protection</li>
    <li>Fakes/Dekes</li>
    <li>Face Off</li>
  </ul>
);

const Passing = () => (
  <ul>
    <li>Sweep Pass</li>
    <li>Receive Pass</li>
    <li>Saucer Pass</li>
  </ul>
);

const Shooting = () => (
  <ul>
    <li>Wrist Shot</li>
    <li>Backhand Shot</li>
    <li>Snap Shot</li>
    <li>Flip Shot</li>
    <li>One Timer</li>
  </ul>
);

const Checking = () => (
  <ul>
    <li>Stick Lift</li>
    <li>Stick Press</li>
    <li>Stick Poke</li>
    <li>Stick Sweep</li>
    <li>Stick Tap</li>
    <li>Body Contact</li>
  </ul>
);

const Skills = ({ active, onClick }) => (
  <Layout>
    <section className="section">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div class="tabs is-toggle">
          <ul>
            {skills.map(skill => (
              <li key={skill} className={skill === active ? "is-active" : ""}>
                <a onClick={() => onClick(skill)}>{skill}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {active === "Skating" && <Skating />}
          {active === "Puck Handling" && <PuckHandling />}
          {active === "Passing" && <Passing />}
          {active === "Shooting" && <Shooting />}
          {active === "Checking" && <Checking />}
        </div>
      </div>
    </section>
  </Layout>
);

export default class SkillsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { active: skills[0] };
  }

  handleClick = skill => {
    this.setState({ active: skill });
  };

  render() {
    const { active } = this.state;

    return <Skills active={active} onClick={this.handleClick} />;
  }
}
