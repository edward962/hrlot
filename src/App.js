import React, {  useEffect } from 'react';
import useFetch from "./useFetch";
import './App.css';
import Category from "./Category";


function App() {
 const url = "categories/pl";
 const res = useFetch(process.env.REACT_APP_API_URL + url, {
  method: 'GET',
  headers: {
      'X-Api-Key': process.env.REACT_APP_API_KEY,
      'Content-Type': 'application/json'
  }});
 if (!res.response) {
   return <div>Loading...</div>
 }
//  const ourData = res.json();
console.log(res);
  return (
    <div>
    {/* <span>{ourData}</span> */}
  </div>
  );
}

export default App;
