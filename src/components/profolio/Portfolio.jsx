import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { webPortfolio, mobilePortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="projects">
      <h1>Projects</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            key={index}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, index) => (
          <div className="item" key={index}>
            <div className="img">
              <img src={d.img} alt="" onClick={() => window.open(d.url)} />
              <h3>{d.title}</h3>
            </div>
            <div className="description">{d.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
