import {useLayoutEffect, useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./MCarousel.css";
import PhotoArray from '../Logos/AllBusinessLogos';

export const MCarousel = () => {
  gsap.registerPlugin(ScrollTrigger);
  let xPos = 0;
  const ring = useRef();
  const stage = useRef();

  // Mouse Enter and Leave Events
  const onEnter = ({currentTarget}) => {
    gsap.to(currentTarget,{ scale:1.05})
  }
  
  const onLeave = ({currentTarget}) => {
    gsap.to(currentTarget, { scale: 1})
  }
  
  function dragStart(e){ 
    if (e.touches) e.clientX = e.touches[0].clientX;
    xPos = Math.round(e.clientX);
    gsap.set(ring.current, {cursor:'grab'})
    stage.current.addEventListener('mousemove', drag);
    stage.current.addEventListener('touchmove', drag);
  }


  function drag(e){
    if (e.touches) e.clientX = e.touches[0].clientX;    

    gsap.to(ring.current, {
      rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
      onUpdate:()=>{ gsap.set('.img-ctn', { backgroundPosition:(i)=>getBgPos(i) }) },
    });
    
    xPos = Math.round(e.clientX);
  }


  function dragEnd(){
    stage.current.removeEventListener('mousemove', drag);
    stage.current.removeEventListener('touchmove', drag);
  }


  function getBgPos(i){ //returns the background-position string to create parallax movement in each image
    return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*36)/360*500 )+'px 0px';
  } 

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

    gsap.timeline()
        .set('.img-ctn',  { // apply transform rotations to each image
          rotateY: (i)=> i*-32.72,
          transformOrigin: '50% 50% 1500rem',
          z: -1450,
          backgroundPosition:(i)=>getBgPos(i),
          backfaceVisibility:'hidden'
        })    

    stage.current.addEventListener('mousedown', dragStart);
    stage.current.addEventListener('mouseup', dragEnd);
    stage.current.addEventListener('touchstart', dragStart);
    stage.current.addEventListener('touchend', dragEnd);

    let mm = gsap.matchMedia();
      gsap.registerPlugin(ScrollTrigger);
      mm.add(
        "(min-width: 677px)", () => {
          gsap.to(ring.current, {
            rotateY: (i) =>i +150,
            duration: 100,
            scrollTrigger: {
              trigger: ring.current,
              start: "top 90%",
              scrub: true,
            }
          })
        }
      )
    },ring)
    return () => ctx.revert();
  },[])
  
  useLayoutEffect(() => {
    gsap.to(".arrow-left", {
      x: 5,
      ease: "power1.inOut", 
      repeat: -1, 
      yoyo: true, 
    })
  },[])

  useLayoutEffect(() => {
    gsap.to(".arrow-right", {
      x: -5,
      ease: "power1.inOut", 
      repeat: -1, 
      yoyo: true, 
    })
  },[])

  return (
    <div className="stage" 
      ref={stage} 
    >
      <div className="carousel-container" >
        <div className="ring" ref={ring} >
          <div className="img-ctn" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://shop.cnw.com.au/" >
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  Click me
                </div>
              </div>
            </a>
              <img className="inner-img" src={PhotoArray[0]} />
          </div>
          
          <div className="img-ctn" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://shop.samios.net.au/">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  Click me
                </div>
              </div>
              <img className="inner-img" src={PhotoArray[1]}/>
            </a>
          </div>
          
          <div className="img-ctn" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://shop.sherriff.com.au/">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  Click me
                </div>
              </div>
              <img className="inner-img" src={PhotoArray[2]}/>
            </a>
          </div>
          
          <div className="img-ctn" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://wea-asia.com/">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  Click me
                </div>
              </div>
              <img className="inner-img" src={PhotoArray[3]}/>
            </a>
          </div>
          
          <div className="img-ctn" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://bgwt.com.au/">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  Click me
                </div>
              </div>
              <img className="inner-img" src={PhotoArray[4]}/>
            </a>
          </div> 
          
          <div className="img-ctn" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="http://airadditions.com.au/">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  Click me
                </div>
              </div>
              <img className="inner-img" src={PhotoArray[5]}/>
            </a>
          </div>  
          
          <div className="img-ctn" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://www.sesaustralia.com.au/">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  Click me
                </div>
              </div>
              <img className="inner-img" src={PhotoArray[6]}/>
            </a>
          </div> 
          
          <div className="img-ctn" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="http://cablemakers.com.au/">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  Click me
                </div>
              </div>
              <img className="inner-img" src={PhotoArray[7]}/>
            </a>
          </div>  
          
          <div className="img-ctn" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://mmssafety.com.au/">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  Click me
                </div>
              </div>
              <img className="inner-img" src={PhotoArray[8]}/>
            </a>
          </div>  

          <div className="img-ctn" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://www.innovativelighting.com.au/">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  Click me
                </div>
              </div>
              <img className="inner-img" src={PhotoArray[9]} />
            </a>
          </div>

          <div className="img-ctn" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="http://fergiesbetta.com.au/">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  Click me
                </div>
              </div>
              <img className="inner-img" src={PhotoArray[10]} />
            </a>
          </div>

        </div>
      </div>
  </div>
  )
}
