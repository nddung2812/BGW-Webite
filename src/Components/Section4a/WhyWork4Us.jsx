import './WhyWork4Us.css';
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const WhyWork4Us = () => {
  return (
    <div className='sec4a-main-ctn'>
        <div className="why-work-top">
            <div className="why-work-top-heading-ctn">
                <h1>A career with us</h1>
            </div>
         
        </div>
        <Swiper
            autoplay={{
            delay: 4000,
            disableOnInteraction: false
            }}
            speed={800}
            navigation={true}
            grabCursor={true}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="why-work-main-swiper"
        >
            <SwiperSlide className='why-work-swiper-slide'>
                <img src="https://bgwgroup.com.au/BGWgroupSiteImages/CareerSlider/cnwCareer.jpg" alt="CNW Electrical"/>
                <div className="why-work-swiper-slide-text">
                <li>At BGW Group, we believe that work should be more than just a means of earning a living - it should be fulfilling, meaningful, and enjoyable. Our company culture values work-life integration, and we are committed to supporting our team members in achieving both personal and professional success.</li>
                </div>
            </SwiperSlide>
            <SwiperSlide className='why-work-swiper-slide'>
                <img src="https://bgwgroup.com.au/BGWgroupSiteImages/CareerSlider/sherriffCareer.jpg" alt="Sherriff Electrical"/>
                <div className="why-work-swiper-slide-text">
                <li>Working at BGW Group means being part of a team that is dedicated to making a difference in our communities. Our goal is to create a better future for everyone, and we achieve this by delivering high-quality products and services that help our customers achieve their goals.</li>
                </div>
            </SwiperSlide>
            <SwiperSlide className='why-work-swiper-slide'>
                <img src="https://bgwgroup.com.au/BGWgroupSiteImages/CareerSlider/samiosCareer.jpg" alt="Samios Plumbing"/>
                <div className="why-work-swiper-slide-text">
                    <li>We are looking for individuals who share our passion for excellence and innovation, and who want to be part of a team that is pushing the boundaries of what is possible. If you are looking for a company that values your input, supports your growth, and fosters a culture of collaboration and inclusivity, then BGW Group is the place for you.</li>
                </div>
            </SwiperSlide>
            <SwiperSlide className='why-work-swiper-slide'>
                <img src="https://bgwgroup.com.au/BGWgroupSiteImages/CareerSlider/bgwGroupForkliftCareer.jpg" alt="CNW Electrical"/>
                <div className="why-work-swiper-slide-text">
                <li>Join us in our mission to make a positive impact on the world, while also enjoying a healthy life balance and the opportunity to grow and develop your skills. At BGW Group, we believe that work can be fulfilling, inspiring, and fun - and we can't wait for you to be a part of it. </li>
                </div>
            </SwiperSlide>
        </Swiper>
        <div className="why-work-bottom-career-btn">
            <Link to="career" className="why-work-left-career-btn">Join Us Now</Link>
        </div>
    </div>
  )
}
