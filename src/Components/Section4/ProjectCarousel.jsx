import './ProjectCarousel.css';
import { useLayoutEffect } from "react";

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faPen,
  faCalendar,
  faLocationPin
} from '@fortawesome/free-solid-svg-icons';

import { gsap } from "gsap";

export const ProjectCarousel = ({ activated, setActivated }) => {

  const project1Url = "https://bgwgroup.com.au/BGWgroupSiteImages/Projects/project1.jpg"
        ,project2Url = "https://bgwgroup.com.au/BGWgroupSiteImages/Projects/project2.jpg"
        ,project3Url = "https://bgwgroup.com.au/BGWgroupSiteImages/Projects/project3.jpg"
        ,project4Url = "https://bgwgroup.com.au/BGWgroupSiteImages/Projects/project4.jpg"
        ,project5Url = "https://bgwgroup.com.au/BGWgroupSiteImages/Projects/project5.jpg"
        ,project6Url = "https://bgwgroup.com.au/BGWgroupSiteImages/Projects/project6.jpg"
        ,project7Url = "https://bgwgroup.com.au/BGWgroupSiteImages/Projects/project7.jpg"
        ,project8Url = "https://bgwgroup.com.au/BGWgroupSiteImages/Projects/project8.jpg"
        ,project9Url= "https://bgwgroup.com.au/BGWgroupSiteImages/Projects/WestGate_Tunnel_Vic_project9.jpg"
        ,project10Url= "https://bgwgroup.com.au/BGWgroupSiteImages/Projects/Metro_Tunnel_Vic_project10.jpg"
        ,project11Url= "https://bgwgroup.com.au/BGWgroupSiteImages/Projects/Adelaide_Casino_project11.jpg"
        ,project12Url= "https://bgwgroup.com.au/BGWgroupSiteImages/Projects/Tindal_RAAF_Base_Upgrade_project12.jpg"
        ,project13Url= "https://bgwgroup.com.au/BGWgroupSiteImages/Projects/Darwin_Youth_Justice_centre_project13.jpg"
        ,project14Url= "https://bgwgroup.com.au/BGWgroupSiteImages/Projects/Hansen-Civic Heart-Project14.jpg"
  
  const handleClick = () => {
    setActivated(!activated)
  }

  useLayoutEffect(() => {
    
    let mm = gsap.matchMedia();
    let ctx = gsap.context(() => {
      mm.add(
        "(min-width: 678px)", () => {
          gsap.to('.project-carousel-ctn', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: '.three',
              start: "bottom bottom",
              stop: "bottom center",
              scrub: 1
            }
          })
        })   
    })
    return () => ctx.revert()  
  }, [])

  return (
    <div className='project-carousel-ctn'>
      <div className="projects-heading">
          <h2>Our Experience</h2>
           <div className="close-industry-btn" onClick={handleClick}>
                  <div className="xmark">
                    <FontAwesomeIcon icon={faXmark}  />
                  </div>
                </div>
      </div>
        <div className="main-carousel">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
            className="project-swiper project-swiper-horizontal"
          >
            <SwiperSlide className='project-swiper-slide'>
              <img src={project1Url} alt="cnw glencore" loading="lazy"/>
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Glencore - Mount Isa Mines</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>1999</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Mount Isa, Australia</p>
                   </div>
                </div>
           
              </div>
            </SwiperSlide>
            <SwiperSlide className='project-swiper-slide'>
              <img src={project2Url}  alt="coopers malting plant" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Coopers Malting Plant</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2008</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Regency Park, SA</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='project-swiper-slide'>
              <img src={project3Url}  alt="cnw singapore tunnel mtr" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Singapore Tunnel MTR</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2012</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Singapore</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='project-swiper-slide'>
              <img src={project4Url}  alt="cnw sunshine coast" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Sunshine Coast University Hospital</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Completed</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2016</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Sunshine Coast, QLD</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='project-swiper-slide'>
              <img src={project5Url}  alt="collinsville" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Collinsville Solar Farm</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2017</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Collinsville, QLD</p>
                   </div>
                </div>
          
              </div>
            </SwiperSlide>

            <SwiperSlide className='project-swiper-slide'>
              <img src={project6Url}  alt="cnw gorgon lng" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Gorgon LNG</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Completed</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2017</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Barrow Island, WA</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='project-swiper-slide'>
              <img src={project7Url}  alt="osborne naval shipyard" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Osborne Naval Shipyard</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2018</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Adelaide, SA</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='project-swiper-slide'>
              <img src={project8Url}  alt="gladstone power station" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">NRG Gladstone Power Station</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2018</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Gladstone, QLD</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>

            {/* New Projects */}
            <SwiperSlide className='project-swiper-slide'>
              <img src={project9Url}  alt="gladstone power station" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">West Gate Tunnel</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2023</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Melbourne, VIC</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='project-swiper-slide'>
              <img src={project10Url}  alt="gladstone power station" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Metro Tunnel</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2023</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Melbourne, VIC</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='project-swiper-slide'>
              <img src={project11Url}  alt="gladstone power station" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">ADELAIDE CASINO EXPANSION</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Completed</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2020</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Adelaide, SA</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='project-swiper-slide'>
              <img src={project12Url}  alt="gladstone power station" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">RAAF Base Tindal Upgrades</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2020</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Katherine, NT</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='project-swiper-slide'>
              <img src={project13Url}  alt="gladstone power station" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Darwin Youth Justice Centre</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2022</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Darwin, NT</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='project-swiper-slide'>
              <img src={project14Url}  alt="gladstone power station" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Hansen Civic Heart</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Completed</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2018</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Perth, WA</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}
