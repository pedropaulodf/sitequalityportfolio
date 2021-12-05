import React, { useRef } from "react";
import { Slide, Fade } from "react-slideshow-image";
import { ButtonCircleArrow } from "../ButtonCircleArrow";

import styles from './styles.module.scss';

const SlideShow = () => {
  const slideRef = useRef();

  const slideImages = [
    "/images/sliderHome/banner1.png",
    "/images/sliderHome/banner1.png",
    "/images/sliderHome/banner1.png",
    "/images/sliderHome/banner1.png",
    "/images/sliderHome/banner1.png",
    "/images/sliderHome/banner1.png",
  ];

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    prevArrow: <ButtonCircleArrow left />,
    nextArrow: <ButtonCircleArrow />
  };

  return (
    <div className={styles.sliderContainer} >
      <Fade ref={slideRef} {...properties}>
        {slideImages.map((each, index) => (
            <div key={index} className="each-slide" style={{height: '100%'}}>
              <img src={each} alt="Banner Sistema Quality" style={{height: '100%',width: '100%',objectFit: 'fill'}}/>
            </div>
          ))}
      </Fade>
    </div>
  );
};

export default SlideShow;
