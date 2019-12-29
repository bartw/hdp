import React, { Component } from "react";
import Layout from "../components/layout";
import skills from "../data/skills";

const SkillDetail = ({ skill: { label, teachingPoints }, hideDetail }) => (
  <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{label}</p>
        <button className="delete" aria-label="close" onClick={hideDetail}>
          >
        </button>
      </header>
      <section className="modal-card-body">
        <h2 className="subtitle">Teaching Points</h2>
        <ul>
          {teachingPoints &&
            teachingPoints.length &&
            teachingPoints.map(teachingPoint => (
              <li key={teachingPoint}>{teachingPoint}</li>
            ))}
        </ul>
      </section>
      <footer className="modal-card-foot">
        <button className="button" onClick={hideDetail}>
          Close
        </button>
      </footer>
    </div>
  </div>
);

const Skills = ({ active, detail, activate, showDetail, hideDetail }) => (
  <Layout>
    <section className="section">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="tabs is-toggle">
          <ul>
            {skills.map(({ id, label }) => (
              <li key={id} className={id === active.id ? "is-active" : ""}>
                <a onClick={() => activate(id)}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {active.items.map(skill => (
              <li key={skill.id}>
                <a onClick={() => showDetail(skill)}>{skill.label}</a>
              </li>
            ))}
          </ul>
        </div>
        {detail && <SkillDetail skill={detail} hideDetail={hideDetail} />}
      </div>
    </section>
  </Layout>
);

export default class SkillsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { active: skills[0], detail: null };
  }

  handleActivate = idToActivate => {
    const skillToActivate = skills.find(({ id }) => id === idToActivate);

    if (skillToActivate) {
      this.setState({ active: skillToActivate });
    }
  };

  handleShowDetail = detail => {
    this.setState({ detail });
  };

  handleClearDetail = () => {
    this.setState({ detail: null });
  };

  render() {
    const { active, detail } = this.state;

    return (
      <Skills
        active={active}
        detail={detail}
        activate={this.handleActivate}
        showDetail={this.handleShowDetail}
        hideDetail={this.handleClearDetail}
      />
    );
  }
}
