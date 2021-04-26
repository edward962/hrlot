import React, {  useEffect } from 'react';
import useFetch from "../../services/useFetch";
import Error from '../Error';
import Loading from '../Loading';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function OfferList() {
 const url = "offers/list/pl";
 const res = useFetch(process.env.REACT_APP_API_URL + url, {
  method: 'GET',
  headers: {
      'X-Api-Key': process.env.REACT_APP_API_KEY,
      'Content-Type': 'application/json'
  }});
  if (res.error) {
    return <Error/>;
  }
 if (!res.response) {
   return <Loading/>;
 }
//  const ourData = res.json();
console.log(res);
  return (
    <div>
    {/* <span>{ourData}</span> */}
  </div>
  );
}

export default OfferList;