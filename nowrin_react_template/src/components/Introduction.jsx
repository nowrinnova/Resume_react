import React from 'react'

function Introduction() {
  return (
    <div>
      <div className="home-container-1 bg-dark">
        <div className="home-container-left">
          <div className="home-left-container">
            <h1>  LET ME <span className='parple'>INTRODUCE</span> INTRODUCE MYSELF </h1>
              <p className='introduction-skill'>Proficient in <span className='parple-1'>HTML, CSS, and modern JavaScript</span>  </p>
              <p className='introduction-skill'>Experienced in building dynamic and responsive user interfaces using <span className='parple-1'> React </span>   </p>
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
  )
}

export default Introduction
