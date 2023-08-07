import { useEffect } from "react"
import "./Preloader.css";
import { preLoaderAnim } from "../../animations/preloaderAnimation";

export const Preloader = () => {
  const bgwLogo = "https://bgwgroup.com.au/Logos/bgwLogo.png";
  
  useEffect(() => {
    preLoaderAnim()
  },[])
  
  
  return (
  <div className="preloader">
      <div className="texts-container">
          <span className="preload-img-ctn"><img src={bgwLogo} alt="BGW Group"/></span>
          <span>BGW </span>
          <span>GROUP<sup className="preload-trademark">™</sup></span>
      </div>
  </div>
  )
}
