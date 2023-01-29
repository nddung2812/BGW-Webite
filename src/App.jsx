import { useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import './App.css'

import { BGWLogo } from './components/Global/BGWLogo.jsx';
import { VerticalNavbar } from './components/Global/VerticalNavbar.jsx';

import { TextReveal } from "./components/Section1/TextReveal";
import { ExploreButton } from "./components/Section1/ExploreButton";
import { Tilt3dBackground } from './components/Section1/Tilt3dBackground';

import { TwoLeft } from './components/Section2/TwoLeft';
import { TwoRight } from './components/Section2/TwoRight';

import { ThreeRight } from "./components/Section3/ThreeRight";
import { ThreeLeft } from "./components/Section3/ThreeLeft";

import { FourLeft } from './components/Section4/FourLeft';
import { FourRight } from './components/Section4/FourRight';
import { ProjectCarousel } from './components/Section4/ProjectCarousel';


function App() {

  const [divValue, setDivValue] = useState("industrial");
  const [activated, setActivated] = useState(true);

  useLayoutEffect(() => {
    gsap.to(".four-projects-ctn", {
      opacity: 1,
      duration: 1.5,
      ease: 'none',
    });
}, [activated])

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
            {/* <FourRight 
              divValue={divValue}
              setDivValue={setDivValue}
            /> */}
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
    </div>
  )
}

export default App
