import React from "react";
import { ProductWrapper, CartButton } from "./StyledComponents";

function Product({ img, onClick }) {
  return (
    <ProductWrapper>
      <img src={img} alt="" />
      <CartButton onClick={(e) => onClick(e)}>Add to Cart</CartButton>
    </ProductWrapper>
  );
}

export default Product;
