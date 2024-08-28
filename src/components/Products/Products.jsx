import Counter from "../Counter/Counter";
import Product from "../Product/Product";
import Style from "./Products.module.css";

export default function Products() {
  let title = "Learn how to create apps with reactjs 2024";
  let showList = true;
  let products = [
    {
      id: 1,
      label: "Iphone 14",
      price: 3000,
    },
    {
      id: 2,
      label: "Iphone 13",
      price: 2000,
    },
    {
      id: 3,
      label: "Iphone 12",
      price: 2000,
    },
  ];

  return (
    <>
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit.</p>
      <Counter />

      {showList && (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <Product>
                <h2>{product.label}</h2>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  {product.price}
                </button>
              </Product>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
