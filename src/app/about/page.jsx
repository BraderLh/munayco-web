import Image from "next/image";
import React from "react";

const AboutUsPage = () => {
  return (
    <main className="container mx-auto p-5 h-full">
      <h1 className="font-bold text-2xl">Acerca de Munayco Pizzas</h1>
      <div className="grid gap-4 grid-auto-rows p-4">
        <div>
          <section className="bg-red-300 justify-center rounded-md p-2">
            <h2 className="font-bold text-lg">Nuestros locales</h2>
            <p className="text-justify">
              Lorem ipsum dolor sit amet. At explicabo facilis a Quis earum ut
              excepturi inventore. Vel repellat commodi et atque explicabo ea
              omnis aliquid non quisquam quisquam id nobis omnis nam minima
              accusantium! Et iure culpa 33 quaerat architecto quo explicabo
              consectetur ex libero labore ut blanditiis autem in sapiente
              architecto. Et eius nemo hic similique asperiores in inventore
              maiores nam doloribus praesentium a sint accusantium! Ut obcaecati
              reprehenderit sit quas libero et exercitationem rerum et itaque
              expedita! Aut sunt accusantium et dolore velit et officiis
              voluptatem qui eligendi voluptate. Et aspernatur velit ad galisum
              minus eos ducimus ullam ut excepturi quia qui quae quia! Rem
              quisquam consequatur qui deleniti omnis qui nihil fugit vel
              eligendi quam et molestiae ullam sit aspernatur dignissimos ea
              placeat obcaecati.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2 p-10">
              <div>
                <Image
                  width={500}
                  height={300}
                  src="/images/aboutus/interior1.jpg"
                  alt="interior-1"
                  className="rounded-lg"
                  style={{ width: "100%", height: 'auto' }}
                  priority={true}
                ></Image>
              </div>
              <div>
                <Image
                  width={500}
                  height={300}
                  src="/images/aboutus/interior2.jpg"
                  alt="interior-1"
                  className="rounded-lg"
                  style={{ width: "100%", height: 'auto' }}
                ></Image>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="bg-red-300 justify-center rounded-md p-2">
            <h2 className="font-bold text-lg">Preparación</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                voluptatum ad architecto perferendis, totam repellendus perspiciatis
                aperiam earum dignissimos laudantium autem alias ut necessitatibus
                error quisquam veritatis soluta, facilis nobis.
            </p>
            <div className="border border-white rounded-lg m-4 p-4">
                <iframe
                    src="https://www.youtube.com/embed/1BYHdXjjufU?si=94D2wWH53BF925tH"
                    allowFullScreen
                    title="Pizzas Munyaco"
                    allow="accelerometer: autoplay"
                    className="w-full aspect-video sm:w-[600px] md:w-[1000px] h-60 md:h-96 mx-auto"
                />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutUsPage;
