import React from 'react';
import { SearchIcon, LockIcon } from '@chakra-ui/icons';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className='main-nav'>
      <div className='logo'>
        <h1>beauty</h1>
      </div>
      <div className='menu-link'>
      <ul>
        <li>
          <a href='#'>new collection</a>
        </li>
        <li>
          <a href='#'>woman</a>
        </li>
        <li>
          <a href='#'>man</a>
        </li>
        <li>
          <a href='#'>accessories</a>
        </li>
      </ul>
      </div>
      <div className='icons'>
        <ul className='icons-ch'>
          <li><SearchIcon/></li>
          <li><LockIcon/></li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Navbar;