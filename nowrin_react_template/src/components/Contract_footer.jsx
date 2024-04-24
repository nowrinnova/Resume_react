import React from "react";
import { BsGithub } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
function Contract_footer() {
  return (
    <div className="text-bg-dark border-top">
      <div className="py-2  "  >
        <h1 className="display-5  text-white contract-header">Find Me On </h1>
        <h6 className="display-8  text-white contract-header-h6">Feel free to Connect with ME </h6>
          <div className="d-grid gap-2 d-sm-flex contract-header ">
            <a href="https://github.com/nowrinnova" target="_blank" rel="noopener noreferrer"
              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold rounded-circle"
            >
              <BsGithub />
            </a>
            <a
              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold rounded-circle "href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"
            >
               <CiLinkedin />
            </a>
            <a
              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold rounded-circle"  href="https://github.com/nowrinnova" target="_blank" rel="noopener noreferrer"
            >
             < SiGmail />
            </a>
          </div>
      </div>
      </div>
    
  );
}

export default Contract_footer;
