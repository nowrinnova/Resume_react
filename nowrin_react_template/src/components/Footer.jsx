import React from "react";
import { BsGithub } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
function Footer() {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  my-0 text-bg-dark ">
        <div className="col-md-6 d-flex align-items-center justify-content-end ">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0  text-white  text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-white footer-text ">
           Copyright © 2024 AMF
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex footer-ul">
          <li className="ms-3">
            <a className="text-white " href="https://github.com/nowrinnova" target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-white " href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <CiLinkedin />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-white " href="#">
              <SiGmail />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
