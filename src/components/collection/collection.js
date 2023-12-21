import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import './collection.css';


function Collection({ title, items }) {
  return (
    <div className='container-fluid'>
      <div className='container center'>
        <div className='collection-preview'>
          <span className='collectionTitle'>{title}</span>
          <div className='collection-item-container'>
            { 
              items.filter((element, index) => index < 4).map(ele => <CollectionItem key={ele.id} item={ele} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection;