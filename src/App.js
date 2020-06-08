import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import "../node_modules/antd/dist/antd.css";
import { adminRouter } from "../src/routes/index.js";
import {Frame} from './components/index.js'
const menus =adminRouter.filter(route =>route.isNav===true);
class App extends Component {
  render() {
    return (
      <div>
        <Frame menus={menus}>
        <Switch>
          {adminRouter.map((route) => {
            return (
              <Route
                path={route.pathname}
                key={route.pathname}
                render={(routerProps) => {
                  return <route.component {...routerProps} />;
                }}
              />
            );
          })}
          <Redirect to={adminRouter[0].pathname}  from="/admin" exact></Redirect>
          <Redirect to="404"></Redirect>
        </Switch>
        </Frame>
      </div>
    );
  }
}

export default App;
