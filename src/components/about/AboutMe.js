import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Ahmed Nasser</h2>
          <p className="text-base leading-6 ">
            Software Engineer from Egypt , Cairo. professional in the field of
            software development. They bring a foundational understanding of
            computer science principles, programming languages, and software
            engineering practices, often acquired through academic studies,
            internships, or bootcamp programs.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          {/* <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            22
          </li> */}
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Egypt
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Cairo, Egypt
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
