"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const MenuWrapper = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <Image
        src="/images/menu/carta.jpg"
        alt="Carta de Munayco"
        width={993}
        height={695}
        sizes="(max-width: 767px) 100vw, 993px"
        className="h-auto w-full max-w-[993px]"
        unoptimized
      />
    </ControlledZoom>
  );
};
