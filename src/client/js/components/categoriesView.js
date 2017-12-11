import React, { Component } from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import { Link } from 'react-router-dom';

class CategoriesView extends Component {
  render () {
    return (
      <div className="categories-view-content">
      <Collection>
        <CollectionItem><Link to="/components/readingView">León-Portilla, Miguel, La Filosofía náhuatl: estudiada en sus fuentes</Link></CollectionItem>
        <CollectionItem><Link to="/components/readingView">Fragio, Alberto, Paradigmas para una metaforología del cosmos: Hans Blumenberg y las metáforas contemporáneas del universo</Link></CollectionItem>
        <CollectionItem><Link to="/components/readingView">Méndez Rubio, Antonio, Comunicación musical y cultura popular: una introducción crítica</Link></CollectionItem>
        <CollectionItem><Link to="/components/readingView">"Argod, Pascale, The art of sketching: 400 years of travel diaries"</Link></CollectionItem>
      </Collection>
      </div>
    );
  }
};

export default CategoriesView
