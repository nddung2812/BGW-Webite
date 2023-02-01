import "./ThreeLeft.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const ThreeLeft = () => {
    gsap.registerPlugin(ScrollToPlugin);
    const movetoSection3 = () => {
      gsap.to(window,{
        duration: 1.5,
        ease: "slow(0.7, 0.7, false)",
        scrollTo: {
          y: ".four",
        }
      })
    }

    useEffect(() => {
      gsap.to("#arrow3", {
        x: 6,
        repeat: -1,
        duration: 1,
        yoyo: true,
        opacity: 1
      })
    
    },[])
  return (
    <div className='three-left-ctn'>
        <div className="doing-business-heading">
            <h1>Doing Business With Us</h1>
        </div>
        <div className="business-text">
            <p>Whether you are a sole tradesman or the procurement officer for a large multinational, we take the time to 
            understand your needs so we can provide personalised service, effective and safe solutions, and business 
            benefits. 
            </p>
        </div>
        <div className="supply-btn" onClick={movetoSection3}>
            <p>Our Experience</p>
            <FontAwesomeIcon id="arrow3" icon={faArrowRight} size="sm" />
        </div>
    </div>
  )
}
