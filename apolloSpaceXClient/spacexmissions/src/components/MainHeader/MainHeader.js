import React from 'react';

const MainHeader = ({ name, description }) => (
    <div >
        <h1 >{name}</h1>
        <p >{description}</p>
    </div>
);

export default MainHeader;