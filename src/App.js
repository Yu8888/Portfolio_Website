import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Profolio from "./components/profolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Works from "./components/works/Works";
import "./app.scss";
import Menu from "./components/Menu/Menu";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState();
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Profolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
