import Image from "next/image";
import { Carousel } from "flowbite-react";

export const CarouselHome = () => {
  const promImages = require.context("/public/images", false);
  const imageList = promImages.keys().map((image) => promImages(image));

  return (
    <>
      <div className="h-56 sm:h-70 xl:h-80 2xl:h-96 bg-red-400 py-4 my-4 rounded-md">
        <Carousel pauseOnHover>
          {imageList.map((image, index) => {
            return (
              <Image 
                key={index} 
                src={image.default} 
                alt={`image-${index}`} 
                style={{
                    width: 'auto',
                    height: '90%',
                    objectFit:'contain'
                }}
              />
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
