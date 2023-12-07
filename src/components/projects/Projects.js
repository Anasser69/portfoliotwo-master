import React from "react";
import solve from "../../assets/solve.png";
import home from "../../assets/home.png";
import portfolio from "../../assets/portfolio.png";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full  md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Solve"
            category="Website"
            image={solve}
            link="https://solve3.netlify.app/"
          />
          <ProjectsCard
            title="HomeDecore"
            category="Website"
            link="https://decore69.netlify.app/"
            image={home}
          />

          <ProjectsCard
            title="Portfolio"
            category="Website"
            image={portfolio}
            link="https://ahmednasserportfolio11.on.drv.tw/Portfolio/Port.html"
          />
          {/* <ProjectsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          /> */}
        </div>
        {/* <div className="px-6">
          <ProjectsCard
            title="Responsive website"
            category="E-commerce"
            image={workImgFour}
          />
          <ProjectsCard
            title="Grapic Design"
            category="Design"
            image={workImgSix}
          />
          <ProjectsCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          />
          <ProjectsCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgSeven}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
