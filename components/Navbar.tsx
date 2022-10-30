import React from 'react'
import LOGO from "../public/donut.gif"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram  } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-logo">
          <Image src={LOGO} alt="LOGO" width={50} />
        </div>
        <div className="navbar-media">
          <div className="one">
            <a href="/work">
              Work
            </a>
            <a href="/about">
              About
            </a>
          </div>
          <div className="two">
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </div>
  )
}

export default Navbar