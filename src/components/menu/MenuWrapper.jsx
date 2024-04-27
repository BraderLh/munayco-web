"use client";
import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import Image from 'next/image'
import "react-medium-image-zoom/dist/styles.css";

export const MenuWrapper = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <img
        src="/images/menu/carta.jpg"
        alt="Carta de Munayco"
        width={700}
        // width={300}
        // height={200}
        // style={{
        //   objectFit: "none",
        //   backgroundColor: "transparent",
        //   objectPosition: "center",
        //   width: 'auto',
        //   height: 'auto'
          //display: 'flex',
          //justifyContent: 'center'
        // }}
      />
    </ControlledZoom>
  );
};
