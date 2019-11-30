import React from "react";
import ExternalLink from "../components/external-link";

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>Haskey Development Program</strong> by{" "}
        <ExternalLink href="https://bartwijnants.be" label="Bart Wijnants">
          Bart Wijnants
        </ExternalLink>
        . Everything is licensed{" "}
        <ExternalLink
          href="https://github.com/bartw/hdp/blob/master/LICENSE"
          label="MIT"
        >
          MIT
        </ExternalLink>
        . Find the code at{" "}
        <ExternalLink href="https://github.com/bartw/hdp" label="GitHub">
          GitHub
        </ExternalLink>
        .
      </p>
    </div>
  </footer>
);

export default Footer;
