import React from 'react';
import './LinkListItem.css';
import {Link} from 'react-router-dom';


const LinkListItem = props => <Link to={`/category/${props.url}`}>
  <p className="link-item">{props.text}</p>
</Link>


export default LinkListItem;