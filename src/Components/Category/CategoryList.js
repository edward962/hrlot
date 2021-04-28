import React, {  useEffect } from 'react';
import useFetch from "../../services/useFetch";





function CategoryList(props) {
   // console.log(props);
  return (
    <div>
    <ul>
        {props.items.map((item,id) => (
        <li role="presentation" class="link"  onClick={() => props.setCategory(item)} key={item}>
          <a href="#">{item}</a> 
        </li>
      ))}
   </ul>
  </div>
  );
}

export default CategoryList;