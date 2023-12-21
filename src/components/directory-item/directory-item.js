import React from 'react';
import './directory-item.css';
import { useNavigate } from 'react-router-dom';

function DirectoryItem({title, imageUrl, large, linkUrl}) {
  const navigate = useNavigate();
  return (
    <div className={large ? 'directory-item-large': 'directory-item'}>
      <div className={large ? 'background-image-large': 'background-image'} style={{backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${imageUrl})`}}>
        <div className='menu-item' onClick={() => navigate(`/${linkUrl}`)}>
          <span className='title'>{title.toUpperCase()}</span>
          <span className='sub-title'>Shop Now</span>
        </div>
      </div>
    </div>
  )
}

export default DirectoryItem