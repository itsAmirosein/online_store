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


function Home({ onClick,products }) {
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
        {products.map((product) => {
          return (
            <Link key={product.id} to={`/detail/${product.id}`}>
              <Product
                img={product.image_url}
                onClick={(e) => onClick(e, product.id)}
              />
            </Link>
          );
        })}
      </ProductContainer>
    </div>
  );
}

export default Home;
