import {useState} from 'react';

import "./BurgerMenu.css";
import { GITButton } from './GITButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export const BurgerMenu = ({
  movetoSection2,
  movetoSection3,
  movetoSection4,
  movetoSection5,
  movetoSection6,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    {isOpen ?
      <div className="menu-btn" onClick={handleClick}>
        <div className="menu-btn__burger"></div>
        <div className="info-icon">
            <FontAwesomeIcon icon={faInfoCircle} size="lg" />
          </div>
      </div> 
     : 
     <div className='menu-btn-ctn'>
        <GITButton 
             movetoSection2={movetoSection2}
             movetoSection3={movetoSection3}
             movetoSection4={movetoSection4}
             movetoSection5={movetoSection5}
             movetoSection6={movetoSection6}
             handleClick={handleClick}
        />
        <div className="open menu-btn-clicked" onClick={handleClick}>
          <div className="menu-btn__burger"></div>
          <div className="info-icon">
            <FontAwesomeIcon id="" icon={faInfoCircle} size="lg" />
          </div>
        </div>
      </div>
    }
    </>
 )
}


