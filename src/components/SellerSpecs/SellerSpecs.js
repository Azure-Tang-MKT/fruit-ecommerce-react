import React from "react";
import { useParams } from "react-router-dom";

const SellerSpecs = () => {
  const { sellerid } = useParams();
  return <div>Book {sellerid}</div>;
};

export default SellerSpecs;
