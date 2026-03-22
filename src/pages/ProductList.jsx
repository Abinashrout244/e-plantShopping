import Navbar from "../components/NavBar";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Medicinal" },
  { id: 2, name: "Tulsi", price: 8, category: "Medicinal" },
  { id: 3, name: "Mint", price: 6, category: "Aromatic" },
  { id: 4, name: "Lavender", price: 12, category: "Aromatic" },
  { id: 5, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 6, name: "Peace Lily", price: 20, category: "Indoor" },
];

function ProductList() {
  const dispatch = useDispatch();

  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-12 rounded-3xl border border-emerald-950/10 bg-white/70 p-8 shadow-[0_25px_70px_-45px_rgba(14,45,33,0.6)] backdrop-blur">
          <p className="mb-3 text-xs uppercase tracking-[0.5em] text-emerald-900/60">
            Signature Collection
          </p>
          <h1 className="mb-3 text-4xl font-semibold text-emerald-950">
            Botanical Luxury for Modern Interiors
          </h1>
          <p className="max-w-2xl text-emerald-900/70">
            Discover living pieces chosen for texture, form, and easy care. Each
            plant arrives ready to elevate calm, refined spaces.
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-3xl font-semibold text-emerald-950">
                {cat} Plants
              </h2>
              <span className="text-xs uppercase tracking-[0.4em] text-emerald-900/50">
                Limited Series
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {plants
                .filter((p) => p.category === cat)
                .map((p) => (
                  <div
                    key={p.id}
                    className="group rounded-3xl border border-emerald-950/10 bg-white/80 p-6 shadow-[0_18px_50px_-35px_rgba(14,45,33,0.7)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-35px_rgba(14,45,33,0.8)]"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.4em] text-emerald-900/45">
                          Estate Line
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-emerald-950">
                          {p.name}
                        </h3>
                      </div>
                      <div className="h-12 w-12 rounded-full border border-amber-700/40 bg-amber-500/10" />
                    </div>
                    <p className="text-lg text-emerald-900/80">
                      Rs. {p.price}
                    </p>
                    <button
                      className="mt-6 w-full rounded-full border border-emerald-900/10 bg-emerald-950 px-5 py-3 text-xs uppercase tracking-[0.35em] text-amber-50 transition group-hover:bg-emerald-900"
                      onClick={() => dispatch(addToCart(p))}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;