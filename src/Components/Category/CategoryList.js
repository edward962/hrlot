import React, {  useEffect } from 'react';
import useFetch from "../../services/useFetch";
import {Link} from "react-router-dom";





function CategoryList(props) {
   // console.log(props);
  return (
    <div>
    <ul>
        {props.items.map((item,id) => (
        <li role="presentation" class="link"  onClick={() => props.setCategory(item)} key={item}>
          <Link to={`/`} >{item}</Link>
        </li>
      ))}
   </ul>
  </div>
  );
}

export default CategoryList;