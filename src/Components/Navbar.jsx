import React, { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='container mx-auto mt-2'>
        <nav className='flex justify-between items-center'>
          <div className='w-48'>
            <img src='/src/assets/logo.png' alt='Logo' />
          </div>

          <div className='lg:hidden cursor-pointer' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
              <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
          </div>

          <ul className={`lg:flex lg:gap-2 list-none lg:static absolute bg-white lg:bg-transparent shadow-md lg:shadow-none w-full lg:w-auto lg:flex-row flex-col p-4 lg:p-0 top-16 right-0 ${isMenuOpen ? 'flex' : 'hidden'}`}>
            <li><a href='#' className='block py-2 px-4 text-black'>Home</a></li>
            <li><a href='#' className='block py-2 px-4 text-black'>About</a></li>
            <li><a href='#' className='block py-2 px-4 text-black'>Services</a></li>
            <li><a href='#' className='block py-2 px-4 text-black'>Blog</a></li>
            <li><a href='#' className='block py-2 px-4 text-black'>Pricing</a></li>
            <li><a href='#' className='block py-2 px-4 text-black'>Contact</a></li>
          </ul>

          <div className='hidden lg:flex gap-4 items-center'>
            <div className='flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full'>
              <h4>2</h4>
            </div>
            <h4 className='text-gray-700'>My List</h4>
            <button className='flex items-center bg-green-400 text-white px-4 py-2 rounded-lg'>
              <svg className='mr-2' xmlns='http://www.w3.org/2000/svg' height='20px' viewBox='0 -960 960 960' width='20px' fill='#e8eaed'>
                <path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z' />
              </svg>
              Sign in
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};
