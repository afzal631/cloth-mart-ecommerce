import React from "react";
import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";

export default function HeroSection() {
  const cards = [
    {
      id: 1,
      image: card1,
      title: "Womens Shirts",
    },
    {
      id: 2,
      image: card2,
      title: "Womens Dresses",
    },
    {
      id: 3,
      image: card3,
      title: "Womens Casuals",
    },
  ];
  return (
    <section className="section__container hero__container">
      {cards.map((card) => {
        return (
          <div key={card.id} className="hero__card">
            <img src={card.image} alt="" />
            <div className="hero__content">
              <p>{card.trend}</p>
              <h4>{card.title}</h4>
              <a href="#">Discover More</a>
            </div>
          </div>
        );
      })}
    </section>
  );
}
