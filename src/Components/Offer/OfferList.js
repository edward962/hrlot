import React, {  useEffect } from 'react';
import useFetch from "../../services/useFetch";
import Error from '../Error';
import Loading from '../Loading';
import Offer from './Offer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function OfferList() {
 const url = "offers/list/pl";
 const mtd = 'GET';
 const resp = useFetch(url,mtd);
  if (resp.error) {
    return <Error/>;
  }
 if (!resp.response) {
   return <Loading/>;
 }
//  const ourData = res.json();
const jobs = resp.response.jobs;
console.log(jobs);
  return (
    <div>
   <ul>
        {jobs.map((it,num) => (
        <li key={num}>
        <Offer info={it} />
        </li>
      ))}
   </ul>
  </div>
  );
}

export default OfferList;