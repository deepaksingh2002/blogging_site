import React from 'react';
import logo from '../assets/logo1.png'

function Logo({ width = "200px" }) {
  return (
    <div>
      <img src={logo} alt="Logo" width={width} />
    </div>
  );
}

export default Logo;
