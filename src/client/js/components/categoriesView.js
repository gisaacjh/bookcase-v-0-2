import React, { Component } from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import { Link } from 'react-router-dom';

class CategoriesView extends Component {
  render () {
    return (
      <div className="categories-view-content">
      <Collection>
        <CollectionItem><Link to="/components/readingView">libro</Link></CollectionItem>
        <CollectionItem><Link to="/components/readingView">librito</Link></CollectionItem>
        <CollectionItem><Link to="/components/readingView">librote</Link></CollectionItem>
        <CollectionItem><Link to="/components/readingView">libroteto</Link></CollectionItem>
      </Collection>
      </div>
    );
  }
};

export default CategoriesView
