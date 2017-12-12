import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Chip, Tag, Card, Button, Modal, Input } from 'react-materialize';


class UserView extends Component {

  render () {
    return (
      <div className="user-view-content">
        <div>
            <Row>
            	<Col s={12}>
            		<Chip>
            			<img src=''/>
            			Miguelito
            		</Chip>
            	</Col>
            </Row>
        </div>
        <div>
          <header className="center-align title">Your Research Projects</header>
        </div>
        <div className="show-projects">
          <div>
            <Col m={6} s={12}>
              <Card className='blue-grey darken-1' textClassName='white-text' title='A Thanatos essay' actions={[<Link to="/projectView">Edit</Link>]}>

              </Card>
            </Col>
          </div>
          <div>
            <Col m={6} s={12}>
              <Card className='blue-grey darken-1' textClassName='white-text' title='La femme fatal' actions={[<Link to="/projectView">Edit</Link>]}>

                </Card>
           </Col>
          </div>
        </div>
        <div>
        <Modal
          trigger={<Button>Create New Research Project</Button>}>
          <Row>
            <Input type="text" s={6} label="Title" />
            <Button><Link to="/projectView" className="link-user-view">Create</Link></Button>
          </Row>
        </Modal>
        </div>
      </div>
    );
  }
};

export default UserView
