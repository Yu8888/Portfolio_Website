import React from "react";
import "./menu.scss";
import MenuItem from "./MenuItem";
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <MenuItem content="intro" setMenuOpen={setMenuOpen} />
        <MenuItem content="projects" setMenuOpen={setMenuOpen} />
        <MenuItem content="interests" setMenuOpen={setMenuOpen} />
        <MenuItem content="testimonials" setMenuOpen={setMenuOpen} />
        <MenuItem content="contact" setMenuOpen={setMenuOpen} />
      </ul>
    </div>
  );
}
