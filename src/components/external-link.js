import React from "react";

const ExternalLink = ({ href, className, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    aria-label={label}
  >
    {children}
  </a>
);

export default ExternalLink;
