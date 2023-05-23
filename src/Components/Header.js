import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png" alt="" />
      <h2 className='text-title'>TEXT GENERATOR</h2>
      <p className='description'>make your own texts/memes</p>
    </header>
  )
}

export default Header
