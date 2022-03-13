import React from "react";
import { Container } from "../root/style";
import { Body } from "../components/Body";
import { Navbar } from "../components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homebar from "../components/Homebar";
import { Shoppingbar } from "../components/Shoppingbar";
import { Informationbar } from "../components/Informationbar";
import { Flowertypesbar } from "../components/Flowertypesbar";

export const Root = () => {
  return (
    <Router>
      {/* <Switch>
        <Route exact path={"/"} component={Homebar} />
        <Route exact path={"/shopview"} component={Homebar} />
        <Route exact path={"/plantview"} component={Homebar} />
        <Route exact path={"/blogsview"} component={Homebar} />
      </Switch> */}
      {/* <Homebar /> */}
      <Navbar />
      {/* <Switch>
        <Route exact path={"/"} component={Navbar} />
        <Route exact path={"/shopview"} component={Shoppingbar} />
        <Route exact path={"/plantview"} component={Informationbar} />
        <Route exact path={"/blogsview"} component={Flowertypesbar} />

        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch> */}
    </Router>
  );
};

export default Root;
