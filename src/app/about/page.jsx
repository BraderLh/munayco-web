import Image from "next/image";

const AboutUsPage = () => {
  return (
    <main className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <header className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
          La historia detrás de cada pizza
        </p>
        <h1 className="mt-2 text-4xl font-bold text-rose-600 md:text-5xl">
          Acerca de nosotros
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-amber-900">
          En Munayco Pizzas convertimos ingredientes seleccionados, masa artesanal
          y un horno caliente en momentos para compartir.
        </p>
      </header>

      <div className="mx-auto mt-10 max-w-6xl space-y-8">
        <article className="overflow-hidden rounded-2xl border-2 border-orange-200 bg-amber-50 shadow-lg">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 md:p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
                Nuestra esencia
              </p>
              <h2 className="mt-2 text-3xl font-bold text-lime-800">
                Una pizza para compartir
              </h2>
              <p className="mt-5 leading-relaxed text-amber-950">
                Nuestra misión es ofrecer una experiencia culinaria cercana y
                memorable a través de nuestra pasión por la pizza. Cada pedido,
                visita y celebración nos inspira a cuidar los detalles y a
                recibir a cada cliente como parte de la familia Munayco.
              </p>
              <p className="mt-4 leading-relaxed text-amber-950">
                También buscamos ser un miembro responsable de nuestra
                comunidad, apoyando iniciativas locales y reduciendo nuestro
                impacto en el entorno siempre que sea posible.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-lime-100 p-4">
                  <p className="font-bold text-lime-800">Masa artesanal</p>
                  <p className="mt-1 text-sm text-amber-900">
                    Preparada con cuidado para cada pizza.
                  </p>
                </div>
                <div className="rounded-xl bg-orange-100 p-4">
                  <p className="font-bold text-orange-800">Para compartir</p>
                  <p className="mt-1 text-sm text-amber-900">
                    Sabores pensados para disfrutar juntos.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[280px] lg:min-h-full">
              <Image
                src="/images/aboutus/munayco-interior-v2.png"
                alt="Interior acogedor de una pizzería Munayco con horno y pizza"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
        </article>

        <article className="overflow-hidden rounded-2xl border-2 border-orange-200 bg-orange-50 shadow-lg">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[280px] lg:order-first lg:min-h-full">
              <Image
                src="/images/aboutus/munayco-preparacion-v2.png"
                alt="Preparación artesanal de masa e ingredientes frescos para pizza"
                fill
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
                Nuestro proceso
              </p>
              <h2 className="mt-2 text-3xl font-bold text-lime-800">
                Preparación con intención
              </h2>
              <p className="mt-5 leading-relaxed text-amber-950">
                Todo comienza con una masa artesanal, estirada a mano para
                conseguir un borde crujiente y un centro suave. Después
                añadimos salsa, queso, hierbas y los ingredientes que dan
                identidad a cada receta.
              </p>
              <p className="mt-4 leading-relaxed text-amber-950">
                Finalmente, nuestras pizzas pasan por el horno a alta
                temperatura y reciben los últimos toques antes de llegar a tu
                mesa. Es un proceso sencillo, cuidado y lleno de sabor.
              </p>
            </div>
          </div>
        </article>

        <section
          className="rounded-2xl border-2 border-dashed border-lime-500 bg-lime-50 p-4 shadow-sm md:p-6"
          aria-labelledby="preparation-video-title"
        >
          <div className="mb-4 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-lime-700">
              Conoce nuestro trabajo
            </p>
            <h2 id="preparation-video-title" className="mt-1 text-2xl font-bold text-amber-900">
              Del horno a tu mesa
            </h2>
          </div>
          <div className="aspect-video overflow-hidden rounded-xl border border-white bg-black shadow-md">
            <iframe
              src="https://www.youtube.com/embed/1BYHdXjjufU?si=94D2wWH53BF925tH"
              allowFullScreen
              title="Preparación de pizzas Munayco"
              allow="accelerometer; autoplay"
              className="h-full w-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUsPage;
