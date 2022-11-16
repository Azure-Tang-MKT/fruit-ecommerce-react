import React from "react";
import { useParams } from "react-router-dom";
import { sellers } from "../../data";
import "./ItemSpecs.scss";

const ItemSpecs = ({ items }) => {
  const { idItem } = useParams();
  const item = items.find((el) => el.id === idItem);
  return (
    <div className="item_specs">
      <img src={item.imageSrc}></img>
      <div className="text_specs">
        <h2>{item.name}</h2>
        <p>{item.latinName}</p>
        <p>{item.description}</p>
        <p>Product of {item.countryOfOrigin}</p>
        <button>
          {(item.quantity = 0 ? `Sold Out` : `$ ${item.price} - Buy Now`)}
        </button>
        <div className="seller_store">
          <div>
            <image src="sellers.avatarSrc"></image>
            {sellers.avatarSrc}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemSpecs;
