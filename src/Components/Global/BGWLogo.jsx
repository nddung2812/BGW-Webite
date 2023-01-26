import "./BGWlogo.css";
import Logo from "../../assets/images/bgwgroup.jpg";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export const BGWLogo = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const move1 = () => {
    gsap.to(window, {
      duration: 0.6,
      ease: "slow(0.7, 0.7, fasle)",
      scrollTo: {
        y: ".one",
      }
    })
  }
  return (
    <div className='bgw-logo-ctn' onClick={move1}>
      <img id="bgw-logo" src={Logo} alt="BGWlogo" />
    </div>
  )
}
