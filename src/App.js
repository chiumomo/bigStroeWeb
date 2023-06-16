import "./styles.css";
import Header from "../img/header.png";
import { Link, Route, Switch } from "react-router-dom";

// import Data from "./data";
// import { Arrow,ArrowUp } from "./element";
import "./style";
// import { StyledStoreInfo, StyledInfoStoreName, StyledStoreTag } from "./style";
import Sider from "./sider";
import Main from "./main";
import StoreDetails from "./storeDetails";
// exemple
// https://www.uniqlo.com/tw/stores/
// https://codesandbox.io/s/react-router-product-detail-pages-dynamic-links-3v1ztn?file=/src/App.js

export default function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "white", width: "100vw" }}>
        <div className="navgation">
          <Link to="/">
            <img alt="uniqlo" src={Header} className="logo" />
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="row">
          <Switch>
            <Route exact path="/">
              <Sider />
              <Main />
            </Route>
            <Route path="/:areaId/:storeId">
              <Sider />
              <StoreDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
