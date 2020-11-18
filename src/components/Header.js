import React, {useState } from "react";
import Sidebar from "./Sidebar";
import { HeaderWrapper, ShoppingBtn, ShoppingSpan } from "./StyledComponents";
import * as fa from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ productCount,productView ,count}) {
  const [showSidebar,setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(true)
  }
  const handlehide = () => {
    setShowSidebar(false);
  }
  return (
    <HeaderWrapper>
      <fa.FaBars />
      <Link to="/">header</Link>
      <ShoppingBtn>
        <fa.FaShoppingCart onClick={handleSidebar} />
        {productCount !== 0 && <ShoppingSpan>{productCount}</ShoppingSpan>}
      </ShoppingBtn>
      <Sidebar onClick={handlehide} showSidebar={showSidebar} productView={productView} count={count}  />
    </HeaderWrapper>
  );
}

export default Header;
