import React, {  useEffect } from 'react';
import useFetch from "../services/useFetch";
import './App.css';
import CategoryList from "./Category/CategoryList";
import OfferList from "./Offer/OfferList";
import Error from './Error';
import Loading from './Loading';





function App() {
 const url = "categories/pl";
 const mtd = 'GET';
 const res = useFetch(url,mtd);
  if (res.error) {
    return <Error/>;
  }
 if (!res.response) {
   return <Loading/>;
 }

//  const ourData = res.json();
console.log(res.response);
  return (
    <div>
    <CategoryList items={res.response} />
    <OfferList />
  </div>
  );
}

export default App;
