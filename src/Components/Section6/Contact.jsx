import { useState } from 'react';
import './Contact.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHouse, 
    faPhone,
    faFax,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { ContactForm } from "./ContactForm";
import { GoogleMapComponent } from './GoogleMapComponent';
import { InternationalMap } from './InternationalMap';

export const Contact = () => {
    const year = new Date().getFullYear();
    const [selectedLocation, setSelectedLocation] = useState("Australia")

    const handleLocationChange = (location) => {
        setSelectedLocation(location)
    }

  return (
    <div className='contact-ctn'>
        <div className="contact-header">
            <div className="contact-heading">Contact us</div>
            <div className="contact-text">
                <p>For all BGW Group business and international inquiries please contact the BGW Group head office</p>
            </div>
        </div>
        <div className="contact-body">
            <div className="ct-body-left">

                <div className="ct-column visit-us">
                    <div className="ct-heading2">Visit us</div>
                    <div className="contact-address">
                    <FontAwesomeIcon icon={faHouse} className="contact-icon" size="sm" />  
                        <p>675 Macarthur Avenue Central, Pinkenba, QLD, Australia 4008</p>
                    </div>
                    <div className="contact-phone">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon" size="sm" />  
                        <p>+61 7 3890 0927</p>
                    </div>
                    <div className="contact-fax">
                        <FontAwesomeIcon icon={faFax} className="contact-icon" size="sm" />  
                        <p>+61 7 3907 8388</p>
                    </div>
                    <a href="mailto:enquiries@bgwgroup.com.au">
                        <div className="contact-email">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" size="sm" />  
                            <p>enquiries@bgwgroup.com.au</p>
                        </div>
                    </a>
                    <div className="contact-linkedin">
                        <a href="https://www.linkedin.com/company/bgw-group/mycompany/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" size="sm" />  
                            Linkedin
                        </a>
                    </div>
                </div>

                <div className="ct-column contact-form">
                    <div className="ct-heading2 ">Message us</div>
                    <ContactForm />
                </div>
            </div>
            <div className="ct-body-right">
                <div className="ct-heading2 toggle-location-ctn">
                    <p>Find us</p>
                </div>
                <div className="locations-ctn">
                <label className="switch">
                    <span className="slider">
                        <div 
                            className={`slider-location-btn ${selectedLocation === "Australia" ? "checked" : ""}`} 
                            onClick={() => handleLocationChange("Australia")}
                        >
                            Within Australia
                        </div>
                        <div 
                            className={`slider-location-btn ${selectedLocation === "International" ? "checked" : ""}`}
                            onClick={() => handleLocationChange("International")}
                        >
                            International Locations
                        </div>
                    </span>
                </label>

                {selectedLocation === "Australia" && <GoogleMapComponent /> } 
                {selectedLocation === "International" && <InternationalMap selectedLocation={selectedLocation}/>} 
               
                </div>
            </div>
        </div>
        <div className="contact-footer">
            <p>© The BGW Group - All Rights Reserved {year}</p>
            <div className='contact-links'>
                <Link to="terms-and-conditions">Terms and Conditions</Link>
                <Link to="privacy-policy">Privacy Policy</Link>
                <Link to="career">Career with Us</Link>
            </div>
        </div>
    </div>
  )
}
