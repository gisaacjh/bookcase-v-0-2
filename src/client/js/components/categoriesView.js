import React, { Component } from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import { Link } from 'react-router-dom';

class CategoriesView extends Component {
  render () {
    return (
      <div className="categories-view-content">
        <div>
          <h2>All Categories</h2>
        </div>
        <Collection>
          <CollectionItem className="grey darken-4 sign-up-for"><Link to="/readingView" className="read-links">León-Portilla, Miguel, La Filosofía náhuatl: estudiada en sus fuentes</Link></CollectionItem>
          <CollectionItem className="grey darken-4 sign-up-for"><Link to="/readingView" className="read-links">Fragio, Alberto, Paradigmas para una metaforología del cosmos: Hans Blumenberg y las metáforas contemporáneas del universo</Link></CollectionItem>
          <CollectionItem className="grey darken-4 sign-up-for"><Link to="/readingView" className="read-links">Méndez Rubio, Antonio, Comunicación musical y cultura popular: una introducción crítica</Link></CollectionItem>
          <CollectionItem className="grey darken-4 sign-up-for"><Link to="/readingView" className="read-links">"Argod, Pascale, The art of sketching: 400 years of travel diaries"</Link></CollectionItem>
        </Collection>
      </div>
    );
  }
};

export default CategoriesView
