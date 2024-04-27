import Image from "next/image";
import { Carousel } from "flowbite-react";

export const CarouselHome = () => {
  const promImages = require.context("/public/images", false);
  const imageList = promImages.keys().map((image) => promImages(image));

  return (
    <>
      <div className="h-64 md:w-full md:h-80 2xl:h-96 bg-yellow-300 py-2 my-2 rounded-md border-2 border-dashed border-orange-400">
        <Carousel pauseOnHover>
          {imageList.map((image, index) => {
            return (
              <Image 
                key={index} 
                src={image.default} 
                alt={`image-${index}`}
                priority={true}
                style={{
                    // width: 'auto',
                    height: '100%',
                    maxWidth: '98%',
                    
                }}
              />
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
