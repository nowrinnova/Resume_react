import React from "react";
import { IoIosDownload } from "react-icons/io";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Resume() {
  return (<>
    <Header/>
    <div className="resume-container bg-dark">
      <a
        role="button"
        className="btn btn-light resume-button"
        href="https://drive.google.com/file/d/12NAVQCYmqS6fXNkzTVy7AEgx282-WEBT/view?usp=drive_link"
        target="blank"
      >
        <IoIosDownload />
        <span>DOWNLOAD CV</span>
      </a>
    </div>
    <Footer/>
    </>
  );
}

export default Resume;
