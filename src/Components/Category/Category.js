import React, {  useEffect } from 'react';
import useFetch from "../../services/useFetch";
import Offer from "../Offer/Offer";


function Category(props) {
  console.log(props);
  const url = "offers/list/pl";
//  const url = "categories/pl";
//  const res = useFetch(process.env.REACT_APP_API_URL + url, {
//   method: 'GET',
//   headers: {
//       'X-Api-Key': process.env.REACT_APP_API_KEY,
//       'Content-Type': 'application/json'
//   }});
//  if (!res.response) {
//    return <div>Loading...</div>
//  }
// //  const ourData = res.json();
// console.log(res);
const handleClick =() => {

// const offers = useFetch
console.log("Hello");

}
  return (
    <div onClick={handleClick}>
    {props.name}
  </div>
  );
}

export default Category;
