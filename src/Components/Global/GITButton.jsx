import "./GITButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAlt } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const GITButton = ({
  movetoSection2,
  movetoSection3,
  movetoSection4,
  movetoSection5,
  movetoSection6,
  handleClick
}) => {
  
  return (
    <div onClick={handleClick} className="burger-menu-btn-ctn ">
      <div onClick={movetoSection2} className="git-btn btn1">
        <FontAwesomeIcon id="burger-menu-icon" icon={faHandshakeAlt} size="lg" />
        <a className="partner-burger-btn">Partner for success</a>
      </div>
      <div onClick={movetoSection3} className="git-btn btn2">
        <FontAwesomeIcon id="burger-menu-icon" icon={faUsers} size="lg" />
        <a className="business-with-us-burger-btn">Business with us</a>
      </div>
      <div onClick={movetoSection4} className="git-btn btn3">
        <FontAwesomeIcon id="burger-menu-icon" icon={faScrewdriverWrench} size="lg" />
        <a className="products-services-burger-btn">Industries and experiences</a>
      </div>
      <div onClick={movetoSection5} className="git-btn btn4">
        <FontAwesomeIcon id="burger-menu-icon" icon={faClock} size="lg" />
        <a className="timeline-burger-btn">Timeline</a>  
      </div>
      <div onClick={movetoSection6} className="git-btn btn5">
        <FontAwesomeIcon id="burger-menu-icon" icon={faComment} size="lg" />
        <Link to="career" className="timeline-burger-btn">Careers</Link>
      </div>
      <div onClick={movetoSection6} className="git-btn btn0">
        <Link to="career" className="info-btn career-top-btn">Careers</Link>
        <FontAwesomeIcon id="burger-menu-icon" icon={faInfoCircle} size="lg" />
        <a onClick={movetoSection6}>Get in touch</a>
      </div>
    </div>
  )
}


