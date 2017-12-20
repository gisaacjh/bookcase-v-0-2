import React, { Component } from 'react';
import { Navbar, NavItem, Dropdown, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  render () {
    return (
      <div className="header">
        <Navbar className="green darken-4 header navblock" brand='Bookcase' right>
          <NavItem><Link to="/aboutView">About</Link></NavItem>
          <NavItem>
            <Dropdown trigger={<Button>Categories<Icon right>arrow_drop_down</Icon></Button>}>
                  <NavItem className="dropdown">
                    Art
                  </NavItem>
                  <NavItem className="dropdown">
                		Political Science
                	</NavItem>
                	<NavItem className="dropdown">
                		history
                	</NavItem>
                	<NavItem className="dropdown">
                		Philosophy
                	</NavItem>
                  <NavItem className="dropdown">
                		<Link to="/categoriesView" className="link-categories-view">All Documents</Link>
                	</NavItem>
            </Dropdown>
          </NavItem>
          <NavItem><Link to="/userView">You Profile</Link></NavItem>
          <NavItem><Link to="/logIn" className="light-green darken-3 login-boton">Log In</Link></NavItem>
          <NavItem><Link to="/signUp" className="deep-orange accent-3 signup-boton">Sign Up</Link></NavItem>
        </Navbar>
      </div>
    );
  }
};

export default NavBar
