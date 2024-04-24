import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Professional_skillset from "../components/Professional_skillset";
import Header from "../components/Header";
import Footer from "../components/Footer";
function About() {
  return (
  <><Header/>
    <div className="about-container bg-dark" style={{ height: "100vh" }}>
      <div className="container-left">
        <div
          className="cart-body"
          style={{  marginLeft: "5%" }}
        >
          <h1 style={{ fontSize: "50px", textAlign: "center" }}>
            Know Who <strong className="parple">I'M</strong>
          </h1>
          <p
            className="cart-body-p"
            style={{ textAlign: "justify", color: "white" }}
          >
            Hi ,Everyone. I am <span className="parple">Nowrin Islam</span> from{" "}
            <span className="parple"> Dhaka,Bangladesh </span>
            <br />I am currently finished my Bsc from{" "}
            <span className="parple">
              American International University-Bangladesh
            </span>
            <br />
            Depertment of{" "}
            <span className="parple">Computer Science Engineerning</span> <br />
            Apart from Coading , some other activities i like to do!
          </p>
          <ul className="cart-body-p" style={{listStyle:"none"}}>
            <li >
              <FaArrowCircleRight />
              Reading Book
            </li>
            <li>
              <FaArrowCircleRight />
              travelling
            </li>
          </ul>
        </div>

       
      </div>
      <div className="container-right">
        <img
          src="./images/about_img.png"
          alt=""
          style={{ height: "70%", width: "80%", borderRadius: "5%" }}
        />
      </div>
    </div>
    <Professional_skillset/>
    <Footer/>
    </>
  );
}

export default About;
