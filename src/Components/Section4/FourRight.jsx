import "./FourRight.css";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faIndustry,
  faCity, 
  faBuilding, 
  faShield, 
  faFire, 
  faHelmetSafety, 
  faPlugCircleBolt, 
  faWheatAlt 
} from '@fortawesome/free-solid-svg-icons';

export const FourRight = ({ setDivValue }) => {

  const unClicked = "industry";
  const clicked = "industry clicked";

  const [bgColor1, setBgColor1] = useState("industry clicked");
  const [bgColor2, setBgColor2] = useState("industry");
  const [bgColor3, setBgColor3] = useState("industry");
  const [bgColor4, setBgColor4] = useState("industry");
  const [bgColor5, setBgColor5] = useState("industry");
  const [bgColor6, setBgColor6] = useState("industry");
  const [bgColor7, setBgColor7] = useState("industry");
  const [bgColor8, setBgColor8] = useState("industry");
  
  const handleClick = (e) => {
    let newDivValue =  e.target.getAttribute('value') || "industrial";
    setDivValue(newDivValue)
    
    
    if (newDivValue === "industrial") {
      setBgColor1(clicked)
      setBgColor2(unClicked)
      setBgColor3(unClicked)
      setBgColor4(unClicked)
      setBgColor5(unClicked)
      setBgColor6(unClicked)
      setBgColor7(unClicked)
      setBgColor8(unClicked)
    }
    if (newDivValue === "infrastructure") {
      setBgColor1(unClicked)
      setBgColor2(clicked)
      setBgColor3(unClicked)
      setBgColor4(unClicked)
      setBgColor5(unClicked)
      setBgColor6(unClicked)
      setBgColor7(unClicked)
      setBgColor8(unClicked)
    }
    if (newDivValue === "commercial") {
      setBgColor1(unClicked)
      setBgColor2(unClicked)
      setBgColor3(clicked)
      setBgColor4(unClicked)
      setBgColor5(unClicked)
      setBgColor6(unClicked)
      setBgColor7(unClicked)
      setBgColor8(unClicked)
    }

    if (newDivValue === "defence") {
      setBgColor1(unClicked)
      setBgColor2(unClicked)
      setBgColor3(unClicked)
      setBgColor4(clicked)
      setBgColor5(unClicked)
      setBgColor6(unClicked)
      setBgColor7(unClicked)
      setBgColor8(unClicked)
    }

    if (newDivValue === "oilGas") {
      setBgColor1(unClicked)
      setBgColor2(unClicked)
      setBgColor3(unClicked)
      setBgColor4(unClicked)
      setBgColor5(clicked)
      setBgColor6(unClicked)
      setBgColor7(unClicked)
      setBgColor8(unClicked)
    }

    if (newDivValue === "mining") {
      setBgColor1(unClicked)
      setBgColor2(unClicked)
      setBgColor3(unClicked)
      setBgColor4(unClicked)
      setBgColor5(unClicked)
      setBgColor6(clicked)
      setBgColor7(unClicked)
      setBgColor8(unClicked)
    }

    if (newDivValue === "renewables") {
      setBgColor1(unClicked)
      setBgColor2(unClicked)
      setBgColor3(unClicked)
      setBgColor4(unClicked)
      setBgColor5(unClicked)
      setBgColor6(unClicked)
      setBgColor7(clicked)
      setBgColor8(unClicked)
    }

    if (newDivValue === "agriculture") {
      setBgColor1(unClicked)
      setBgColor2(unClicked)
      setBgColor3(unClicked)
      setBgColor4(unClicked)
      setBgColor5(unClicked)
      setBgColor6(unClicked)
      setBgColor7(unClicked)
      setBgColor8(clicked)
    }
  };


  return (
    <div className="four-right-ctn">
      <div className="industry-heading">
        <h1>Intergrated Products and Services</h1>
      </div>
      <div className="industry-text">
        <p>BGW Group has a diversified group of companies that provide a wide range of quality, cost-effective 
        electrical, plumbing, security and technology solutions. We simplify your life by having everything you 
        need in one place, which reduces overall costs and improves efficiency.</p>
      </div>
      <div className="main-industries">
        <h2>Main industries</h2>
      </div>
      <div className="industries-ctn">
        <div className={bgColor1}>
          <div className="industry-top-layer" value="industrial" onClick={handleClick}></div>
          <FontAwesomeIcon  icon={faIndustry} />
        </div>
        <div className={bgColor2}>
          <div className="industry-top-layer" value="infrastructure" onClick={handleClick}></div>
          <FontAwesomeIcon icon={faCity}  />
        </div>
        <div className={bgColor3}>
          <div className="industry-top-layer" value="commercial" onClick={handleClick} ></div>
          <FontAwesomeIcon icon={faBuilding} />
        </div>
        <div className={bgColor4}>
          <div className="industry-top-layer" value="defence" onClick={handleClick} ></div>
          <FontAwesomeIcon icon={faShield} />
        </div>
        <div className={bgColor5}>
          <div className="industry-top-layer" value="oilGas" onClick={handleClick} ></div>
          <FontAwesomeIcon icon={faFire} />
        </div>
        <div className={bgColor6}>
          <div className="industry-top-layer" value="mining" onClick={handleClick} ></div>
          <FontAwesomeIcon icon={faHelmetSafety} />
        </div>
        <div className={bgColor7}>
          <div className="industry-top-layer" value="renewables" onClick={handleClick} ></div>
          <FontAwesomeIcon icon={faPlugCircleBolt} />
        </div>
        <div className={bgColor8}>
          <div className="industry-top-layer" value="agriculture" onClick={handleClick} ></div>
          <FontAwesomeIcon icon={faWheatAlt} />
        </div>
        </div>
    </div>
  )
}
