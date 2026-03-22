import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/CartSlice";
import Navbar from "../components/NavBar";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    category: "Medicinal",
    img: "https://tse4.mm.bing.net/th/id/OIP.qsEKcXhlx2_wdMZdgL0dLAHaFF?pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "Tulsi",
    price: 8,
    category: "Medicinal",
    img: "https://www.grunge.com/img/gallery/why-some-hindu-homes-have-four-deities-surrounding-the-tulsi-plant/intro-1665166756.jpg",
  },
  {
    id: 3,
    name: "Mint",
    price: 6,
    category: "Aromatic",
    img: "https://tse2.mm.bing.net/th/id/OIP.LhEQZwJyW7fJXhh8bqeemwHaEJ?pid=Api&P=0&h=180",
  },
  {
    id: 4,
    name: "Lavender",
    price: 12,
    category: "Aromatic",
    img: "https://tse1.mm.bing.net/th/id/OIP.EonRHLJBznLJMbFD_pBsJgHaEJ?pid=Api&P=0&h=180",
  },
  {
    id: 5,
    name: "Snake Plant",
    price: 15,
    category: "Indoor",
    img: "https://tse1.mm.bing.net/th/id/OIP.caHvEfjYTkIgJUsbr2l7_gHaFE?pid=Api&P=0&h=180",
  },
  {
    id: 6,
    name: "Peace Lily",
    price: 20,
    category: "Indoor",
    img: "https://tse3.mm.bing.net/th/id/OIP.W31UFwpXBzvRRvymeBbI6wHaE8?pid=Api&P=0&h=180",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isAdded = (id) => cartItems.some((item) => item.id === id);

  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <>
      <Navbar />

      <div className="p-6 space-y-10">
        {categories.map((cat) => (
          <div key={cat}>
            {/* Category Title */}
            <h2 className="text-2xl font-bold mb-4 text-green-700">{cat}</h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {plants
                .filter((p) => p.category === cat)
                .map((p) => (
                  <div
                    key={p.id}
                    className="border border-gray-200 rounded-2xl shadow-md p-4 hover:shadow-lg transition"
                  >
                    {/* IMAGE */}
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />

                    {/* CONTENT */}
                    <div className="mt-3 space-y-1">
                      <h3 className="text-lg font-semibold">{p.name}</h3>
                      <p className="text-green-600 font-bold">₹{p.price}</p>
                    </div>

                    {/* BUTTON */}
                    <button
                      disabled={isAdded(p.id)}
                      className={`mt-3 w-full py-2 rounded-lg text-white font-medium transition ${
                        isAdded(p.id)
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                      onClick={() => dispatch(addItem(p))}
                    >
                      {isAdded(p.id) ? "Added to Cart" : "Add to Cart"}
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
