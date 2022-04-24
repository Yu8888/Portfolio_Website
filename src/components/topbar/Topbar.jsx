import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={"topbar " + (menuOpen && "active")}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Jack.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+0272592796</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>cooperationjackli@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
