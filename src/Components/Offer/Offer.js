import React, {  useEffect } from 'react';
import useFetch from "../../services/useFetch";



function Offer(props) {
  useEffect(() => {
    console.log(props.info.reference);
    fetch("https://api.lot.com/hr/v3/offer/detail/en",
    {method : 'POST',headers: {
      'X-Api-Key': process.env.REACT_APP_API_KEY,
      'Content-Type': 'application/json'
  },body:{'ref_id':props.info.reference}}
    )
      .then((response) => {
        if (!response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.error("Trying to get offer detail!!",e);

      })
      .finally(() => {

      });
  }, []);
  
  return (
    <div>
    <span>{props.info.title}</span>
  </div>
  );
}

export default Offer;