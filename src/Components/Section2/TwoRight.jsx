import './TwoRight.css';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const TwoRight = ({ movetoSection3 }) => {
    useEffect(() => {
      gsap.to("#arrow2", {
        x: 6,
        repeat: -1,
        duration: 1,
        yoyo: true,
        opacity: 1
      })
    
    },[])

  return (
    <div className='two-right-ctn'>
        <div className="right-partner-heading">
            <h1>The Right Partner For Success</h1>
        </div>
        <div className="right-partner-text">
            <p>We provide extensive expertise, innovative solutions, materials management, and quality 
            systems to effectively manage any project, large or small, across Australia and overseas. </p>
        </div>
        <div className="expert-btn" onClick={movetoSection3}>
            <p>Business With Us</p>
            <FontAwesomeIcon id="arrow2" icon={faArrowRight} size="sm" />
        </div>
    </div>
  )
}
