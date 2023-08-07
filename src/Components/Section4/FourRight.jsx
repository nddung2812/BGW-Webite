import "./FourRight.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  faClockRotateLeft
} from '@fortawesome/free-solid-svg-icons';


export const FourRight = ({ movetoSection5 }) => {
  gsap.registerPlugin(ScrollToPlugin);

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
      <div className="projects-btn">
        <div className="history-btn" 
          onClick={movetoSection5}
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
