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
            <h2 className="font-semibold text-xl text-yellow-600">
              Nuestros locales
            </h2>
            <p className="text-justify">
              En <strong>Munayco Pizzas</strong>, nos enorgullece ofrecer una
              experiencia excepcional en cada uno de nuestros locales. Desde el
              momento en que entras por nuestras puertas, te sumergirás en un
              ambiente acogedor y familiar que te hará sentir como en casa.
              Nuestros locales están cuidadosamente diseñados para brindar un
              ambiente cálido y acogedor. Con una decoración inspirada en la
              auténtica trattoria italiana, nuestras mesas y sillas están
              dispuestas de manera que te permitan disfrutar de la compañía de
              tus seres queridos mientras saboreas nuestras deliciosas pizzas.
              <br />
              La calidad es nuestra prioridad, por lo que sólo utilizamos solo
              los ingredientes más frescos y de la más alta calidad en cada una
              de nuestras creaciones. Desde nuestra masa artesanal, elaborada
              con harina de trigo premium y fermentada a la perfección, hasta
              nuestros exquisitos condimentos y quesos cuidadosamente
              seleccionados, cada bocado está lleno de sabor y frescura. Nuestra
              amplia variedad de opciones en el menú garantiza que haya algo
              para todos los gustos. Desde nuestras clásicas pizzas de pepperoni
              y margarita hasta nuestras creaciones gourmet con combinaciones
              únicas de ingredientes, estamos seguros de que encontrarás algo
              que te encante.
              <br /> En Munayco Pizzas, el cliente siempre es nuestra prioridad.
              Nuestro amable y atento personal está aquí para asegurarse de que
              tu experiencia sea impecable. Desde ofrecerte recomendaciones
              sobre nuestro menú hasta asegurarse de que tu pedido llegue
              caliente y rápido a tu mesa, estamos comprometidos a brindarte un
              servicio excepcional en todo momento. Ven y únete a nosotros en
              Munayco Pizzas, donde la buena comida y el buen ambiente se unen
              para crear recuerdos inolvidables. ¡Esperamos verte pronto en uno
              de nuestros locales!
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
            <h2 className="font-semibold text-xl text-yellow-600">
              Preparación
            </h2>
            <p>
              En <strong>Munayco Pizzas</strong>, la preparación de nuestras
              pizzas es todo un arte. Cada paso, desde la creación de la masa
              hasta el último toque de condimento, se realiza con pasión y
              dedicación para ofrecerte una experiencia culinaria verdaderamente
              excepcional. Todo comienza con nuestra masa artesanal, elaborada
              con los mejores ingredientes y amasada a la perfección para lograr
              una textura única y deliciosa. Nuestros chefs expertos trabajan
              con precisión y cuidado para estirar la masa a mano, creando una
              base perfecta para nuestras pizzas. Una vez que la masa está
              lista, llega el momento de añadir los ingredientes. <br /> De esta
              manera, solo utilizamos los ingredientes más frescos y de la más
              alta calidad. Desde nuestros tomates madurados al sol hasta
              nuestros quesos italianos importados, cada ingrediente se
              selecciona con esmero para garantizar un sabor excepcional en cada
              bocado. Nuestras pizzas se hornean en hornos de piedra a altas
              temperaturas, lo que asegura que la masa se cocine a la
              perfección, con un borde crujiente y un centro suave y esponjoso.
              Mientras se hornean, los deliciosos aromas de nuestros
              ingredientes se mezclan en el aire, creando una experiencia
              sensorial que te hará agua la boca. Una vez que nuestras pizzas
              salen del horno, nuestros chefs agregan los toques finales, como
              hierbas frescas, aceite de oliva virgen extra y una pizca de sal
              marina. Siendo, el resultado final, una obra maestra culinaria,
              lista para ser disfrutada por ti y tus seres queridos.
              <br />
              En Munayco Pizzas, la preparación de nuestras pizzas es más que
              una tarea, es una pasión. Cada pizza que sale de nuestra cocina
              está imbuida con el amor y la dedicación de nuestro talentoso
              equipo, y estamos seguros de que podrás saborear la diferencia en
              cada bocado.
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
