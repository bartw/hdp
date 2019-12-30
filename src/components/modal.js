import React, { Component } from "react";

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  handleKeyPress = event => {
    // Escape
    if (event.keyCode === 27) {
      const { hide } = this.props;
      hide();
    }
  };

  render() {
    const { title, children, hide } = this.props;

    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <button className="delete" aria-label="close" onClick={hide}>
              >
            </button>
          </header>
          <section className="modal-card-body">{children}</section>
          <footer className="modal-card-foot">
            <button className="button" onClick={hide}>
              Close
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
