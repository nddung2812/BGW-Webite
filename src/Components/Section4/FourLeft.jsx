import { useLayoutEffect } from "react";
import "./FourLeft.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { RightPartner } from "./RightPartner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faImage,
  faClockRotateLeft
} from '@fortawesome/free-solid-svg-icons';

export const FourLeft = ({ divValue, setActivated }) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  const handleClick = () => {
    setActivated(false);
  }

  const moveToSection5 = () => {
    gsap.to(window, {
      duration: 1.5,
      ease: "slow(0.7, 0.7, false)",
      scrollTo: {
        y: ".five",
      }
    })
  }

  // useLayoutEffect(() => {
  //   gsap.to('.four-left-ctn', {
  //     x: 0,
  //     opacity: 1,
  //     scrollTrigger: {
  //       trigger: '.three',
  //       start: "center top",
  //       scrub: true
  //     }
  //   })
  // }, [])

  const imageRotateRight = () => {
    gsap.to('#image-icon', {
      rotate: 360,
      duration: 5,
      ease: "slow"
    })
  }

  const resetImageRotation = () => {
    gsap.to('#image-icon', {
      rotate: 0,
      duration: 3,
    })
  }

  const clockRotateLeft = () => {
    gsap.to('#clock-icon', {
      rotate: -360,
      duration: 4,
    })
  }

  const resetClock = () => {
    gsap.to('#clock-icon', {
      rotate: 0,
      duration: 3,
    })
  }

  return (
    <div className="four-left-ctn">
      <div className="wholesale-experts">Wholesaling Experts</div>
      <RightPartner divValue={divValue}/>
      <div className="projects-btn">
        <div className="industry-projects" 
          onClick={handleClick}
          onMouseEnter={imageRotateRight} 
          onMouseLeave={resetImageRotation} 
        >
          <p>Our Projects</p>
          <FontAwesomeIcon id="image-icon" icon={faImage}/>
        </div>
        <div className="history-btn" 
          onClick={moveToSection5}
          onMouseEnter={clockRotateLeft} 
          onMouseLeave={resetClock}
        >
          <p>Our History</p>
          <FontAwesomeIcon 
            id="clock-icon" 
            icon={faClockRotateLeft}
          />
        </div>
      </div>
    </div>
  )
}
