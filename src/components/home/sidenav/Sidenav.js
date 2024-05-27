import React from "react";
import SidenavTitle from "./SidenavTitle";

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog Page</li>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Nike Store</li>
        <li className="sidenavLi">Solve</li>
        <li className="sidenavLi">Blog</li>
        <li className="sidenavLi">Ai Assist Mobile</li>
        <li className="sidenavLi">Backend Setup</li>
        <li className="sidenavLi">Brain wave</li>
      </ul>
      <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi">UI & UX Conference at Lviv 2024</li>
        <li className="sidenavLi">How to become a creative designer</li>
        <li className="sidenavLi">
          Designers thoughts about mobile UI templates
        </li>
        <li className="sidenavLi">Designer Conference at Florida, USA 2020</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">01095192378</li>
        <li className="sidenavLi">ahmed.nasse981@gmail.com</li>
      </ul>
    </div>
  );
};

export default Sidenav;
