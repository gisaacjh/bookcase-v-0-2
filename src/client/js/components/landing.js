import React, { Component } from 'react';
import CreateNewProjectButton from './createNewProjectButton.js';
import AddToButton from './addToButton.js';
import { Grid, PageHeader } from 'react-bootstrap';

class Landing extends Component {
  render () {
    return (
      <Grid bsClass='container' componentsClass='div'>
          <PageHeader>Create New Project Or See Your Projects</PageHeader>
          <AddToButton />
          <CreateNewProjectButton />
      </Grid>
    );
  }
};

export default Landing
