import React, { Component } from 'react';
import { Navbar, NavItem, Dropdown, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  render () {
    return (
      <div className="header">
        <Navbar className="green darken-4 header" brand='Bookcase' right>
          <NavItem><Link to="/aboutView">About</Link></NavItem>
          <NavItem>
            <Dropdown trigger={<Button>Categories<Icon right>arrow_drop_down</Icon></Button>}>
                  <NavItem>
                    Art
                  </NavItem>
                  <NavItem>
                		Political Science
                	</NavItem>
                	<NavItem>
                		history
                	</NavItem>
                	<NavItem>
                		Philosophy
                	</NavItem>
                  <NavItem>
                		<Link to="/categoriesView" className="link-categories-view">All Categories</Link>
                	</NavItem>
            </Dropdown>
          </NavItem>
          <NavItem><Link to="/userView">You Profile</Link></NavItem>
          <NavItem><Link to="/logIn" className="light-green darken-3">Log In</Link></NavItem>
          <NavItem><Link to="/signUp" className="deep-orange accent-3">Sign Up</Link></NavItem>
        </Navbar>
      </div>
    );
  }
};

export default NavBar
