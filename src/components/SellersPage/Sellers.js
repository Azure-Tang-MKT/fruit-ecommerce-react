import React from "react";
import { Link } from "react-router-dom";
import "./Sellers.scss";

export const Seller = ({ seller }) => {
  return (
    <Link to={`/sellers/${seller.id}`}>
      <div className="seller_each">
        <h2>{seller.id}</h2>
        <img src={seller.avatarSrc} />
        <p>{seller.description}</p>
      </div>
    </Link>
  );
};

const Sellers = ({ sellers }) => {
  return (
    <div className="seller_list">
      {sellers.map((seller, index) => {
        return <Seller key={index} seller={seller} />;
      })}
    </div>
  );
};
export default Sellers;
