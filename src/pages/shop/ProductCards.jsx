import React from "react";
import { Link } from "react-router-dom";
import RatingStar from "../../components/RatingStar";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/CartSlice";

export default function ProductCards({ products }) {
  const dispatch = useDispatch();
  const handleAddToCart = (products) => {
    dispatch(addToCart(products));
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, id) => (
        <div key={id} className="product__card">
          <div className="relative">
            <Link to={`/shop/${product.__id}`}>
              <img
                src={product.image}
                alt="product image"
                className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300"
              />
            </Link>
            <div className="hover:block absolute top-3 right-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                <i className="ri-shopping-cart-2-line bg-primary p-1.5 text-white hover:bg-primary-dark" />
              </button>
            </div>
          </div>

          <div>
            <h4>{product.name}</h4>
            <p>
              ${product.price}{" "}
              {product.oldPrice ? <s>${product?.oldPrice}</s> : null}
              <RatingStar rating={product.rating} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
