import React from 'react';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

function Header() {
  return (
    <nav>
        <h1><span>BazZ</span>tech.</h1>
        <main>
            <HashLink to="/#home">Home</HashLink>
            <HashLink to="/#about">About</HashLink>
            <HashLink to="/#brands">Brands</HashLink>
            <HashLink to="/services">Services</HashLink>
            <HashLink to="/contact">Contact</HashLink>
        </main>
    </nav>
  )
}

export default Header;