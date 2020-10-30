import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";

function App() {
  return (
    <Router>
      <main className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
