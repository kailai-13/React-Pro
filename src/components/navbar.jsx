import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Kailan's Shop</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
     
      </ul>
        <div onClick={handleNav} className='block md:hidden' >
            {!nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}
        </div>
        <div
        className={`
            fixed top-0 left-0 h-full w-[60%] border-r my-20 border-gray-600
            transform transition-transform duration-500 ease-in-out
            ${!nav ? 'translate-x-0' : '-translate-x-full'}
        `}
        >
        
        <ul className='flex flex-col text-center'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 '>Contact</li>
        </ul>
        </div>
    </div>
    )
};

export default Navbar;