import React from "react";
import { TLink } from "./types";

const Link: React.FC<TLink> = ({
  href,
  className,
  children,
  handleClick
}): JSX.Element => (
  <a href={href} className={className} onClick={handleClick}>
    {children}
  </a>
);

export default Link;
