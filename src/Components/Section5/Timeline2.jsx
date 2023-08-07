import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import './Timeline2.css';
import AllBusinessLogos from "../Logos/TimelineBusiness";
import TimelineImages from "../JSONData/TimelineImages";

export const Timeline2 = () => {

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timelineX = gsap.timeline({scrollTrigger: {
        trigger: ".five-1",
        start: "top 60%",
        end: "bottom 90%",
        scrub: true,
      }})

      timelineX.to(".sec0", {
        x: 0,
        opacity: 1,
      })

      timelineX.to(".sec2", {
        x: 0,
        opacity: 1,
        // y: "-8rem",
      })

      timelineX.to(".sec1", {
        x: 0,
        opacity: 1,
        // y: "-15rem",
      })

      timelineX.to(".sec4", {
        x: 0,
        opacity: 1,
        // y: "-22rem",
      })

      timelineX.to(".sec3", {
        x: 0,
        opacity: 1,
        // y: "-30rem",
      })

      timelineX.to(".sec6", {
        x: 0,
        opacity: 1,
        // y: "-rem",
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
    })
    return () => ctx.revert()
  },[])


  return (
    <div className='timeline-ctn'>
      <div className="timeline-heading-ctn">
        Our Timeline
      </div>
      <div className="tl-content-ctn tl-content-right sec0">
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[0]} alt="CNW Electrical"/>
              </div>
              <div className="tl-details-content">
                <h2>1938</h2>
                <div className="tl-details-h2-divider"></div>
                <p>Robert Fergusson Est.</p>
                <div className="tl-details-header-logoctn">
                  <a href="http://fergiesbetta.com.au/" target="_blank">
                    <img src={AllBusinessLogos[0]} alt="CNW Electrical"/>
                  </a>
                </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-left sec2">
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[1]} alt="Samios Plumbing" />
              </div>
              <div className="tl-details-content">
                <h2>1947</h2>
                <div className="tl-details-h2-divider"></div>
                <p>Samios Plumbing Supplies Est.</p>
                <div className="tl-details-header-logoctn">
                  <a href="https://shop.samios.net.au/" target="_blank">
                    <img src={AllBusinessLogos[1]} alt="Samios Plumbing"/>
                  </a>
                </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-right sec1">
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[2]} alt="CNW Electrical"/>
              </div>
              <div className="tl-details-content">
                <h2>1952</h2>
                <div className="tl-details-h2-divider"></div>
                <p>CNW Electrical Wholesale Est.</p>
                <div className="tl-details-header-logoctn">
                  <a href="https://shop.cnw.com.au/" target="_blank">
                    <img src={AllBusinessLogos[2]} alt="CNW Electrical"/>
                  </a>
                </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-left sec4">
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[4]} alt="BGW Electrical Plumbing Industry"/>
              </div>
              <div className="tl-details-content">
                <h2>1972</h2>
                <div className="tl-details-h2-divider"></div>
                <p>BGW Group is established by Brian and Greta Webb.</p>
                <div className="tl-details-header-logoctn">
                  <a href="https://bgwgroup.com.au/" target="_blank">
                    <img src={AllBusinessLogos[4]} alt="BGW Electrical Plumbing Industry"/>
                  </a>
                </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-right sec3">
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[3]} alt="Sherriff Electrical"/>
              </div>
              <div className="tl-details-content">
                <h2>1975</h2>
                <div className="tl-details-h2-divider"></div>
                <p>Sherriff Electrical Wholesale Est.</p>
                <div className="tl-details-header-logoctn">
                  <a href="https://shop.sherriff.com.au/" target="_blank">
                    <img src={AllBusinessLogos[3]} alt="Sherriff Electrical"/>
                  </a>
                </div>
              </div>
          </div>
      </div>
      
      <div className="tl-content-ctn tl-content-left sec6">
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[5]} alt="CNW Electrical"/>
              </div>
              <div className="tl-details-content">
                <h2>1982</h2>
                <div className="tl-details-h2-divider"></div>
                <p>CNW Electrical Wholesale purchased by BGW Group.</p>
                <div className="tl-details-header-logoctn">
                  <a href="https://shop.cnw.com.au/" target="_blank">
                    <img src={AllBusinessLogos[2]} alt="CNW Electrical"/>
                  </a>
                </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-right sec5">
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[6]} alt="SES Electrical"/>
              </div>
              <div className="tl-details-content">
                <h2>1985</h2>
                <div className="tl-details-h2-divider"></div>
                <p>Specialist Electrical Solutions Est.</p>
                <div className="tl-details-header-logoctn">
                  <a href="https://www.sesaustralia.com.au/" target="_blank">
                    <img src={AllBusinessLogos[5]} alt="SES Electrical"/>
                  </a>
                </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-left sec8">
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[7]} alt="Air Condition"/>
              </div>
              <div className="tl-details-content">
                  <h2>1996</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>Air Additions Est.</p>

                  <div className="tl-details-header-logoctn">
                    <a href="http://airadditions.com.au/" target="_blank">
                      <img src={AllBusinessLogos[6]} alt="Air Condition"/>
                    </a>
                  </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-right sec7">
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[8]} alt="Samios Plumbing"/>
              </div>
              <div className="tl-details-content">
                  <h2>2004</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>Samios Plumbing Supplies purchased by BGW Group.</p>

                  <div className="tl-details-header-logoctn">
                    <a href="https://shop.samios.net.au/" target="_blank">
                      <img src={AllBusinessLogos[7]} alt="Samios Plumbing"/>
                    </a>
                  </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-left sec10">
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[9]} alt="Sherriff Electrical"/>
              </div>
              <div className="tl-details-content">
                  <h2>2005</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>Sherriff Electrical Wholesale purchased by BGW Group.</p>

                  <div className="tl-details-header-logoctn">
                    <a href="https://shop.sherriff.com.au/" target="_blank">
                      <img src={AllBusinessLogos[8]} alt="Sherriff Electrical"/>
                    </a>
                  </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-right sec9">
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[10]} alt="Air Condition"/>
              </div>
              <div className="tl-details-content">
                  <h2>2006</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>Air Additions purchased by BGW Group.</p>

                  <div className="tl-details-header-logoctn">
                    <a href="http://airadditions.com.au/" target="_blank">
                      <img src={AllBusinessLogos[9]} alt="Air Condition"/>
                    </a>
                  </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-left sec12">
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[11]} alt="CNW Electrical"/>
              </div>
              <div className="tl-details-content">
                  <h2>2007</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>Robert Fergusson purchased by BGW Group.</p>

                  <div className="tl-details-header-logoctn">
                    <a href="http://fergiesbetta.com.au/" target="_blank">
                      <img src={AllBusinessLogos[10]} alt="CNW Electrical"/>
                    </a>
                  </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-right sec11">
      <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[12]} alt="CNW Energy"/>
              </div>
              <div className="tl-details-content">
                  <h2>2009</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>CNW Energy Est. by BGW Group.</p>
                  <div className="tl-details-header-logoctn">
                    <a href="http://cnwenergy.com.au/" target="_blank">
                      <img src={AllBusinessLogos[11]} alt="CNW Energy"/>
                    </a>
                  </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-left sec14">
      <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[13]} alt="Cable Makers Electrical"/>
              </div>
              <div className="tl-details-content">
                  <h2>2012</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>Cablemakers Est. by BGW. SES purchased by BGW Group.</p>
                  <div className="tl-details-header-logoctn">
                    <a target="_blank" href="http://cablemakers.com.au/">
                      <img src={AllBusinessLogos[12]} alt="Cable Makers Electrical"/>
                    </a>
                  </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-right sec13">
        <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[14]} alt="BGW Technology"/>
              </div>
              <div className="tl-details-content">
                  <h2>2013</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>BGW Tech Est. by BGW Group.</p>
                  <div className="tl-details-header-logoctn">
                    <a target="_blank" href="https://bgwt.com.au/">
                      <img src={AllBusinessLogos[13]} alt="BGW Technology"/>
                    </a>
                </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-left sec16">
      <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[15]} alt="BGW Electrical"/>
              </div>
              <div className="tl-details-content">
                  <h2>2015</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>
                    WEA Est. by CNW, R&M Electrical Group and Wholesale Electric Supply Company. BGW Group Solutions Est. by BGW Group.
                  </p>
                  <div className="tl-details-header-logoctn">
                    <a target="_blank" href="https://wea-asia.com/">
                      <img src={AllBusinessLogos[14]} alt="BGW Electrical"/>
                    </a>
                  </div>
              </div>
          </div>
      </div>

      <div className="tl-content-ctn tl-content-right sec15">
      <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[16]} alt="ILA Lighting solutions"/>
              </div>
              <div className="tl-details-content">
                <h2>2019</h2>
                <div className="tl-details-h2-divider"></div>
                <p>ILA Est. by BGW Group.</p>
                <div className="tl-details-header-logoctn">
                  <a target="_blank" href="https://www.innovativelighting.com.au/">
                    <img src={AllBusinessLogos[15]} alt="ILA Lighting solutions"/>
                  </a>
                </div>
              </div>
          </div>
      </div>

    </div>
  )
}
