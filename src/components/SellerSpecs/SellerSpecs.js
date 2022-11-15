import React from "react";
import { useParams } from "react-router-dom";
import "./SellerSpecs.scss";

export const Fruit = ({ item }) => {
  return (
    <div className="item">
      <img src={item.imageSrc}></img>
      <div className="back_square"></div>
      <h3>{item.name}</h3>
      <hr />
      <p>{item.latinName}</p>
    </div>
  );
};

const SellerSpecs = (items) => {
  const { sellerid } = useParams();
  return (
    <div className="seller_page">
      Book {sellerid}
      <div>
        {items.filter((item) => {
          item.sellerid = sellerid;
          return <Fruit item={item} />;
        })}
      </div>
    </div>
  );
};

export default SellerSpecs;
