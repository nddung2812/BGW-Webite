import "./BGWlogo.css";
import Logo from "../../assets/images/bgwgroup.jpg";

export const BGWLogo = ({ movetoSection1 }) => {

  return (
    <div className='bgw-logo-ctn' onClick={movetoSection1}>
      <img id="bgw-logo" src={Logo} alt="BGWlogo" />
    </div>
  )
}
