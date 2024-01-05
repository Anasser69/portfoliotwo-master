import React from "react";
import solve from "../../assets/solve.png";
import home from "../../assets/home.png";
import portfolio from "../../assets/portfolio.png";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import tikitalk from "../../assets/tikitalk.png";
import hoobank from "../../assets/hoobank.png";
import admin from "../../assets/admin.png";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full  md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <a href="https://solve3.netlify.app/">
            <ProjectsCard
              title="Solve"
              category="Website"
              image={solve}
              link=""
            />
          </a>

          <a href="https://decore69.netlify.app/">
            <ProjectsCard
              title="HomeDecore"
              category="Website"
              link=""
              image={home}
            />
          </a>


          <a href="https://tikitalk.netlify.app/">
            <ProjectsCard
              title="Tikitalk"
              category="Website"
              image={tikitalk}
              link=""
            />
          </a>

          <a href="https://hookbank69.netlify.app/">
            <ProjectsCard
              title="Hoobank"
              category="Website"
              image={hoobank}
              link=""
            />
          </a>

          <a href="https://admin69.netlify.app/">
            <ProjectsCard
              title="Admin DashBoard"
              category="Website"
              image={admin}
              link=""
            />
          </a>
          
          <a href="https://ahmednasserportfolio11.on.drv.tw/Portfolio/Port.html">
            <ProjectsCard
              title="Portfolio"
              category="Website"
              image={portfolio}
              link=""
            />
          </a>
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
