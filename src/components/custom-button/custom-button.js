import React from 'react'
import './custom-button.css';

function CustomBtn({children, className, ...props}) {
  return (
    <button className={`${className} custom-btn`} {...props}>{children}</button>
  )
}

export default CustomBtn