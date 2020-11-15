import React from "react";
import Product from "./Product";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import {
  BgWrapper,
  ShopNowWrapper,
  ShowNowText,
  ShowNowButton,
  ProductTitle,
  ProductContainer,
} from "./StyledComponents";

function Home({ onClick }) {
  return (
    <div>
      <BgWrapper>
        <ShopNowWrapper>
          <ShowNowText>Best Store In World</ShowNowText>
          <ShowNowButton>Shop now</ShowNowButton>
        </ShopNowWrapper>
      </BgWrapper>
      <ProductTitle>Best Sellers</ProductTitle>
      <ProductContainer>
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <Link key={item} to={`/detail/${item}`}>
              <Product
                img={`https://www.unsplash.it/350/200/?${item}`}
                onClick={(e) => onClick(e, item)}
              />
            </Link>
          );
        })}
      </ProductContainer>
    </div>
  );
}

export default Home;
