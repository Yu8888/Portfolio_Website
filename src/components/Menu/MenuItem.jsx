import React from "react";

export default function MenuItem({ content, setMenuOpen }) {
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a href={`#${content}`}>
        {content.charAt(0).toUpperCase() + content.slice(1)}
      </a>
    </li>
  );
}
