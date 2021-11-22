import React from 'react';
import './LinkListItem.css';
import {Link} from 'react-router-dom';


const LinkListItem = props => <Link to={`/category/${props.url}`}>
  <li className="link-item">{props.text}</li>
</Link>


export default LinkListItem;