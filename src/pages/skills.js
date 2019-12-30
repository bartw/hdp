import React, { Component } from "react";
import Layout from "../components/layout";
import Modal from "../components/modal";
import CollapsiblePanel from "../components/collapsible-panel";
import skills from "../data/skills";

const SkillDetail = ({ skill: { label, teachingPoints }, hideDetail }) => (
  <Modal title={label} hide={hideDetail}>
    <h2 className="subtitle">Teaching Points</h2>
    <ul>
      {teachingPoints &&
        teachingPoints.length &&
        teachingPoints.map(teachingPoint => (
          <li key={teachingPoint}>{teachingPoint}</li>
        ))}
    </ul>
  </Modal>
);

const Skills = ({ detail, showDetail, hideDetail }) => (
  <Layout>
    <section className="section">
      <div className="container">
        <h1 className="title">Skills</h1>
        {skills.map(({ id, label, items }) => (
          <div key={id} className="content">
            <CollapsiblePanel title={label}>
              <ul>
                {items.map(item => (
                  <li key={item.id}>
                    {item.teachingPoints && item.teachingPoints.length ? (
                      <a onClick={() => showDetail(item)}>{item.label}</a>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            </CollapsiblePanel>
          </div>
        ))}
      </div>
      {detail && <SkillDetail skill={detail} hideDetail={hideDetail} />}
    </section>
  </Layout>
);

export default class SkillsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { detail: null };
  }

  handleShowDetail = detail => {
    this.setState({ detail });
  };

  handleClearDetail = () => {
    this.setState({ detail: null });
  };

  render() {
    const { detail } = this.state;

    return (
      <Skills
        detail={detail}
        showDetail={this.handleShowDetail}
        hideDetail={this.handleClearDetail}
      />
    );
  }
}
