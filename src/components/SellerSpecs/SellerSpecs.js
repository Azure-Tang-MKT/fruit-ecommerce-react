import React from "react";
import { useParams } from "react-router-dom";
import "./SellerSpecs.scss";
import { Fruit } from "../ItemMainPage/ItemMain";

const SellerSpecs = ({ items }) => {
  const { sellerid } = useParams();
  console.log(typeof sellerid);
  const filterid = items.filter((item) => item.sellerId == sellerid);

  return (
    <div className="item_list">
      {filterid.map((item) => {
        return <Fruit key={item.id} item={item} />;
      })}
    </div>
  );
};

export default SellerSpecs;
