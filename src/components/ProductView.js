import React from "react";
import {
  ProductViewWrapper,
  InfoWrapper,
  ProductImg,
  ProductViewRemove,
  CounterWrapper,
  DiscountPrice,
} from "./StyledComponents";
import * as fa from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductView({ title, price, img, count, special, id,closeSidebar }) {
  const discountPrice = Math.floor(price / 2);
  return (
    <ProductViewWrapper>
      <ProductViewRemove>
        <fa.FaTimes />
      </ProductViewRemove>
      <Link to={`/detail/${id}`}>
        <ProductImg src={img} alt="" onClick={closeSidebar} />
      </Link>
      <InfoWrapper>
        <div>{title}</div>
        {!special && <span> {price}$</span>}
        {special && (
          <span>
            <DiscountPrice> {price}$</DiscountPrice> / {discountPrice}$
          </span>
        )}
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
