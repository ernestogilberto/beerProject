import React from "react";
import './ItemsListContainer.css'
import ItemList from '../ItemList/ItemList.js';

function ItemsListContainer() {
    return (
        <>
            <ul className="listContainer">
                <ItemList text="Nacionales"/>
                <ItemList text="Extranjeras"/>
                <ItemList text="Artesanales"/>
                <ItemList text="Conocenos"/>
            </ul>
        </>
    )
}

export default ItemsListContainer;