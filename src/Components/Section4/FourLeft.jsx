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

export const FourLeft = ({ divValue, setActivated, five }) => {
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
        y: five.current,
      }
    })
  }

  useLayoutEffect(() => {
	  let ctx = gsap.context(() => {
      gsap.to('.four-left-ctn', {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.three',
          start: "bottom bottom",
          stop: "bottom center",
          scrub: 1
        }
      })
    })
    return () => ctx.revert()  
  }, [])

  return (
    <div className="four-left-ctn">
      <div className="wholesale-experts">Wholesaling Experts</div>
      <RightPartner divValue={divValue}/>
      <div className="projects-btn">
        <div className="industry-projects" 
          onClick={handleClick}
        >
          <p>Our Projects</p>
          <FontAwesomeIcon id="image-icon" icon={faImage}/>
        </div>
        <div className="history-btn" 
          onClick={moveToSection5}
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
