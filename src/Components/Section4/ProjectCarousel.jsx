import {useLayoutEffect} from 'react';
import './ProjectCarousel.css';
import 'swiper/css';
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
} from '@fortawesome/free-solid-svg-icons';


export const ProjectCarousel = ({ activated, setActivated }) => {
    const handleClick = () => {
        setActivated(!activated)
    }

    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        gsap.to(".four-projects-ctn", {
          opacity: 1,
          duration: 1.5,
          ease: 'none',
        });
      })
  }, [activated])

  return (
    <div className='project-carousel-ctn'>
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
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="test">
              <p>test</p>
            </div>
            <img src="https://picsum.photos/1600/800?random=1" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="test">
              <p>test</p>
            </div>
            <img src="https://picsum.photos/1600/800?random=2" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="test">
              <p>test</p>
            </div>
            <img src="https://picsum.photos/1600/800?random=3" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="test">
              <p>test</p>
            </div>
            <img src="https://picsum.photos/1600/800?random=4" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="test">
              <p>test</p>
            </div>
            <img src="https://picsum.photos/1600/800?random=5" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="test">
              <p>test</p>
            </div>
            <img src="https://picsum.photos/1600/800?random=6" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="test">
              <p>test</p>
            </div>
            <img src="https://picsum.photos/1600/800?random=7" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="test">
              <p>test</p>
            </div>
            <img src="https://picsum.photos/1600/800?random=8" alt="" />
          </SwiperSlide>
       
        </Swiper>
        </div>
        <div className="close-industry-btn" onClick={handleClick}>
          <div className="xmark">
            <FontAwesomeIcon icon={faXmark}  />
          </div>
        </div>
    </div>
  )
}
