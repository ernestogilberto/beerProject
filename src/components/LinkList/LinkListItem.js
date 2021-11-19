import React from 'react';
import './LinkListItem.css';


const LinkListItem = props => <li className="item"><a href={props.url}>{props.text}</a></li>

export default LinkListItem;