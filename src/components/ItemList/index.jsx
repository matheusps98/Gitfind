import React from 'react';
import './styles.css';

const ItemList = ({title, description, html_url}) => {
  return (
    <div className='item-list'>
      <strong>{title}</strong>
      <p>{description}</p>
      <a href={html_url} target='_blank' className='btn'>Ver repositório</a>
      <hr />
      </div>
  )
}

export default ItemList;