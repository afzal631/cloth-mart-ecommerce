import React, { useState } from "react";
import ProductCards from "./ProductCards";
import products from "../../data/products.json";

export default function TrendingProducts() {
  const [visibleProduct, setVisibleproduct] = useState(8);
  const loadMoreProduct = () => {
    setVisibleproduct((prev) => prev + 4);
  };
  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Product</h2>
      <p className="section__subheader mb-12">
        Discover the hottest picks: Elavate your style with our current
        collection of trending women's fashion products.
      </p>

      <ProductCards products={products.slice(0, visibleProduct)} />

      <div className="product__btn">
        {visibleProduct < products.length && (
          <button className="btn" onClick={loadMoreProduct}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
}
