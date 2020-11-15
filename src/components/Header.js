import React, { useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { HeaderWrapper, ShoppingBtn, ShoppingSpan } from "./StyledComponents";
import * as fa from "react-icons/fa";

function Header({ value }) {
  return (
    <HeaderWrapper>
      <fa.FaBars />
      <span>header</span>
      <ShoppingBtn>
        <fa.FaShoppingCart />
        {value !== 0 && <ShoppingSpan>{value}</ShoppingSpan>}
      </ShoppingBtn>
      {/*<Sidebar />*/}
    </HeaderWrapper>
  );
}

export default Header;
