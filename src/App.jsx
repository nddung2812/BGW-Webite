import { useLayoutEffect, useState, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './index.css'

import { BGWLogo } from './components/Global/BGWLogo.jsx';
import { VerticalNavbar } from './components/Global/VerticalNavbar.jsx';
import { BurgerMenu } from './components/Global/BurgerMenu';

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

import { MCarousel } from './components/Section5/MCarousel';
import { Contact } from './components/Section6/Contact';
import { Timeline2 } from './components/Section5/Timeline2';
import { MCarousel2 } from './components/Section5/MCarousel2';
import { Preloader } from './components/Preloader/Preloader';
import { WhyWork4Us } from './components/Section4a/WhyWork4Us';

function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const [activated, setActivated] = useState(true);
  const one = useRef();
  const two = useRef();
  const three = useRef();
  const four = useRef();
  const five = useRef();
  const six = useRef();
  const cursor = useRef(null);

  const updateCursor = (e) => {
    gsap.to(cursor.current, {
      duration: 1,
      x: e.clientX - 50,
      y: e.clientY - 50,
      ease: "none"
    })
  }

  useLayoutEffect(() => {
    window.addEventListener('mousemove', updateCursor);
  },[])

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
      gsap.to(".vertical-nav", {
        x: -60,
        scrollTrigger: {
          trigger: ".five-1",
          start: "bottom center",
          scrub: true, 
        }
      })

    })
    return () => ctx.revert()
  }, [activated])

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      mm.add(
      "(min-width: 1024px)", () => {
        gsap.to(".bg-one" , {
          opacity: 0,
          scrollTrigger: {
            trigger: two.current,
            start: "top 50%",
            end: "top 20%",
            scrub: true
          }
        })
      })
      mm.add(
        "(min-width: 1024px)", () => {
        gsap.to(".bg-two" , {
          visibility: "visible",
          ease: "slow",
          opacity: 1,
          scrollTrigger: {
            trigger: two.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
          }
        })
      })
      mm.add(
        "(min-width: 1024px)", () => {
        gsap.to(".bg-three" , {
          visibility: "visible",
          ease: "slow",
          opacity: 1,
          scrollTrigger: {
            trigger: three.current,
            start: "top 20%",
            end: "bottom bottom",
            scrub: true
          }
        })
      })

      mm.add(
        "(min-width: 1024px)", () => {
        gsap.to(".bg-five" , {
          visibility: "visible",
          ease: "slow",
          opacity: 1,
          scrollTrigger: {
            trigger: four.current,
            start: "top 20%",
            end: "bottom bottom",
            scrub: true
          }
        })
      })
      mm.add(
        "(min-width: 1024px)", () => {
        gsap.to(".bg-six" , {
          visibility: "visible",
          ease: "slow",
          opacity: 1,
          scrollTrigger: {
            trigger: six.current,
            start: "top 20%",
            end: "bottom bottom",
            scrub: true
          }
        })
      })
    });
    return () => ctx.revert();
  },[])

  return (
    <>
    <Preloader />
    <div className="App">
      <BGWLogo movetoSection1={movetoSection1} />
      <BurgerMenu 
        movetoSection2={movetoSection2}
        movetoSection3={movetoSection3}
        movetoSection4={movetoSection4}
        movetoSection5={movetoSection5}
        movetoSection6={movetoSection6}
      />
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
        {activated ? 
        <ProjectCarousel 
        activated={activated}
        setActivated={setActivated} 
        />
        :
        <FourLeft 
        activated={activated}
        setActivated={setActivated} 
        />
      }
        <FourRight 
          movetoSection5={movetoSection5}
        />
      </div>

      <div className="five" ref={five}>
        <div className="five-1">
          <Timeline2 />
        </div>
        <div className="five-2">
          <MCarousel />
        </div>
        <div className="cursor" ref={cursor}>Drag me</div>
      </div> 
      <MCarousel2 />     
      <WhyWork4Us />
      <div className="section six" ref={six}>
        <Contact />
      </div>

      <div className="section-bg bg-one">
        <div className="bg-front-cover bg-img-one" loading="lazy"></div>
      </div>
      <div className="section-bg bg-two">
        <div className="bg-front-cover bg-img-two" loading="lazy"></div>
      </div>
      <div className="section-bg bg-three">
        <div className="bg-front-cover bg-img-three" loading="lazy"></div>
      </div>
      <div className="section-bg bg-five">
        <div className="bg-front-cover bg-img-five" loading="lazy"></div>
      </div>
      <div className="section-bg bg-six">
        <div className="bg-front-cover bg-img-six" loading="lazy"></div>
      </div>

    </div>
    </>
  )
}

export default App