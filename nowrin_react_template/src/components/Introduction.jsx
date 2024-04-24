import React from "react";
import { IoFlowerOutline } from "react-icons/io5";
function Introduction() {
  return (
    <div>
      <div className="home-container-1 bg-dark">
        <div className="home-container-left">
          <div className="home-left-container">
            <h1>
              {" "}
              LET ME <span className="parple">INTRODUCE</span> INTRODUCE MYSELF{" "}
            </h1>
            <p
              className="introduction-skill "
              style={{
                textAlign: "start",
                textAlign: "start",
                marginTop: "20px",
              }}
            >
             I always like to learn about new technologies and learn about them <IoFlowerOutline />
            </p>
            <br />
            <p className="introduction-skill " style={{ textAlign: "start" }}>
              Proficient in{" "}
              <span className="parple-1">HTML, CSS, and modern JavaScript</span>{" "}
            </p>{" "}
            <br />
            <p
              className="introduction-skill "
              style={{ textAlign: "start", marginTop: "10px" }}
            >
              I like to build the dynamic and responsive user interface using{" "}
              <span
                className="parple-1
             "
              >
                Modern JavaScript and Framework
              </span>{" "}
              like <span className="parple-1"> React </span> and {" "}
              <span className="parple-1">Laravel</span>
            </p>
            
          </div>
        </div>
        <div className="home-container-right ">
          <img
            className="introduction-container-right-img"
            src="./images/hacker.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
