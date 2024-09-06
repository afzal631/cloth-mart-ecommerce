import React from "react";
import { Link } from "react-router-dom";
import bannerimg from "../../assets/header.png";

export default function Banner() {
  return (
    <div className="section__container header__container">
      <div className="header__content z-30">
        <h4 className="upercase">UP TO 20% discount on</h4>
        <h1>Girl's Fashion</h1>
        <p>
          Discover the hottest picks: Elavate your style with our current
          collection of trending women's fashion products.
        </p>
        <button className="btn">
          <Link to="/shop">Explore now</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerimg} alt="banner_image" />
      </div>
    </div>
  );
}
