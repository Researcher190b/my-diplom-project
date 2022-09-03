import React from "react";
import Books from "./components/books";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Search from "./components/search";
import Input from "./components/input";
import NewBooks from "./components/newBooks";
import BestBooks from "./components/bestBooks";
import Logo from "./components/logo";
import "./styles.css";

function Test() {
  return (
    <div>
      <NavBar />
      {/* <h1>Hello World</h1> */}
      <Books />
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/input" component={Input} />
        <Route path="/new_books" component={NewBooks} />
        <Route path="/best_books" component={BestBooks} />
        <Route path="/" exact omponent={Logo} />
      </Switch>
    </div>
  );
}

export default Test;
