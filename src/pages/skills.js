import React, { Component } from "react";
import Layout from "../components/layout";
import skills from "../data/skills";

const Skills = ({ activeSkill, onClick }) => (
  <Layout>
    <section className="section">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="tabs is-toggle">
          <ul>
            {skills.map(({ id, label }) => (
              <li key={id} className={id === activeSkill.id ? "is-active" : ""}>
                <a onClick={() => onClick(id)}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {activeSkill.items.map(({ id, label }) => (
              <li key={id}>{label}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default class SkillsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { activeSkill: skills[0] };
  }

  handleClick = idToActivate => {
    const skillToActivate = skills.find(({ id }) => id === idToActivate);

    if (skillToActivate) {
      this.setState({ activeSkill: skillToActivate });
    }
  };

  render() {
    const { activeSkill } = this.state;

    return <Skills activeSkill={activeSkill} onClick={this.handleClick} />;
  }
}
