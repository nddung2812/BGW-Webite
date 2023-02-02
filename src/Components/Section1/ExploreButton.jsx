import { useEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./ExploreButton.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const ExploreButton = ({ movetoSection2 }) => {

useEffect(() => {
  gsap.to("#arrow1", {
    x: 6,
    repeat: -1,
    duration: 1,
    yoyo: true,
    opacity: 1
  })

},[])

  return (
    <div className="explore-container" >
      <div className="find-out-btn" onClick={movetoSection2}>
        <p>Find out more</p> 
        <FontAwesomeIcon id="arrow1" icon={faArrowRight} size="sm" /></div>
    </div>  
  )
}



