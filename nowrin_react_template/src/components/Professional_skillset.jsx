import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiVisualstudio } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { GrWindows } from "react-icons/gr";

function Professional_skillset() {
  return (
    <div className="professinal-skillset bg-dark">
      <div className="professional-skillset-container">
        <h1 style={{ textAlign: "center", fontSize: "70px" }}>
          {" "}
          Professional <span className="parple">Skillset</span>{" "}
        </h1>
        <div className="skillset-container">
          <div className="skillset-box">
            <IoLogoJavascript />
          </div>
          <div className="skillset-box">
            <FaReact />
          </div>
          <div className="skillset-box">
            <FaLaravel />
          </div>
          <div className="skillset-box">
            <IoLogoHtml5 />
          </div>
        </div>
        <div
          className="skillset-container"
          style={{ justifyContent: "space-evenly" }}
        >
          <div className="skillset-box">
            <FaCss3 />
          </div>
          <div className="skillset-box">
            <FaGithub />
          </div>
          <div className="skillset-box">
            <SiVite />
          </div>
        </div>
        <h1
          style={{ textAlign: "center", fontSize: "70px", marginTop: "27vh" }}
        >
          {" "}
          <span className="parple">Tools </span> I Use{" "}
        </h1>
        <div
          className="skillset-container"
          style={{ justifyContent: "space-evenly" }}
        >
          <div className="skillset-box">
            <GrWindows />{" "}
          </div>
          <div className="skillset-box">
            <SiVisualstudio />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professional_skillset;
