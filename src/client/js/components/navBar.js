import React, { Component } from 'react';


class NavBar extends Component {
  render () {
    return (
      <nav className="nav-bar">
        <ul className="bar-links">
          <li>
            <Link>About</Link>
          </li>
          <li>
            <table>
              <tr>
                <th>Category</th>
              </tr>
              <tr>
                <td>Political Science</td>
                <td>Anthropology</td>
              </tr>
            </table>
          </li>
        </ul>
      </nav>
    );
  }
};

export default  NavBar;
