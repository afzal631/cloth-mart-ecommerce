import React, { useState } from "react";
import productsData from "../../data/products.json";
import ProductCards from "../shop/ProductCards";

export default function SearchProduct() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = productsData.filter((product) =>
      product.name.toLocaleLowerCase().includes(query)
    );

    setFilteredProducts(filtered);
  };
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Search Product</h2>
        <p className="section__subheader">
          Browse a diverse range of categories, from chic dresses to versatile
          accessories. Elevate your style today!
        </p>
      </section>

      <section className="section__container">
        <div className="w-full mb-12 flex flex-col md:flex-row item-center justify-center gap-4">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search for product..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar w-full max-w-4xl p-2 rounded border-1"
          />
          <button
            onClick={handleSearch}
            className="search-button w-full md:w-auto py-2 px-8 bg-primary text-white"
          >
            Search
          </button>
        </div>

        <ProductCards products={filteredProducts} />
      </section>
    </>
  );
}
