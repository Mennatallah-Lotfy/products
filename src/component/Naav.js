import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {NavLink} from 'react-router-dom';

function Naav(){

  return (
    <div>
      <Navbar color="black" dark container>
        <NavbarBrand href="/" className="me-auto">
          Products
        </NavbarBrand>
          <Nav >
            <NavItem>
              <NavLink to="/Home" className='link me-2'>Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink to='/' className='link'>Admin</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Naav;