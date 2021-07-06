import React from "react";
import "./item-card.css";
import BasketIcon from "../svg/basket/basket";

function ItemCard(props) {
  const { title, img, description, weight, price, showItem } = props;

  return (
    <div onClick={showItem}>
      <div className="item-card">
        <div className="item-card__container">
          <div className="item-card__img-section">
            <img
              className="item-card__img-section--img"
              src={img}
              alt="'test'"
            ></img>
          </div>
          <div className="item-card__details-section">
            <span className="item-card__details-section__title">{title}</span>
            <span className="item-card__details-section__description">
              {description}
            </span>
            <span className="item-card__details-section__weight">{weight}</span>
            <span className="item-card__details-section__price">
              &#36;{price}
            </span>
            <button className="green add-button h5-medium">
              <i>
                <BasketIcon />
              </i>{" "}
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
