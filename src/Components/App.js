import React, {  useEffect, useContext, useState } from 'react';
import useFetch from "../services/useFetch";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CategoryList from "./Category/CategoryList";
import OfferList from "./Offer/OfferList";
import Error from './Error';
import Loading from './Loading';
import Offer from './Offer/Offer';


export const jobContext = React.createContext();

function App() {
 const [info,setInfo] = useState({category:"", id:0});
 const url = "categories/pl";
 const mtd = 'GET';
 const res = useFetch(url,mtd);
  if (res.error) {
    return <Error/>;
  }
 if (!res.response) {
   return <Loading/>;
 }
console.log(res.response);
  return (
   
    <div>
    <CategoryList items={res.response} />
    <Router>
    <Switch>
    <Route path="/offer">
            <Offer />
          </Route>
          <Route path="/">
            <OfferList />
          </Route>
      </Switch>
    </Router>
  </div>
  
  );
}

export default App;
