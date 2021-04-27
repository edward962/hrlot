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
import Offer from '../Offer/Offer';



function CategoryList(props) {
   // console.log(props);
  return (
    <div>
    <ul>
        {props.items.map((item,id) => (
        <li key={id}>
        {item}
        </li>
      ))}
   </ul>
  </div>
  );
}

export default CategoryList;