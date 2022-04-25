import React, { useRef, useEffect } from "react";
import "./intro.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { init } from "ityped";
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,

      strings: ["Web Developer", "Designer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Dennis.jpg" alt="Jack" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey! This is</h2>
          <h1>(Dennis)Liu Yu</h1>
          <h3>
            AUT Graduate, <span ref={textRef}></span>
          </h3>
        </div>
        <div className="down">
          <a href="#profolio">
            <ArrowDownwardIcon style={{ fontSize: 50 }} />
          </a>
        </div>
      </div>
    </div>
  );
}
