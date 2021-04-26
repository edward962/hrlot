import React, {  useEffect } from 'react';
import useFetch from "../services/useFetch";
import './App.css';
import CategoryList from "./Category/CategoryList";




function App() {
 const url = "categories/pl";
 const res = useFetch(process.env.REACT_APP_API_URL + url, {
  method: 'GET',
  headers: {
      'X-Api-Key': process.env.REACT_APP_API_KEY,
      'Content-Type': 'application/json'
  }});
  if (res.error) {
    return <div>Something gone wrong!</div>
  }
 if (!res.response) {
   return <div>Loading...</div>
 }

//  const ourData = res.json();
console.log(res.response);
  return (
    <div>
    <CategoryList items={res.response} />
  </div>
  );
}

export default App;
