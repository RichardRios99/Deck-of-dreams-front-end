import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import '../loginFile.css'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class NewTeam extends Component {

	render() {
		return (



	  <div className="ct-modal">
      <Modal show ={true}>
            <Modal.Header className='header'>
            </Modal.Header>
            <Modal.Body>
	   <Form onSubmit={this.props.submit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label >Team Name</Form.Label>
    <Form.Control  name="name" type="text" placeholder="Team Name" />
  </Form.Group>
  <Button
variant="primary" type="submit">
    Submit
  </Button>
</Form>

  
  
  </Modal.Body>
  <Modal.Footer>
  <Button onClick={(e)=> {
  	this.props.exit()
  }}variant="primary" type="submit">
    exit
  </Button>
    
</Modal.Footer>
</Modal>
	    </div>
		)
	}


}