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
    ScrollTrigger.create({
      trigger: ".three",
      start: "top 40%",
      endTrigger: ".four",
      end: "top 70%",
      onEnter: () => setActivated(!activated),
      onEnterBack: () => setActivated(!activated),
      onLeave: () => setActivated(activated),
      onLeaveBack: () => setActivated(activated),
    })
  },[])

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        gsap.to(".wheel-right", {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".three",
            start: "top 90%",
            end: "top 15%",
            scrub: 1,
          }
        })
    })
    return () => ctx.revert()
  },[]);

  const threeData = [
    {
      icon: <FontAwesomeIcon icon={faCertificate} />,
      text: "Exceptional Service" 
    },
    {
      icon: <FontAwesomeIcon icon={faTruck} />,
      text: "Supplier Consolidation" 
    },
    {
      icon: <FontAwesomeIcon icon={faCartShopping} />,
      text: "Simplified Procurement" 
    },
    {
      icon: <FontAwesomeIcon icon={faShare} />,
      text: "National Distribution Network" 
    },
    {
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      text: "E-Commerce Capability" 
    },
    {
      icon: <FontAwesomeIcon icon={faLightbulb} />,
      text: "Sustainability and Innovation" 
    },
    {
      icon: <FontAwesomeIcon icon={faLink} />,
      text: "Sophisticated Supply Chain Solutions" 
    },
    {
      icon: <FontAwesomeIcon icon={faGlobe} />,
      text: "Global Expertise" 
    },
    {
      icon: <FontAwesomeIcon icon={faFileShield} />,
      text: "Quality and Safety" 
    },
    {
      icon: <FontAwesomeIcon icon={faChartColumn} />,
      text: "Customised Reporting" 
    },
  ]

  return (
    <div className="three-right-ctn">
      <div className="wheel-right">
          <div className={menuClass} onClick={handleClickrightWheel}>
            <div className="right-toggle">
              <FontAwesomeIcon id="handshake" icon={faHandshake} size="5x"  />
              <h1>We simplify your life</h1>
            </div>
            {threeData.map((item, i) => {
              return (
                <li className={"right-li" + Number(i+1)} key={i}>
                  <div className="solution-btn">
                    {item.icon}
                    <p>{item.text}</p>
                  </div>
                </li>
              )
            })}
          </div> 
      </div>
    </div>
  )
}
