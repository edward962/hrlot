import React, {  useEffect } from 'react';
import './App.css';


function App() {
  useEffect( () => {
      console.log(process.env.REACT_APP_API_KEY,process.env.REACT_APP_API_URL);
      fetch(process.env.REACT_APP_API_URL+'offers/list/en', {
      method: 'get',
      headers: {
          'X-Api-Key': process.env.REACT_APP_API_KEY,
          'Content-Type': 'application/json'
      }
  })
  .then(response =>  console.log(response.json()))
  .catch(error => console.error(error));

 }, []);
  return (
    <div>
    <ul>
      <li>API: {process.env.API_URL}</li>
    </ul>
  </div>
  );
}

export default App;
