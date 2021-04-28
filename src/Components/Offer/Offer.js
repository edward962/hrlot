import React, {useEffect} from 'react';
import useFetch from "../../services/useFetch";



function Offer(props) {
  console.log(props);
  return ( 
  <div>
    <p >Tytuł: {props.id[0]} </p>
    <p >Data: {props.id[1]} </p>
    <p >Dział: {props.id[2]} </p>
    <p >Miasto: {props.id[3]} </p>
    <p >Państwo: {props.id[4]} </p>
    <p >Województwo: {props.id[5]} </p>
    <p >Id: {props.id[6]} </p>
    <a href={props.id[7]}>Aplikuj</a> 
    </div>
  );
}

export default Offer;