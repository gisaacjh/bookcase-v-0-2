import React, { Component } from 'react';
import { Nav, NavItem, } from 'react-bootstrap';

class FooterBar extends Component {
  handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
 }
    render() {
      return (
        <Panel footer="Panel footer" bsStyle="pills" activeKey={1} onSelect={handleSelect}>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Panel>
      );

  }
};

export default FooterBar
