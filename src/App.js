import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { PRODUCTS } from "./components/productsData";
let count = 1;
function App() {
  const [currentShop, setCurrentShop] = useState([]);
  const [len, setLen] = useState(0);

  const handleShopping = (e, id) => {
    e.preventDefault();

    const FoundedData = PRODUCTS.find((product) => product.id === id);

    const y = currentShop.filter((item) => item.id === id);
    if (y.length === 0) {
      currentShop.push(FoundedData);
    } else {
      count++;
    }
    setCurrentShop(currentShop);
    console.log(currentShop);
    console.log(y);
    setLen(currentShop.length);
  };
  return (
    <Router>
      <Header productCount={len} productView={currentShop} count={count} />
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
