import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render () {
    return (
      <div className="landing-content">
        <div className="rigth-info">
          <h2>Bookcase</h2>
          <p className="text-style">Bookcase es una aplicación pensada para estudiantes o profesores de humanidades que busquen un espacio donde puedan consultar documentos y realizar anotaciones al mismo tiempo.</p>
          <h4>¿Cómo funciona?</h4>
          <p className="text-style">Cuando un usuario se registra puede crear un proyecto de investigación que le permite guardar documentos para leerlos cuando quiera, además de agregar anotaciones correspondientes a sus lecturas.  </p>
        </div>
        <div className="left-info">
          <div className="login-content">
            <Row className="grey darken-4 sign-up-form">
              <Input type="email" label="Email" s={12} />
              <Input type="password" label="password" s={12} />
            </Row>
              <Button className="green accent-4"><Link to="/userView" className="link-log-in">entry</Link></Button>
          </div>
        </div>
      </div>
    );
  }
};

export default Landing
