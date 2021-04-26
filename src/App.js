import React, {  useEffect } from 'react';
import './App.css';


function App() {
  useEffect( () => {
      console.log(process.env.REACT_APP_API_KEY,process.env.REACT_APP_API_URL);
      fetch('https://api.lot.com/hr/v3/offers/list/pl', {
      method: 'get',
      headers: {
          'X-Api-Key': 'zEiAS4E5pE3mFnaqIKn3s6kCxsgqHCKH9VB97I0f',
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
