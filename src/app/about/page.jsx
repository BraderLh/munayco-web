import Image from "next/image";
import React from "react";

const AboutUsPage = () => {
  return (
    <main className="container flex flex-col mx-auto p-5 h-full gap-y-2 m-2">
      <div>
        <h1 className="font-bold text-4xl text-rose-600 mb-3">
          Acerca de nosotros
        </h1>
      </div>
      <div className="grid gap-4 grid-auto-rows p-4 bg-amber-600 rounded-md">
        <div>
          <section className="flex flex-col space-y-4 bg-amber-400 justify-center rounded-md p-2">
            <h2 className="font-semibold text-2xl text-lime-700">Misión</h2>
            <p className="text-justify">
              En <strong>Munayco Pizza</strong>, nuestra misión es simple pero
              poderosa: ofrecer la mejor experiencia culinaria a nuestros
              clientes a través de nuestra pasión por la pizza. Desde nuestros
              humildes comienzos como una pequeña pizzería local hasta
              convertirnos en una marca reconocida a nivel nacional, nos hemos
              dedicado a elevar el estándar de la pizza a nuevas alturas.
              Nuestro equipo está comprometido a brindar una experiencia
              inolvidable a cada uno de nuestros clientes, ya sea que estén
              disfrutando de una comida rápida en uno de nuestros locales o
              celebrando una ocasión especial en casa con una de nuestras pizzas
              para llevar.
              <br /><br/>
              Además de nuestra pasión por la pizza, también estamos
              comprometidos con nuestra comunidad y nuestro medio ambiente. Nos
              esforzamos por ser un miembro activo y responsable de las
              comunidades en las que operamos, apoyando causas locales y
              participando en iniciativas de sostenibilidad para reducir nuestro
              impacto en el medio ambiente. En Munayco Pizzas, estamos
              orgullosos de ser más que una simple pizzería; somos una
              experiencia culinaria, una comunidad y una familia. Desde nuestros
              fieles clientes hasta nuestro dedicado equipo, todos formamos
              parte de la familia Munayco Pizzas, y estamos encantados de
              compartir nuestra pasión por la pizza con el mundo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2 p-10">
              <div>
                <Image
                  width={500}
                  height={300}
                  src="/images/aboutus/interior1.jpg"
                  alt="interior-1"
                  className="rounded-lg"
                  style={{ width: "100%", height: "auto" }}
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
                  style={{ width: "100%", height: "auto" }}
                ></Image>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="flex flex-col space-y-4 bg-amber-400 justify-center rounded-md p-2">
            <h2 className="font-semibold text-2xl text-lime-700">Preparación</h2>
            <p className="text-pretty">
              En <strong>Munayco Pizzas</strong>, la preparación de nuestras
              pizzas es todo un arte. Cada paso, desde la creación de la masa
              hasta el último toque de condimento, se realiza con pasión y
              dedicación para ofrecerte una experiencia culinaria verdaderamente
              excepcional. Todo comienza con nuestra masa artesanal, elaborada
              con los mejores ingredientes y amasada a la perfección para lograr
              una textura única y deliciosa. Nuestros chefs expertos trabajan
              con precisión y cuidado para estirar la masa a mano, creando una
              base perfecta para nuestras pizzas. Una vez que la masa está
              lista, llega el momento de añadir los ingredientes. De esta
              manera, solo utilizamos los ingredientes más frescos y de la más
              alta calidad para que te delietes cada uno de los platos que
              podemos ofrecerte.
              <br /> <br/>Desde nuestros tomates madurados al sol hasta nuestros
              quesos italianos importados, cada ingrediente se selecciona con
              esmero para garantizar un sabor excepcional en cada bocado.
              Nuestras pizzas se hornean en hornos de piedra a altas
              temperaturas, lo que asegura que la masa se cocine a la
              perfección, con un borde crujiente y un centro suave y esponjoso.
              Mientras se hornean, los deliciosos aromas de nuestros
              ingredientes se mezclan en el aire, creando una experiencia
              sensorial que te hará agua la boca. Una vez que nuestras pizzas
              salen del horno, nuestros chefs agregan los toques finales, como
              hierbas frescas, aceite de oliva virgen extra y una pizca de sal
              marina. Siendo, el resultado final, una obra maestra culinaria,
              lista para ser disfrutada por ti y tus seres queridos.
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
