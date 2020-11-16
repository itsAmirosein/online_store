import React, { useEffect, useState } from "react";
import { SidebarWrapper, CloseBtn } from "./StyledComponents";
import * as fa from "react-icons/fa";
import ProductView from "./ProductView";

function Sidebar({ onClick, showSidebar, productView, count }) {
  const [products, setProducts] = useState(productView);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setProducts(productView);
  }, [productView]);
  // const handleMinus = (id) => {
  //   if(count > 1){
  //     setCount((prevState) => prevState - 1);
  //   }else{
  //     const j = products.findIndex(item => item.id !== id);
  //     const v = products.splice(j,1);
  //     setProducts(v);
  //   }
  // };
  // const handlePlus = () => {

  //   setCount((prevState) => prevState + 1);
  // };


  return (
    <SidebarWrapper showSidebar={showSidebar}>
      <CloseBtn onClick={onClick}>
        <fa.FaTimes />
      </CloseBtn>
      {products
        ? products.map((product) => {
            return (
              <ProductView
                key={product.id}
                img={product.image_url}
                title={product.title}
                price={product.price}
                count={count}
              />
            );
          })
        : null}
      <div>Total : {total}</div>
    </SidebarWrapper>
  );
}

export default Sidebar;
