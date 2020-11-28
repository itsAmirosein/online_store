import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { PRODUCTS } from "./components/productsData";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
let count = 1;
function App() {
  const [currentShop, setCurrentShop] = useState([]);
  // const [len, setLen] = useState(0);

  const handleShopping = (e, id) => {
    e.preventDefault();

    const FoundedData = PRODUCTS.find((product) => product.id === id);

    // const y = currentShop.filter((item) => item.id === id);
    if (currentShop.length > 0) {
      const copyCurrentShop = [...currentShop]
      const currentShopItem = { ...currentShop.find(item => item.id === id) }
      if (Object.getOwnPropertyNames(currentShopItem).length > 0) {
        const itemIndex = currentShop.findIndex(item => item.id === id)
        ++currentShopItem.counter;
        copyCurrentShop[itemIndex] = currentShopItem
        setCurrentShop(copyCurrentShop)
      }
      else {
        copyCurrentShop.push(FoundedData)
        setCurrentShop(copyCurrentShop)
      }
    }
    else {
      const copyCurrentShop = [...currentShop]
      copyCurrentShop.push(FoundedData)
      setCurrentShop(copyCurrentShop)
    }


    // setLen(currentShop.length);
  };

  const hadelCounter = (changeValue, itemId) => {
    const item = { ...currentShop.find(item => item.id === itemId) }
    if (changeValue === 'remove'&&item.counter > 1) {
    
        const copyCurrentShop = [...currentShop]
        const itemIndex = currentShop.findIndex(item => item.id === itemId)
        --item.counter
        copyCurrentShop[itemIndex] = item
        setCurrentShop(copyCurrentShop)
      
    }
    else if (changeValue === 'add') {
      const copyCurrentShop = [...currentShop]
      const itemIndex = currentShop.findIndex(item => item.id === itemId)
      ++item.counter
      copyCurrentShop[itemIndex] = item
      setCurrentShop(copyCurrentShop)

    }
  }
  const handelRemove = (itemId) => {
    let copyCurrentShop = [...currentShop]
    copyCurrentShop = copyCurrentShop.filter(item => item.id !== itemId)
    setCurrentShop(copyCurrentShop)

  }



  return (
    <Router>
      <Header productView={currentShop} hadelCounter={hadelCounter} handelRemove={handelRemove} />
      <Switch>
        <Route path="/" exact>
          <Home onClick={handleShopping} products={PRODUCTS} />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/detail/:id?">
          <Detail products={PRODUCTS} onClick={handleShopping} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
