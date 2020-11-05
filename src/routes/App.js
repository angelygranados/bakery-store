import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShoppingCartContainer from "../containers/ShoppingCartContainer";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import ProductsContainer from "../containers/ProductsContainer";

function App() {
  return (
    <Router>
      <main className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/productos" component={ProductsContainer} />
          <Route exact path="/favoritos" component={ProductsContainer} />
          <Route exact path="/carrito" component={ShoppingCartContainer} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
