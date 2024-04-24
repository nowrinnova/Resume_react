import React from "react";
import Contract_footer from "../components/Contract_footer.jsx";
import Introduction from "./Introduction.jsx";
function Home() {
  return (
    <> 
      <div className="home-container-1 bg-dark">
        <div className="home-container-left">
          <div className="home-left-container">
            <h1>Hi There !</h1>
              <h1>I'm <span className="parple"> Nowrin Islam</span>  </h1>
          </div>
        </div>
        <div className="home-container-right ">
          <img
            className="home-container-right-img"
            src="./images/developer.png"
            alt=""
          />
        </div>
      </div>

      <Introduction/>
      <Contract_footer />
      
    </>
  );
}

export default Home;
