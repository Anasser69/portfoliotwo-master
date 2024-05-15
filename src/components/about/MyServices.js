import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="We offer custom web application development, responsive design, and frontend and backend development services tailored to your business needs."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Specializing in e-commerce solutions, CMS development, API integration, and quality assurance testing, we ensure high-performance, reliable web solutions."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Crafting custom mobile applications with intuitive user interfaces and seamless experiences, tailored precisely to your business requirements."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="Elevate your online visibility and drive organic traffic with our comprehensive SEO services, including keyword research, on-page optimization, and link building strategies."
      />
    </div>
  );
};

export default MyServices;
