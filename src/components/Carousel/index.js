import React, { useRef } from "react";
import { Rerousel } from "./Rerousel";

export const Carousel = (props) => {
  const customerLogo = useRef(null);

  const images = Array.from({ length: 5 }).fill(
    "/images/carousel/logoGray.png"
  );

  return (
    <>
      <Rerousel itemRef={customerLogo} interval={props.interval}>
        {images.map((c, i) => {
          return <img key={i} src={c} ref={customerLogo} />;
        })}
      </Rerousel>
    </>
  );
};
