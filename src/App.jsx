import { useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './App.css'

import { BGWLogo } from './Components/Global/BGWLogo.jsx';
import { VerticalNavbar } from './Components/Global/VerticalNavbar.jsx';

import { TextReveal } from "./Components/Section1/TextReveal";
import { ExploreButton } from "./Components/Section1/ExploreButton";
import { Tilt3dBackground } from './Components/Section1/Tilt3dBackground';

import { TwoLeft } from './Components/Section2/TwoLeft';
import { TwoRight } from './Components/Section2/TwoRight';

import { ThreeRight } from "./Components/Section3/ThreeRight";
import { ThreeLeft } from "./Components/Section3/ThreeLeft";

import { FourLeft } from './Components/Section4/FourLeft';
import { FourRight } from './Components/Section4/FourRight';

import { ProjectCarousel } from './Components/Section4/ProjectCarousel';

import { Timeline } from './Components/Section5/Timeline';

import { MCarousel } from './Components/Section6/MCarousel';


function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const [divValue, setDivValue] = useState("industrial");
  const [activated, setActivated] = useState(true);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".four-projects-ctn", {
        opacity: 1,
        duration: 1.5,
        ease: 'none',
      })

      gsap.to(".vertical-nav", {
        x: -30,
        scrollTrigger: {
          trigger: ".five",
          start: "bottom center",
          scrub: true, 
        }
      })

    })
    return () => ctx.revert()
  }, [activated])


  useLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".section").forEach(item => {
        ScrollTrigger.create({
          trigger: item,
          start: "top top",
          pin: true,
          pinSpacing: false,
          snap: true,
        })
      })
    })
    return () => ctx.revert()
    
  },[])

  return (
    <div className="App">
      <BGWLogo />
      <div className="vertical-nav">
        <VerticalNavbar />
      </div>

      <div className='section one'>
        <div className="one-left" >
          <TextReveal />
          <ExploreButton />
        </div>
        <div className="one-right">
          <Tilt3dBackground />
        </div>
      </div>

      <div className='section two'>
          <TwoLeft />
          <TwoRight />
      </div>
      
      <div className='section three'>
          <ThreeLeft />
          <ThreeRight />
      </div>

      <div className='section four'>
        {activated ? <div className="four-ctn">
            <FourLeft 
              divValue={divValue}
              setActivated={setActivated}
            />
            <FourRight 
              divValue={divValue}
              setDivValue={setDivValue}
            />
          </div>  
          :
          <div className="four-projects-ctn">
            <ProjectCarousel 
              activated={activated}
              setActivated={setActivated} 
            />
          </div>
        } 
      </div>

      <div className="unpinned-sectionsection five">
        <Timeline />
      </div>
    
      <div className="unpinned-sectionsection six">
        <MCarousel />     
      </div>
    </div>
  )
}

export default App
