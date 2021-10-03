import React from "react";
import Header from "../Header/Header";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import About from "../about/About";
import Courses from "../courses/Courses";
import Instructors from "../instructors/Instructors";
import NotFound from "../NotFound/NotFound";

const MainUi = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/instructors">
            <Instructors></Instructors>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MainUi;