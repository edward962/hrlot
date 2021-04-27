import React, {  useEffect } from 'react';
import useFetch from "../../services/useFetch";
import OfferList from "../Offer/OfferList";
import Error from '../Error';
import Loading from '../Loading';


function Category(props) {
 // console.log(props);
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
  return (
    <div >
      Hello!
   {/* <OfferList offers={url}/> */}
  </div>
  );
}

export default Category;
