import React from "react";
import { useParams } from "react-router-dom";

const ItemSpecs = ({ items }) => {
  const { idItem } = useParams();
  const item = items.find((el) => (el.id = idItem));
  return (
    <div className="item_specs">
      <img src={item.imageSrc}></img>
      <h2>{item.name}</h2>
    </div>
  );
};
export default ItemSpecs;
