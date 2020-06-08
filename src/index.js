import React from "react";
import ReactDOM from "react-dom";
import zhCN from "antd/es/locale/zh_CN";
import App from "./App";
import "../node_modules/antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import { ConfigProvider } from "antd";
import { mainRouter } from "../src/routes/index.js";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router>
      <Switch>
        <Route
          path="/admin"
          render={(routerProps) => {
            return <App {...routerProps}></App>;
          }}
        ></Route>

        {mainRouter.map((route) => {
          return (
            <Route
              key={route.pathname}
              path={route.pathname}
              component={route.component}
            />
          );
        })}
        <Redirect to="/admin" from="/" exact></Redirect>
        <Redirect to="404"></Redirect>
      </Switch>
    </Router>
  </ConfigProvider>,
  document.getElementById("root")
);
