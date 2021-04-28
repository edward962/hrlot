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
 const [category,setCategory] = useState("");
 const [id,setId] = useState([]);
 const url = "categories/pl";
 const mtd = 'GET';
 const res = useFetch(url,mtd);
  if (res.error) {
    return <Error/>;
  }
 if (!res.response) {
   return <Loading/>;
 }


  return (
    <Router>
    <div>
      <h1>Lista działów:</h1>
    <CategoryList items={res.response} category={category} setCategory={setCategory}/>
   
    <Switch>
    <Route path="/offer">
            <Offer id={id}/>
          </Route>
          <Route path="/">
            <OfferList id={id} setId={setId} category={category} setCategory={setCategory}/>
          </Route>
      </Switch>
 
  </div>
  </Router>
  );
}

export default App;
