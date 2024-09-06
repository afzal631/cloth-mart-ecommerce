import React from "react";

export default function RatingStar({ rating }) {
  const star = [];
  for (let i = 0; i <= 5; i++) {
    star.push(
      <span
        key={i}
        className={`ri-star${i <= rating ? "-fill" : "-line"}`}
      ></span>
    );
  }
  return <div className="product__rating">{star}</div>;
}
