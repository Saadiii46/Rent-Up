import React, { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='navbar-container container'>
        <nav className='navbar'>
          <div className='logo'>
            <img src='/src/assets/logo.png' alt='Logo' />
          </div>

          <div className='menu-toggle' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
              <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'menu-open' : ''}`}>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>

          <div className='user-actions'>
            <div className='list-counter'>
              <h4>2</h4>
            </div>
            <div>
              <h4 className='my-list'>My List</h4>
            </div>
            <div>
              <button className='sign-in-btn'>
                <svg
                  className='sign-in-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  height='20px'
                  viewBox='0 -960 960 960'
                  width='20px'
                  fill='#e8eaed'>
                  <path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z' />
                </svg>
                Sign in
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
