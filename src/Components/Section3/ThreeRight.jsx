import { useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './ThreeRight.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCertificate,
  faTruck,
  faCartShopping,
  faShare,
  faLaptopCode,
  faLightbulb,
  faFileShield,
  faGlobe,
  faLink,
  faChartColumn,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

export const ThreeRight = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [activated, setActivated] = useState(true);
  const handleClickrightWheel = () => {
    setActivated(!activated);
  }
  let menuClass = activated ? "right-menu" : "right-menu activated";

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".wheel-right", {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".two",
          start: "bottom bottom",
          stop: "bottom center",
          scrub: 1,
        }
      })
    })
    return () => ctx.revert()
  },[]);


  return (
    <div className="three-right-ctn">
      <div className="wheel-right">
          <div className={menuClass} onClick={handleClickrightWheel}>
            <div className="right-toggle">
              <FontAwesomeIcon id="handshake" icon={faHandshake} size="5x"  />
              <h1>We simplify your life</h1>
            </div>
            <li className="right-li1">
              <div className="solution-btn">
                <FontAwesomeIcon icon={faCertificate} color="#d13939"/>  
                <p>Exceptional Service</p>
              </div>
            </li>
            <li className="right-li2">
              <div className="solution-btn">
                <FontAwesomeIcon icon={faTruck} color="#d13939"/>  
                <p>Supplier Consolidation</p>
              </div>
            </li>
            <li className="right-li3">
              <div className="solution-btn">
                <FontAwesomeIcon icon={faCartShopping} color="#d13939"/>  
                <p>Simplified Procurement</p>
              </div>
            </li>
            <li className="right-li4">
              <div className="solution-btn">
                <FontAwesomeIcon icon={faShare} color="#d13939"/>  
                <p>National Distribution Network</p>
              </div>
            </li>
            <li className="right-li5">
              <div className="solution-btn">
                <FontAwesomeIcon icon={faLaptopCode} color="#d13939"/>  
                <p>E-Commerce Capability</p>
              </div>
            </li>
            <li className="right-li6">
              <div className="solution-btn">
                <FontAwesomeIcon icon={faLightbulb} color="#d13939"/>  
                <p>Sustainability and Innovation</p>
              </div>
            </li>
            <li className="right-li7">
              <div className="solution-btn">
                <FontAwesomeIcon icon={faLink} color="#d13939"/>  
                <p>Sophisticated Supply Chain Solutions</p>
              </div>
            </li>
            <li className="right-li8">
              <div className="solution-btn">
                <FontAwesomeIcon icon={faGlobe} color="#d13939"/>  
                <p>Global Expertise</p>
              </div>
            </li>
            <li className="right-li9">
              <div className="solution-btn">
                <FontAwesomeIcon icon={faFileShield} color="#d13939"/>  
                <p>Quality and Safety</p>
              </div>
            </li>
            <li className="right-li10">
              <div className="solution-btn">
                <FontAwesomeIcon icon={faChartColumn} color="#d13939"/>  
                <p>Customised Reporting</p>
              </div>
            </li>
          </div> 
      </div>
    </div>
  )
}
