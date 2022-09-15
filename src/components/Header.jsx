import React from 'react'

import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='logoContainer'>
        <img
          src='/assets/header/cryptopunk-logo.png'
          alt=''
          className='punkLogo'
        />
      </div>

      <div className='searchBar'>
        <div className='searchIcon'>
          <img src='/assets/header/search.png' alt='' />
        </div>
        <input
          className='searchInput'
          placeholder='Collection, item or user...'
        />
      </div>

      <div className='headerItems'>
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className='headerActions'>
        <div className='themeSwitch'>
          <img src='/assets/header/theme-switch.png' alt='' />
        </div>
      </div>

      <div className='loginButton'>GET IN</div>
    </div>
  )
}

export default Header
