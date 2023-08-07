import { useState, useLayoutEffect } from "react";
import './InternationalMap.css';
import { gsap } from "gsap";

export const InternationalMap = ({selectedLocation}) => {
  const internationalMapVideo = "https://bgwgroup.com.au/video/International_Location_Updated.mp4";
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadedData = () => {
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    const interLocations = gsap.utils.toArray(".inter-map-5-locations li");
    const interLocationTl = gsap.timeline({delay: 0, ease: "elastic", duration: 1});

    let ctx = gsap.context(() => {  
      interLocationTl.to('.inter-map-5-locations li:nth-child(1)', {
        x: 0,
        opacity: 1,
      })
      .to('.inter-map-5-locations li:nth-child(2)', {
        x: 0,
        opacity: 1,
        delay: 0.6,
      })
      .to('.inter-map-5-locations li:nth-child(3)', {
        x: 0,
        opacity: 1,
        delay: 0.6,
      })
      .to('.inter-map-5-locations li:nth-child(4)', {
        x: 0,
        opacity: 1,
        delay: 0.6,
      })
      .to('.inter-map-5-locations li:nth-child(5)', {
        x: 0,
        opacity: 1,
        delay: 0.3,
      })
      .to('.inter-map-5-locations li:nth-child(6)', {
        x: 0,
        opacity: 1,
        delay: 0.3,
      })
     })
    return () => ctx.revert()
  },[selectedLocation])

  return (
    <div className='inter-map-ctn'>
      <div className="inter-map-5-locations">
        <li>Bukit Merah - Singapore</li>
        <li>Bangkok - Thailand</li>
        <li>Suzhou - China</li>
        <li>Gyeongi-do - South Korea</li>
        <li>Kota Batam - Indonesia</li>
        <li>Alabang Muntinlupa - Philippines</li>
      </div>
      {isLoading && 
        <div className="international-video-loader-ctn">
          <div className="corp-video-loader"></div>
          <div className="corp-video-textloader">Loading...</div>
        </div>
      }
        <video
          webkit-playsinline 
          playsinline
          controls
          autoPlay
          muted
          loop
          onLoadedData={handleLoadedData}
          style={{ display: isLoading ? "none" : "block" }}
        >
          <source src={internationalMapVideo} type="video/mp4" />
        </video>
    </div>
  )
}
