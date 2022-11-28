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
          <Nav navbar>
            <NavItem>
              <NavLink to="/Home" className='link'>Home</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Naav;