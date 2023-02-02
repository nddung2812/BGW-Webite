import { useLayoutEffect, useState, useRef } from 'react';
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
  const one = useRef();
  const two = useRef();
  const three = useRef();
  const four = useRef();
  const five = useRef();
  const six = useRef();


  const movetoSection1 = () => {
    gsap.to(window,{
      duration: 1.5,
      ease: "slow(0.7, 0.7, false)",
      scrollTo: {
        y: 0,
      }
    })
  }

  const movetoSection2 = () => {
    gsap.to(window,{
      duration: 1.5,
      ease: "slow(0.7, 0.7, false)",
      scrollTo: {
        y: two.current,
      }
    })
  }

  const movetoSection3 = () => {
    gsap.to(window,{
      duration: 1.5,
      ease: "slow(0.7, 0.7, false)",
      scrollTo: {
        y: three.current,
      }
    })
  }

  const movetoSection4 = () => {
    gsap.to(window,{
      duration: 1.5,
      ease: "slow(0.7, 0.7, false)",
      scrollTo: {
        y: four.current,
      }
    })
  }

  const movetoSection5 = () => {
    gsap.to(window,{
      duration: 1.5,
      ease: "slow(0.7, 0.7, false)",
      scrollTo: {
        y: five.current,
      }
    })
  }

  const movetoSection6 = () => {
    gsap.to(window,{
      duration: 1.5,
      ease: "slow(0.7, 0.7, false)",
      scrollTo: {
        y: six.current,
      }
    })
  }




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
          trigger: five.current,
          start: "bottom center",
          scrub: true, 
        }
      })

    })
    return () => ctx.revert()
  }, [activated])

  
    useLayoutEffect(() => {
    let mm = gsap.matchMedia();
    let ctx = gsap.context(() => {
      mm.add(
        "(min-width: 677px)", () => {
        gsap.utils.toArray(".section").forEach(item => {
          ScrollTrigger.create({
            trigger: item,
            start: "top top",
            pin: true,
            pinSpacing: false,
            scrub: true
          })
        })
      })  
    })
    return () => ctx.revert()
    
  },[])

  return (
    <div className="App">
      <BGWLogo movetoSection1={movetoSection1} />
      <div className="vertical-nav">
        <VerticalNavbar 
          movetoSection1={movetoSection1}
          movetoSection2={movetoSection2}
          movetoSection3={movetoSection3}
          movetoSection4={movetoSection4}
          movetoSection5={movetoSection5}
        />
      </div>

      <div className='section one' ref={one}>
        <div className="one-left" >
          <TextReveal />
          <ExploreButton movetoSection2={movetoSection2}/>
        </div>
        <div className="one-right">
          <Tilt3dBackground />
        </div>
      </div>

      <div className='section two' ref={two}>
          <TwoLeft  />
          <TwoRight movetoSection3={movetoSection3}/>
      </div>
      
      <div className='section three' ref={three}>
          <ThreeLeft movetoSection4={movetoSection4} />
          <ThreeRight />
      </div>

      <div className='section four' ref={four}>
        {activated ? <div className="four-ctn">
            <FourLeft 
              divValue={divValue}
              setActivated={setActivated}
              movetoSection5={movetoSection5}
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

      <div className="unpinned-sectionsection five" ref={five}>
        <div className="five-1">
          <Timeline 
            movetoSection6={movetoSection6} 
          />
        </div>
        <div className="five-2">
          <MCarousel />     
        </div>
      </div>
    
      <div className="unpinned-sectionsection six" ref={six}>
      </div>
    </div>
  )
}

export default App
