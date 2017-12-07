import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class NavBar extends Component {
  handleSelect(eventKey) {
     event.preventDefault();
     alert(`selected ${eventKey}`);
   }
  render () {
    return (
        <Nav bsStyle="tabs" bsSize="large "activeKey="1" onSelect={this.handleSelect}>
               <NavItem eventKey="1" href="/components/landing">About</NavItem>
               <NavDropdown eventKey="2" title="Category" id="nav-dropdown">
                 <MenuItem eventKey="2.1">Political Science</MenuItem>
                 <MenuItem eventKey="2.2">Literature</MenuItem>
                 <MenuItem eventKey="2.3">Anthropology</MenuItem>
                 <MenuItem eventKey="2.4">history</MenuItem>
                 <MenuItem divider />
                 <MenuItem eventKey="2.5">All categories</MenuItem>
               </NavDropdown>
               <NavItem eventKey="3" title="Item">Log In</NavItem>
               <LinkContainer to='/components/signUp'>
                  <NavItem eventKey="4">Sign Up</NavItem>
               </LinkContainer>
        </Nav>
    );
  }
};

export default NavBar
