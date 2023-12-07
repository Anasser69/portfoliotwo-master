import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2023 - 2024"
          title="MERN Stack Dev"
          subTitle="Freelancing"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="2021 - 2022"
          title="Front-end Developer"
          subTitle="UP Work"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="2022 - 2023"
          title="Full stack"
          subTitle="Mostaqel"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2020 - 2024"
          title="Cairo high institue"
          subTitle="Egypt"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="2020 - 2022"
          title="Web Programming Courses"
          subTitle="Online"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="2022 - 2024"
          title="MERN Stack Developer"
          subTitle="Online"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
      </div>
    </div>
  );
};

export default Education;
