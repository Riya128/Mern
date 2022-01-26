import React from "react";
import { Link } from "react-router-dom";
import "../Home/Home.css";
import { Rating } from "@material-ui/lab";

function Product({ product }) {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <Rating {...options} />
      <span className="productCardSpan">{product.numOfReviews} Reviews</span>
      <span>{`₹ ${product.price}`}</span>
    </Link>
  );
}

export default Product;
