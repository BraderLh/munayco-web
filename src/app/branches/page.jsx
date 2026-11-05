import { Header } from "@/components/Header";
import BranchList from "@/components/branches/BranchList";

export default function BranchesPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-6 md:px-6">
        <section
          className="mb-8 rounded-lg bg-orange-400 p-5 shadow-sm md:p-8"
          aria-labelledby="branches-title"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
            Munayco Pizzas
          </p>
          <h1 id="branches-title" className="mt-1 text-3xl font-bold text-amber-100 md:text-4xl">
            Nuestras sucursales
          </h1>
          <p className="mt-4 max-w-4xl rounded-lg border-2 border-dashed border-amber-200 bg-orange-300 p-5 text-base leading-relaxed text-amber-800">
            Encuentra el local más cercano y disfruta una experiencia acogedora
            para compartir tus pizzas con amigos y familia. Consulta la dirección,
            el horario y la ubicación de cada sucursal.
          </p>
        </section>

        <section aria-labelledby="branches-list-title">
          <h2 id="branches-list-title" className="mb-4 text-2xl font-bold text-lime-800">
            Locales disponibles
          </h2>
          <BranchList />
        </section>
      </main>
    </>
  );
}
