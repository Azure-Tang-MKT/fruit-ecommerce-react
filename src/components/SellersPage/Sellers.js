import React from "react";

export const Seller = ({ seller }) => {
  return (
    <div>
      <h2>{seller.id}</h2>
      <img src={seller.avatarSrc} />
      <p>{seller.description}</p>
    </div>
  );
};

const Sellers = ({ sellers }) => {
  return (
    <div>
      {sellers.map((seller, index) => {
        return <Seller key={index} seller={seller} />;
      })}
    </div>
  );
};
export default Sellers;
