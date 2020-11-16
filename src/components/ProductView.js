import React from "react";
import {
  ProductViewWrapper,
  InfoWrapper,
  ProductImg,
  ProductViewRemove,
  CounterWrapper,
} from "./StyledComponents";
import * as fa from "react-icons/fa";

function ProductView({ title, price, img, count }) {
  return (
    <ProductViewWrapper>
      <ProductViewRemove>
        <fa.FaTimes />
      </ProductViewRemove>
      <ProductImg src={img} alt="" />
      <InfoWrapper>
        <div>{title}</div>
        <div>price: {`${price}$`}</div>
      </InfoWrapper>
      <CounterWrapper>
        <fa.FaChevronLeft />
        <span>{count}</span>
        <fa.FaChevronRight />
      </CounterWrapper>
    </ProductViewWrapper>
  );
}

export default ProductView;
