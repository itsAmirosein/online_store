import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const handleShoppingBadge = (e, value) => {
    e.preventDefault();
    console.log(value);
    setValue((prevValue) => prevValue + 1);
  };
  return (
    <Router>
      <Header value={value} />
      <Switch>
        <Route path="/" exact>
          <Home onClick={handleShoppingBadge} />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/detail/:id?">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
