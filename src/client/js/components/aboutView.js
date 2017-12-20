import React, { Component } from 'react';
import { Link } from 'react';


class AboutView extends Component {
  render () {
    return (
      <div className="about-content">
        <div className="about-text">
          <header className="title">About Us</header>
          <div className="paragraph">
            <p>Queremos solucionar la falta de fuentes electrónicas de calidad en el área de humanidades. El tiempo dedicado a la búsqueda de documentos para cualquier tipo de investigación ocupa un gran porcentaje del tiempo del investigador.</p>
            <p>Este tiempo perdido se puede reducir enormemente, por eso Bookcase busca ser una herramienta en cualquier tipo de investigación.</p>
          </div>
        </div>
      </div>
    );
  }
};

export default AboutView
