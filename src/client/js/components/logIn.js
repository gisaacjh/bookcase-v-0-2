import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

class LogIn extends Component {
  render () {
    return (
      <div className="login-content">
        <Row className="grey lighten-2 sign-up-form">
          <Input type="email" label="Email" s={12} />
          <Input type="password" label="password" s={12} />
        </Row>
        <div>
          <Button className="green accent-4"><Link to="/components/userView" className="link-log-in">entry!</Link></Button>
        </div>
      </div>
    );
  }
};

export default LogIn
