import { useState, useLayoutEffect } from "react";
import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./VerticalNavbar.css";

export const VerticalNavbar = ({
  movetoSection1,
  movetoSection2,
  movetoSection3,
  movetoSection4,
  movetoSection5
}) => {
  gsap.registerPlugin(ScrollToPlugin);
  const [active1, setActive1] = useState("active");
  const [active2, setActive2] = useState("icon");
  const [active3, setActive3] = useState("icon");
  const [active4, setActive4] = useState("icon");
  const [active5, setActive5] = useState("icon");

  useLayoutEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollNumber = window.scrollY;
      if (scrollNumber < 725) {
        setActive1("active");
        setActive2("icon");
        setActive3("icon");
        setActive4("icon");
        setActive5("icon");
      }
      if (scrollNumber > 726 && scrollNumber < 1520) {
        setActive1("icon");
        setActive2("active");
        setActive3("icon");
        setActive4("icon");
        setActive5("icon");
      }
      if (scrollNumber > 1521 && scrollNumber < 2520) {
        setActive1("icon");
        setActive2("icon");
        setActive3("active");
        setActive4("icon");
        setActive5("icon");
      }
      if (scrollNumber > 2521 && scrollNumber < 3590) {
        setActive1("icon");
        setActive2("icon");
        setActive3("icon");
        setActive4("active");
        setActive5("icon");
      }

      if (scrollNumber > 3591 && scrollNumber < 4650) {
        setActive1("icon");
        setActive2("icon");
        setActive3("icon");
        setActive4("icon");
        setActive5("active");
      }
    })
  },[]);

  return (
    <div className="navigation">
        <div className={active1} onClick={movetoSection1}>
        </div>
        <div className={active2} onClick={movetoSection2}>
        </div>
        <div className={active3} onClick={movetoSection3}>
        </div>
        <div className={active4} onClick={movetoSection4}>
        </div>
        <div className={active5} onClick={movetoSection5}>
        </div>
    </div>
  )
}
