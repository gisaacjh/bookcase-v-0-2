import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Chip, Tag, Card, Button, Modal } from 'react-materialize';


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
              <Card className='blue-grey darken-1' textClassName='white-text' title='A Thanatos essay' actions={[<a href='#'>Edit</a>]}>

              </Card>
            </Col>
          </div>
          <div>
            <Col m={6} s={12}>
              <Card className='blue-grey darken-1' textClassName='white-text' title='La femme fatal' actions={[<a href='#'>Edit</a>]}>

                </Card>
           </Col>
          </div>
        </div>
        <div>
        <Modal className='hidden'
          header='Modal Header'
          trigger={<Button>MODAL</Button>}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </Modal>
        <Button className="modal-create-new-project">Create New Project</Button>
        </div>
      </div>
    );
  }
};

export default UserView
