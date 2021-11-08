import React, { useRef } from "react";
import { Rerousel } from "./Rerousel";

export const Carousel = () => {
  const customerLogo = useRef(null);

  const customers = [
    { image: "/images/carousel/logoGray.png" },
    { image: "/images/carousel/logoGray.png" },
    { image: "/images/carousel/logoGray.png" },
    { image: "/images/carousel/logoGray.png" },
    { image: "/images/carousel/logoGray.png" },
    { image: "/images/carousel/logoGray.png" },
  ];

  return (
    <div>
      <h1>Carousel</h1>
      <Rerousel itemRef={customerLogo}>
        {customers.map((c,index) => {
          return <img key={index} image={c.image} ref={customerLogo} />;
        })}
      </Rerousel>
    </div>
  );
};
