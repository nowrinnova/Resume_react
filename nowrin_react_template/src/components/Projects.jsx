import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Projects() {
  return (
    <><Header/>
      <div className="projects-container bg-dark">
        <div className=" projects-heading">
          <h1>
            My Reacent <span className="parple">Works</span>
          </h1>
          <p
            style={{
              fontSize: "25px",
              color: "white",
              padding: "20px",
            }}
          >
            {" "}
            Will Published soon
          </p>
        </div>
        <div className="projects-body"></div>
      </div>
      <Footer/>
    </>
  );
}

export default Projects;
