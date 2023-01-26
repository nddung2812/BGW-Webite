import "./TwoLeft.css";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEarthOceania,
	faBriefcase,
	faPlane,
	faLocationPin,
	faUserGroup,
	faCertificate,
	faBusinessTime,
	faGlobe
} from '@fortawesome/free-solid-svg-icons';
export const TwoLeft = () => {
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {

	gsap.to(".two-left-ctn", {
		x:0,
		opacity: 1,
		scrollTrigger: {
			trigger: ".one",
			start: "top top",
			scrub: 1,
		}
	})

}, [])


  return (
    <div className="two-left-ctn">
        <div className="line-1">
			<div className="block">
				<FontAwesomeIcon icon={faEarthOceania} className="cube-icon" color="#d13939" />
				<div className="text-hl-ctn">
					<div className="hl-top">100%</div>
					<div className="hl-text">Australian Owned Since 1938</div>
				</div>
			</div>
			<div className="block">
				<FontAwesomeIcon icon={faGlobe} className="cube-icon" color="#d13939" />
				<div className="text-hl-ctn">
						<div className="hl-top">5</div>
						<div className="hl-text">International Locations</div>
				</div>
			</div>
			<div className="block">
				<FontAwesomeIcon icon={faCertificate} className="cube-icon" color="#d13939" />
				<div className="text-hl-ctn">
					<div className="hl-top">Top 10%</div>
					<div className="hl-text">Privately Owned Businesses in QLD</div>
				</div>
			</div>
        </div>
		<div className="line-2">
			<div className="block">
				<FontAwesomeIcon icon={faLocationPin} className="cube-icon" color="#d13939" />
				<div className="text-hl-ctn">
					<div className="hl-top">110+</div>
					<div className="hl-text">Australian Locations</div>
				</div>
			</div>
			<div className="block centre-text">
				<h1>B<strong>G</strong>W</h1>
			</div>
			<div className="block">
				<FontAwesomeIcon icon={faUserGroup} className="cube-icon" color="#d13939" />
				<div className="text-hl-ctn">
					<div className="hl-top">1,100+</div>
					<div className="hl-text">Number of Staff</div>
				</div>
			</div>
        </div>
		<div className="line-3">
			<div className="block">
				<FontAwesomeIcon icon={faPlane} className="cube-icon" color="#d13939" />
				<div className="text-hl-ctn">
					<div className="hl-top">3000</div>
					<div className="hl-text">Supplied Domestic and International</div>
				</div>
				</div>
			<div className="block">
				<FontAwesomeIcon icon={faBriefcase} className="cube-icon" color="#d13939" />
				<div className="text-hl-ctn">
					<div className="hl-top">Top 150</div>
					<div className="hl-text">Privately Owned Businesses in QLD</div>
				</div>
				</div>
			<div className="block">
				<FontAwesomeIcon icon={faBusinessTime} className="cube-icon" color="#d13939" />
				<div className="text-hl-ctn">
					<div className="hl-top">1982</div>
					<div className="hl-text">Webb Family Business Established</div>
				</div>
			</div>
        </div>
    </div>
  )
}
