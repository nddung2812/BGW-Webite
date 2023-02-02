import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./ExploreButton.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const ExploreButton = ({two}) => {
  gsap.registerPlugin(ScrollToPlugin);

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
      <div className="find-out-btn">
        <p>Find out more</p> 
        <FontAwesomeIcon id="arrow1" icon={faArrowRight} size="sm" /></div>
    </div>  
  )
}



