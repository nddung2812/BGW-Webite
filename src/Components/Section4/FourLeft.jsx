import { useLayoutEffect, useState } from "react";
import LogoLinks from '../JSONData/LogoLinks';
import "./FourLeft.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { RightPartner } from "./RightPartner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faIndustry,
  faCity, 
  faBuilding, 
  faShield, 
  faFire, 
  faHelmetSafety, 
  faPlugCircleBolt, 
  faWheatAlt,
  faXmark 
} from '@fortawesome/free-solid-svg-icons';


export const FourLeft = ({ activated, setActivated }) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const handleCloseBtnClick = () => {
    setActivated(!activated)
  }

  useLayoutEffect(() => {
    
    let mm = gsap.matchMedia();
    let ctx = gsap.context(() => {
      mm.add(
        "(min-width: 678px)", () => {
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
    })
    return () => ctx.revert()  
  }, [])

  const unClicked = "industry";
  const clicked = "industry clicked";
  const [industry, setIndustry] = useState(unClicked);
  const [divValue, setDivValue] = useState("industrial");

  const handleClick = (i) => {
    setIndustry(i)
    setDivValue(i)
  };

  return (
    <div className="four-left-ctn">
      <div className="industries-heading">
        <h2>Main Industries</h2>
        <div className="close-industry-btn" onClick={handleCloseBtnClick}>
          <div className="xmark">
            <FontAwesomeIcon icon={faXmark}  />
          </div>
        </div>
      </div>
  

      <div className="industries-ctn">
          <div className={`${industry === "industrial" ? clicked : unClicked}`}>
            <div 
              className="industry-top-layer" 
              onClick={() => handleClick("industrial")}>
            </div>
            <FontAwesomeIcon  icon={faIndustry} />
          </div>


          <div className={`${industry === "commercial" ? clicked : unClicked}`}>
            <div 
              className="industry-top-layer" 
              onClick={() => handleClick("commercial")} >
            </div>
            <FontAwesomeIcon icon={faBuilding} />
          </div>

          <div className={`${industry === "infrastructure" ? clicked : unClicked}`}>
            <div 
              className="industry-top-layer" 
              onClick={() => handleClick("infrastructure")}
            >
            </div>
            <FontAwesomeIcon icon={faCity}  />
          </div>

          <div className={`${industry === "defence" ? clicked : unClicked}`}>
            <div 
              className="industry-top-layer" 
              value="defence" 
              onClick={() => handleClick("defence")} 
            >
            </div>
            <FontAwesomeIcon icon={faShield} />
          </div>
          <div className={`${industry === "oilGas" ? clicked : unClicked}`}>
            <div 
              className="industry-top-layer" 
              onClick={() => handleClick("oilGas")} >

            </div>
            <FontAwesomeIcon icon={faFire} />
          </div>
          <div className={`${industry === "agriculture" ? clicked : unClicked}`}>
            <div 
              className="industry-top-layer" 
              value="agriculture" 
              onClick={() => handleClick("agriculture")} >

              </div>
            <FontAwesomeIcon icon={faWheatAlt} />
          </div>
          <div className={`${industry === "mining" ? clicked : unClicked}`}>
            <div 
              className="industry-top-layer" 
              value="mining" 
              onClick={() => handleClick("mining")} >

              </div>
            <FontAwesomeIcon icon={faHelmetSafety} />
          </div>
          <div className={`${industry === "renewables" ? clicked : unClicked}`}>
            <div 
              className="industry-top-layer" 
              onClick={() => handleClick("renewables")} ></div>
            <FontAwesomeIcon icon={faPlugCircleBolt} />
          </div>
      </div>
      {LogoLinks.map((item, i) => { 
        return ( 
          divValue === item.name && 
          <div className="industry-name" key={i}>
            <h2>{item.industry}</h2>
          </div>)
        })}
      <RightPartner divValue={divValue}/>
    </div>
  )
}
