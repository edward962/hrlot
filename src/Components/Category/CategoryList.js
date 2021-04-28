import React from 'react';
import {Link} from "react-router-dom";

function CategoryList(props) {
  return (
    <div>
    <ul>
        {props.items.map((item,id) => (
        <li  onClick={() => props.setCategory(item)} key={item}>
          <Link to={`/`} >{item}</Link>
        </li>
      ))}
   </ul>
  </div>
  );
}

export default CategoryList;