import React, {  useEffect } from 'react';
import useFetch from "../../services/useFetch";





function CategoryList(props) {
   // console.log(props);
  return (
    <div>
    <ul>
        {props.items.map((item,id) => (
        <li onClick={() => props.setCategory(item)} key={item}>
          <span>{item}</span> 
        </li>
      ))}
   </ul>
  </div>
  );
}

export default CategoryList;