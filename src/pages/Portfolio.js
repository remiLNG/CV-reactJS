import React from "react";
import Navigation from "../components/Navigation";
import ProjectList from "../components/portfolio/ProjectList.js";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Navigation />
      <ProjectList/>
    </div>
  );
};

export default Portfolio;
