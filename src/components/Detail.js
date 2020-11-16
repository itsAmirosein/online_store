import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  DetailProduct,
  DetailInfo,
  DetailDesc,
  DetailProperty,
  DetailImg,
  RelatedProducts,
  RelatedTitle
} from "./StyledComponents";
import Product from "./Product";
function Detail({ products ,onClick}) {
  const match = useRouteMatch();
  const product = products.find((product) => product.id === match.params.id);
  const related = products.filter(
    (relatedProduct) =>
      relatedProduct.category === product.category &&
      relatedProduct.id !== product.id
  );
  console.log(product);
  return (
    <>
      <DetailProduct>
        <DetailInfo>
          <DetailImg src={product.image_url} alt="" />
          <DetailProperty>
            <h1>{product.title}</h1>
            <p>price: {product.price}$</p>
            <p>category: {product.category}</p>
          </DetailProperty>
        </DetailInfo>
        <DetailDesc>{product.description}</DetailDesc>
      </DetailProduct>
      <RelatedTitle>Related products</RelatedTitle>
      <RelatedProducts>
        
        {related.map((item) => {
          return (
            <Link key={item.id} to={`/detail/${item.id}`}>
              <Product
                img={item.image_url}
                onClick={(e) => onClick(e, item.id)}
              />
            </Link>
          );
        })}
      </RelatedProducts>
    </>
  );
}

export default Detail;
