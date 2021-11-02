import React from "react";
import './ItemList.css';


function ItemList (props) {
    return(
        <>
            <li className="item"><a href="#">{props.text}</a></li>
        </>
    )
}

export default ItemList;