import React from 'react';
import useFetch from "../../services/useFetch";
import Error from '../Error';
import Loading from '../Loading';
import {Link} from "react-router-dom";

function OfferList(props) {
 const url = "offers/list/pl";
 const mtd = 'GET';
 const resp = useFetch(url,mtd);
  if (resp.error) {
    return <Error/>;
  }
 if (!resp.response) {
   return <Loading/>;
 }
let jobs;
const isEmpty = (props.category === "");
if(!isEmpty){
  jobs  = resp.response.jobs.filter(s => s.category.indexOf(props.category));
  console.log(resp.response.jobs);
}
else{
  jobs = resp.response.jobs;
}

  return (
    <div>
      {(isEmpty)?<h2>Lista wszystkich ofert</h2>:<h2>Lista ofert działu : {props.category}</h2>}
   <ul>
        {jobs.map((iter) => (
        <li onClick={() => props.setId(Object.values(iter))} key={iter.title}>
         <Link to={`/offer`} >{iter.title}</Link>
        </li>
      ))}
   </ul>
  </div>
  );
}

export default OfferList;