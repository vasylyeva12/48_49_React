import React from 'react';
import './Button.css'

function Button () {
  const showAlert = () => alert('I am cool');
  return (
    <button className='ButtonGreen' onClick={showAlert}>
      PLUS
    </button>
  )
}

export default Button 