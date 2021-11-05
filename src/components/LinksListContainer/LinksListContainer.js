import React from "react";
import './LinksListContainer.css'
import LinkListItem from '../LinkList/LinkListItem.js';

const LinksListContainer = () => {
  return (
      <>
        <ul className="listContainer">
          <LinkListItem text="Nacionales"/>
          <LinkListItem text="Extranjeras"/>
          <LinkListItem text="Artesanales"/>
          <LinkListItem text="Conocenos"/>
        </ul>
      </>
  )
}

export default LinksListContainer;