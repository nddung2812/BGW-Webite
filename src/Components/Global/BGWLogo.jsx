import "./BGWlogo.css";

export const BGWLogo = ({ movetoSection1 }) => {

const bgwLogo = "https://bgwgroup.com.au/Logos/bgwLogo.png";

  return (
    <div className='bgw-logo-ctn' onClick={movetoSection1}>
      <img id="bgw-logo" src={bgwLogo} alt="BGWlogo" />
    </div>
  )
}
