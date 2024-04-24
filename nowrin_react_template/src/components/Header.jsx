import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa6";
import { IoNewspaperSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
    
      <div className="px-3 py-2 text-bg-dark border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="100"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small header-text-ul">
              <li >
                <Link to="/home" className="nav-link text-white">
                  <svg
                    className="bi d-block mx-auto mb-10"
                    width="24"
                    height="10"
                  >
                    <use xlinkHref="#home"></use>
                  </svg>
                  <IoHomeOutline />
                  Home
                </Link>
              </li>
              <li>
                <a href="/about" className="nav-link text-white">
                  <svg
                    className="bi d-block mx-auto mb-10"
                    width="24"
                    height="10"
                  >
                    <use xlinkHref="#speedometer2"></use>
                  </svg>
                  <IoMdPerson />
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="nav-link text-white">
                  <svg
                    className="bi d-block mx-auto mb-10"
                    width="24"
                    height="10"
                  >
                    <use xlinkHref="#table"></use>
                  </svg>
                  <FaLaptopCode />
                  Projects
                </a>
              </li>
              <li>
                <a href="/resume" className="nav-link text-white">
                  <svg
                    className="bi d-block mx-auto mb-10"
                    width="24"
                    height="10"
                  >
                    <use xlinkHref="#grid"></use>
                  </svg>
                  <IoNewspaperSharp />
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
