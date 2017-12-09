import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import { Link, Route } from 'react-router-dom';

class SignUpView extends Component {

  render () {
    return (
      <div className="sign-up-content">
        <Row className="grey lighten-2 sign-up-form">
          <Input type="text" s={6} label="Username" />
          <Input type="text" s={6} label="First Name" />
      		<Input type="text" s={6} label="Last Name" />
      		<Input type="password" label="password" s={12} />
      		<Input type="email" label="Email" s={12} />
          <Input type="number" label="Age" s={12} />
          <Input type="text" placeholder="Write 'none', if this doesn't apply" label="Institute" s={12} />
          <Input type="text" s={6} label="Occupation" />
        </Row>
        <div>
          <Button className="deep-orange accent-3"><Link to="/components/userView" className="link-join-us">Join Us</Link></Button>
        </div>
      </div>
    );
  }
};

export default SignUpView
