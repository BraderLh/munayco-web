import Image from "next/image";

const preparationSteps = [
  {
    number: "01",
    title: "Preparamos la masa",
    description: "Estiramos la masa artesanal hasta conseguir la base de cada pizza.",
    image: "/images/aboutus/munayco-preparacion-v2.webp",
    alt: "Preparación artesanal de la masa para pizza",
  },
  {
    number: "02",
    title: "Añadimos los ingredientes",
    description: "Distribuimos la salsa, el queso y los ingredientes de cada receta.",
    image: "/images/aboutus/proceso-ingredientes.webp",
    alt: "Ingredientes frescos colocados sobre una pizza artesanal",
  },
  {
    number: "03",
    title: "Horneamos la pizza",
    description: "El horno dora la masa y funde los sabores antes de servirla.",
    image: "/images/aboutus/proceso-horneado.webp",
    alt: "Pizza artesanal entrando a un horno encendido",
  },
  {
    number: "04",
    title: "Lista para compartir",
    description: "Servimos la pizza recién horneada, cortada y lista para disfrutar.",
    image: "/images/aboutus/proceso-pizza-lista.webp",
    alt: "Pizza recién horneada servida sobre una tabla de madera",
  },
];

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
                src="/images/aboutus/munayco-interior-v2.webp"
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
                src="/images/aboutus/munayco-preparacion-organizada-v2.webp"
                alt="Masa en reposo e ingredientes organizados para preparar pizzas"
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
          aria-labelledby="preparation-process-title"
        >
          <div className="mx-auto mb-6 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-lime-700">
              De la masa a tu mesa
            </p>
            <h2
              id="preparation-process-title"
              className="mt-1 text-2xl font-bold text-amber-900 md:text-3xl"
            >
              Así preparamos tu pizza
            </h2>
            <p className="mt-2 leading-relaxed text-amber-900">
              Conoce los cuatro momentos que convierten nuestros ingredientes
              en una pizza lista para compartir.
            </p>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {preparationSteps.map((step) => (
              <li
                key={step.number}
                className="group overflow-hidden rounded-xl border border-orange-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-amber-100">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-lime-700 text-sm font-bold text-white">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-lime-800">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-amber-900">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
};

export default AboutUsPage;
