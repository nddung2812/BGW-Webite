import { useLayoutEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { gsap } from "gsap";
import AllBusinessLogos from "../Logos/TimelineBusiness";

import "./Timeline.css";


export const Timeline = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useLayoutEffect(() => {
    gsap.to(".timeline-vertical-line", {
      height: 1155,
      scrollTrigger: {
        trigger: ".five",
        start: "top 60%",
        end: "bottom 50%",
        scrub: true,
      }
    })
  })

  useLayoutEffect(() => {
    const timelineX = gsap.timeline({scrollTrigger: {
      trigger: ".five",
      start: "top bottom",
      end: "bottom 50%",
      markers: true,
      scrub: true,
    }})

    timelineX.to(".sec0", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec2", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec1", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec4", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec3", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec6", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec5", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec8", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec7", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec10", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec9", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec12", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec11", {
      x: 0,
      opacity: 1
    })
    
    timelineX.to(".sec14", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec13", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec16", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".sec15", {
      x: 0,
      opacity: 1
    })

    timelineX.to(".last-tl-sec", {
      x: 0,
      opacity: 1
    })

  },[])


  return (
    <div className="five-ctn">
      <div className="five-left">
        <section className="sec sec0">
           <h1>Our Timeline</h1>
        </section>

        <section className="sec sec1">
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
          <div className="bg bg1">
            <img src={AllBusinessLogos[1]} alt="" />
          </div>
        </section>

        <section className="sec sec3">
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
          <div className="bg bg3">
          <img src={AllBusinessLogos[3]} alt="" />
          </div>
        </section>

        <section className="sec sec5">
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
          <div className="bg bg5">
            <img src={AllBusinessLogos[5]} alt="" />
          </div>
        </section>

        <section className="sec sec7">
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
          <div className="bg bg7">
            <img src={AllBusinessLogos[7]} alt="" />
          </div>
        </section>

        <section className="sec sec9">
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
          <div className="bg bg9">
            <img src={AllBusinessLogos[9]} alt="" />
          </div>
        </section>

        <section className="sec sec11">
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
          <div className="bg bg11">
            <img src={AllBusinessLogos[11]} alt="" />
          </div>
        </section>

        <section className="sec sec13">
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
          <div className="bg bg13">
            <img src={AllBusinessLogos[13]} alt="" />
          </div>
        </section>

        <section className="sec sec15">
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
          <div className="bg bg13">
            <img src={AllBusinessLogos[15]} alt="" />
          </div>
        </section>

      </div>

      <div className="timeline-vertical-line"></div>

      <div className="five-right">
        <section className="sec sec2">
          <div className="bg bg2">
            <img src={AllBusinessLogos[0]} alt="" />
          </div>
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
        </section>
  
        <section className="sec sec4">
          <div className="bg bg4">
            <img src={AllBusinessLogos[2]} alt="" />
          </div>
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
        </section>

        <section className="sec sec6">
          <div className="bg bg6">
            <img src={AllBusinessLogos[4]} alt="" />
          </div>
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
        </section>

        <section className="sec sec8">
          <div className="bg bg8">
            <img src={AllBusinessLogos[6]} alt="" />
          </div>
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
        </section>
  
        <section className="sec sec10">
          <div className="bg bg10">
            <img src={AllBusinessLogos[8]} alt="" />
          </div>
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
        </section>

        <section className="sec sec12">
          <div className="bg bg12">
            <img src={AllBusinessLogos[10]} alt="" />
          </div>
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
        </section>
  
        <section className="sec sec14">
          <div className="bg bg14">
            <img src={AllBusinessLogos[12]} alt="" />
          </div>
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
        </section>

        <section className="sec sec16">
          <div className="bg bg14">
            <img src={AllBusinessLogos[14]} alt="" />
          </div>
          <div className="history-text">
            <h1>1938</h1>
            <h2>ROBERT FERGUSSON</h2>
            <p>Robert Fergusson opened in Tasmania, supplying to the domestic and commercial electrical and plumbing markets.</p>
          </div>
        </section>

        <section className="sec last-tl-sec">
          <h1>Click to see our team</h1>
        </section>

      </div>
    </div>
  )
}
