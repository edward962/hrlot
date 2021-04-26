import React, {  useEffect } from 'react';
import useFetch from "../../services/useFetch";
import Category from "./Category";
import App from "../App";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function CategoryList(props) {
   // console.log(props);
  return (
    <Router>
    <div>
    <ul>
        {props.items.map(item => (
        <li key={item}>
        <Link to={`/category/${encodeURIComponent(item)}`}>{item}</Link>
        </li>
      ))}
   </ul>
   <Switch>
          <Route path={`/category/`}>
            <Category />
          </Route>
          {/* <Route path="/">
            <App />
          </Route> */}
        </Switch>
  </div>
  </Router>
  );
}

export default CategoryList;