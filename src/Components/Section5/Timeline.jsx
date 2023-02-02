import { useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AllBusinessLogos from "../Logos/TimelineBusiness";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import "./Timeline.css";


export const Timeline = ({ movetoSection6 }) => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".vertical-line", {
        height: 1300,
        opacity: 1,
        scrollTrigger: {
          trigger: ".five-1",
          start: "top 65%",
          end: "bottom 22%",
          scrub: true,
        }
      })

      gsap.to(".yoyo-start", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".five-1",
          start: "top 65%",
          end: "top 50%",
          scrub: true,
        }
      })

      gsap.to("#arrow5", {
        y: 2,
        repeat: -1,
        duration: 1,
        yoyo: true,
        opacity: 1
      })
    })
    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timelineX = gsap.timeline({scrollTrigger: {
        trigger: ".five-1",
        start: "top 90%",
        end: "bottom 50%",
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
    })
    return () => ctx.revert()
  },[])


  return (
    <div className="five-ctn">
      <div className="five-left">
        <section className="sec sec0">
           <h1 className="tl-heading">Our Timeline</h1>
        </section>

        <section className="sec sec1">
      
          <div className="bg bg1">
            <img src={AllBusinessLogos[1]} alt="" />
          </div>
          <div className="tl-text-ctn">
            <div className="upper-tl-text">1947</div>
            <div className="left-horizontal-line"></div>
            <div className="lower-tl-text">
              Samios Plumbing Supplies Est.
            </div>
          </div>
        </section>

        <section className="sec sec3">
          <div className="bg bg3">
            <img src={AllBusinessLogos[3]} alt="" />
          </div>
          <div className="tl-text-ctn">
            <div className="upper-tl-text">1975</div>
            <div className="left-horizontal-line"></div>
            <div className="lower-tl-text">
              Sherriff Electrical Wholesalers Est.
            </div>
          </div>
        </section>

        <section className="sec sec5">
    
          <div className="bg bg5">
            <img src={AllBusinessLogos[5]} alt="" />
          </div>
          <div className="tl-text-ctn">
            <div className="upper-tl-text">1985</div>
            <div className="left-horizontal-line"></div>
            <div className="lower-tl-text">
              Specialist Electrical Solutions Est.
            </div>
          </div>
        </section>

        <section className="sec sec7">
       
          <div className="bg bg7">
            <img src={AllBusinessLogos[7]} alt="" />
          </div>
          <div className="tl-text-ctn">
            <div className="upper-tl-text">2004</div>
            <div className="left-horizontal-line"></div>
            <div className="lower-tl-text">
              Samios Plumbing Supplies purchased by BGW.
            </div>
          </div>
        </section>

        <section className="sec sec9">
          
          <div className="bg bg9">
            <img src={AllBusinessLogos[9]} alt="" />
          </div>
          <div className="tl-text-ctn">
            <div className="upper-tl-text">2006</div>
            <div className="left-horizontal-line"></div>
            <div className="lower-tl-text">
              Air Additions purchased by BGW
            </div>
          </div>
        </section>

        <section className="sec sec11">
          <div className="bg bg11">
            <img src={AllBusinessLogos[11]} alt="" />
          </div>
          <div className="tl-text-ctn">
            <div className="upper-tl-text">2009</div>
            <div className="left-horizontal-line"></div>
            <div className="lower-tl-text">
              CNW Energy Est. by BGW.
            </div>
          </div>
        </section>

        <section className="sec sec13">

          <div className="bg bg13">
            <img src={AllBusinessLogos[13]} alt="" />
          </div>
          <div className="tl-text-ctn">
            <div className="upper-tl-text">2013</div>
            <div className="left-horizontal-line"></div>
            <div className="lower-tl-text">
              BGW Tech Est. by BGW.
            </div>
          </div>
        </section>

        <section className="sec sec15">
      
          <div className="bg bg13">
            <img src={AllBusinessLogos[15]} alt="" />
          </div>
          <div className="tl-text-ctn">
            <div className="upper-tl-text">2019</div>
            <div className="left-horizontal-line"></div>
            <div className="lower-tl-text">
              ILA Est. by BGW.
            </div>
          </div>
        </section>

      </div>

      <div className="xAxis-line">
        <div className="yoyo-start"></div>
        <div className="vertical-line"></div>
        <div className="yoyo"></div>
      </div>

      <div className="five-right">
        <section className="sec sec2">
          <div className="tl-text-ctn">
            <div className="upper-tl-text">1938</div>
            <div className="right-horizontal-line"></div>
            <div className="lower-tl-text">
              Robert Fergusson Est.
            </div>
          </div>
          <div className="bg bg2">
            <img src={AllBusinessLogos[0]} alt="" />
          </div>
        </section>
  
        <section className="sec sec4">
          <div className="tl-text-ctn">
            <div className="upper-tl-text">1952</div>
            <div className="right-horizontal-line"></div>
            <div className="lower-tl-text">
              CNW Electrical Wholesale Est.
            </div>
          </div>
          <div className="bg bg4">
            <img src={AllBusinessLogos[2]} alt="" />
          </div>
    
        </section>

        <section className="sec sec6">
          <div className="tl-text-ctn">
            <div className="upper-tl-text">1982</div>
            <div className="right-horizontal-line"></div>
            <div className="lower-tl-text">
              BGW Group Est. and purchased CNW Electrical Wholesale
            </div>
          </div>

          <div className="bg bg6">
            <img src={AllBusinessLogos[4]} alt="" />
          </div>

        </section>

        <section className="sec sec8">
          <div className="tl-text-ctn">
            <div className="upper-tl-text">1996</div>
            <div className="right-horizontal-line"></div>
            <div className="lower-tl-text">
              Air Additions Est.
            </div>
          </div>
          <div className="bg bg8">
            <img src={AllBusinessLogos[6]} alt="" />
          </div>
    
        </section>
  
        <section className="sec sec10">
          <div className="tl-text-ctn">
            <div className="upper-tl-text">2005</div>
            <div className="right-horizontal-line"></div>
            <div className="lower-tl-text">
              Sherriff Electrical Wholesalers purchased by BGW
            </div>
          </div>
          <div className="bg bg10">
            <img src={AllBusinessLogos[8]} alt="" />
          </div>

        </section>

        <section className="sec sec12">
          <div className="tl-text-ctn">
            <div className="upper-tl-text">2007</div>
            <div className="right-horizontal-line"></div>
            <div className="lower-tl-text">
              Robert Fergusson purchased by BGW.
            </div>
          </div>
          <div className="bg bg12">
            <img src={AllBusinessLogos[10]} alt="" />
          </div>
      
        </section>
  
        <section className="sec sec14">
          <div className="tl-text-ctn">
            <div className="upper-tl-text">2012</div>
            <div className="right-horizontal-line"></div>
            <div className="lower-tl-text">
            Cablemakers Est. by BGW. SES purchased by BGW.
            </div>
          </div>
          <div className="bg bg14">
            <img src={AllBusinessLogos[12]} alt="" />
          </div>
  
        </section>

        <section className="sec sec16">
          <div className="tl-text-ctn">
            <div className="upper-tl-text">2015</div>
            <div className="right-horizontal-line"></div>
            <div className="lower-tl-text">
              EA Est. by CNW, R&M Electrical Group and Wholesale Electric Supply Company. BGW Group Solutions Est. by BGW
            </div>
          </div>
          <div className="bg bg14">
            <img src={AllBusinessLogos[14]} alt="" />
          </div>
   
        </section>

        <section className="sec last-tl-sec">
          <div className="tl-bottom-btn" onClick={movetoSection6}>
            <p>See our team</p>
            <FontAwesomeIcon id="arrow5" icon={faArrowDown} size="sm" />  
          </div>
        </section>

      </div>
    </div>
  )
}
