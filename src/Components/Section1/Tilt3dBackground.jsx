import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import "./Tilt3dBackground.css";

export const Tilt3dBackground = () => {

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".bg-3d-container", {
        x: 0,
        duration: 0.5,
        opacity: 1
      })
    })

    return () => ctx.revert();
  },[])

  return (
    <div className="bg-3d-container">
      <div className="image-box">
        <video controls autoPlay muted loop>
          <source src='#' type="video/mp4" />
        </video>       
      </div>
    </div>
  )
}
