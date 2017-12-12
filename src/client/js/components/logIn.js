import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import { Link, Route } from 'react-router-dom';


class LogIn extends Component {
  render () {
    return (
      <div className="login-content">
        <Row className="grey darken-4 sign-up-form">
          <Input type="email" label="Email" s={12} />
          <Input type="password" label="password" s={12} />
        </Row>
        <div>
          <Button className="green accent-4"><Link to="/userView" className="link-log-in">entry</Link></Button>
        </div>
      </div>
    );
  }
};

export default LogIn
