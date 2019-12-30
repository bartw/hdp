import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default class CollapsiblePanel extends Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };
  }

  toggle = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };

  render() {
    const { title, children } = this.props;
    const { expanded } = this.state;

    return (
      <div className="panel is-primary">
        <header className="panel-heading">
          <a className="has-text-white" onClick={this.toggle}>
            <div className="media">
              <div className="media-content">{title}</div>
              <div className="media-right">
                {!expanded && <FontAwesomeIcon icon={faAngleDown} fixedWidth />}
                {expanded && <FontAwesomeIcon icon={faAngleUp} fixedWidth />}
              </div>
            </div>
          </a>
        </header>
        <div className="panel-block">{expanded && children}</div>
      </div>
    );
  }
}
