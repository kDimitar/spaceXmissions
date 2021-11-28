import React from 'react';
import { Link } from 'react-router-dom';

import SpaceXSvgLogo from './../Logo/Logo'

const TopMenu = ({ rockets, isMenuOpen, isMobileView, toggleMenu }) => (
    <div className="col d-flex justify-content-between align-items-center position-absolute">
        
        {!isMobileView && <MenuLinks rockets={rockets} toggleMenu={toggleMenu} />}
        <SpaceXSvgLogo />
    </div>
);

const MenuLinks =() => this.map(rocket =>(
    <div key={rocket.name}>
        <Link onClick={`/rocket/${rocket.id}`}>
            {rocket.name.toUpperCase()}
        </Link>
    </div>
))


export default TopMenu;