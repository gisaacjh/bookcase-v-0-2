import React, { Component } from 'react';
import { Button, Collection, CollectionItem, Badge } from 'react-materialize';
import { Link } from 'react-router-dom';

class ProjectsView extends Component {
  render () {
    return (
      <div className="project-view-content">
        <div className="left-project-view">
          <h2>Revolución Mexicana</h2>
          <form>
            <textarea className="text-area" rows="2" placeholder="Write your notes here"></textarea>
          </form>
        </div>
        <div className="rigth-project-view">

          <div className="files-project-view">
            <Collection>
              <CollectionItem className="deep-orange accent-3">
                 Add document +
              </CollectionItem>
            </Collection>
          </div>
        </div>
      </div>
    );
  }
};

 export default ProjectsView
