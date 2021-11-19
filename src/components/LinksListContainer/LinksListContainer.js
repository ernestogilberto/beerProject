import React from 'react';
import './LinksListContainer.css'
import LinkListItem from '../LinkList/LinkListItem.js';

const links = [{text: 'Nacionales', url: '#nacionales'},
  {text: 'Extranjeras', url: '#extranjeras'},
  {text: 'Artesanales', url: '#artesanales'},
  {text: 'Conocenos', url: '#conocenos'}
]

const LinksListContainer = () => {
  return (
      <>
        <ul className="listContainer">
          {links.map((link, index) => <LinkListItem key={index} text={link.text} url={link.url}/>)}
        </ul>
      </>
  )
}

export default LinksListContainer;