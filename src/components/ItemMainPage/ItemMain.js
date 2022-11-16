import React from "react";
import "./ItemMain.scss";
import { Link } from "react-router-dom";

export const Fruit = ({ item }) => {
  console.log(item);
  return (
    <Link to={`/items/${item.id}`}>
      <div className="item">
        <img src={item.imageSrc}></img>
        <div className="back_square"></div>
        <div className="info_text">
          <h3>{item.name}</h3>
          <hr />
          <p>{item.latinName}</p>
        </div>
      </div>
    </Link>
  );
};

function ItemMain({ items }) {
  return (
    <div className="main_page">
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <h2>Browse items:</h2>
      <div className="item_list">
        {items.map((item, index) => {
          return <Fruit key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default ItemMain;
