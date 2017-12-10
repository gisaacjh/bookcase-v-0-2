import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';

class ProjectsView extends Component {
  render () {
    return (
      <div className="project-view-content">
        <form>
          <textarea placeholder="Write your notes here"></textarea>
        </form>
      </div>
    );
  }
};

 export default ProjectsView
