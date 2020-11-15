import styled from "styled-components";

export const HeaderWrapper = styled.div`
  max-width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  svg {
    font-size: 1.4rem;
  }
`;

export const BgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  background-image: url("https://www.unsplash.it/1400/600");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShopNowWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 95%;
  width: 600px;
  height: 200px;
  background-color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;
export const ShowNowText = styled.h1`
  line-height: normal;
  color: #222;
`;

export const ShowNowButton = styled.button`
  border: none;
  outline: none;
  padding: 7px 12px;
  background-color: orange;
  color: #222;
  font-size: 1.3rem;
`;
export const ProductTitle = styled.h1`
  text-align: center;
  line-height: normal;
  font-size: 2.3rem;
`;

export const ProductContainer = styled.div`
  width: 1400px;
  max-width: 95%;
  position: relative;
  height: auto;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const ProductWrapper = styled.div`
  position: relative;
  width: 350px;
  max-width: 95%;
  height: 200px;
  background-color: #ddd;
  margin: 10px;
  z-index: 1;
  cursor: pointer;
  &:hover {
    > div {
      opacity: 1;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CartButton = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 100px;
  height: 40px;
  background-color: orange;
  color: #222;
  cursor: pointer;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  z-index: 2;
`;

export const ShoppingBtn = styled.button`
  position: relative;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const ShoppingSpan = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 50%;
  color: #fff;
  width: 15px;
  height: 15px;
  right: 0px;
  top: 0px;
`;
