import React, { Component } from 'react';
import { Navbar, NavItem, Dropdown, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  render () {
    return (
      <div className="header">
        <Navbar className="green darken-4 header" brand='Bookcase' right>
          <NavItem><Link to="/components/aboutView">About</Link></NavItem>
          <NavItem>
            <Dropdown trigger={<Button>Categories<Icon right>arrow_drop_down</Icon></Button>}>
                	<NavItem>
                		Political Science
                	</NavItem>
                	<NavItem>
                		history
                	</NavItem>
                	<NavItem>
                		Filosophy
                	</NavItem>
                  <NavItem>
                		<Link to="/components/categoriesView" className="link-categories-view">All Categories</Link>
                	</NavItem>
            </Dropdown>
          </NavItem>
          <NavItem><Link to="/components/userView">You Profile</Link></NavItem>
          <NavItem><Link to="/components/userView">You Profile</Link></NavItem>
          <NavItem><Link to="/components/logIn">Log In</Link></NavItem>
          <NavItem><Link to="/components/signUp">Sign Up</Link></NavItem>
        </Navbar>
      </div>
    );
  }
};

export default NavBar
