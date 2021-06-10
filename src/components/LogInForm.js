import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import '../loginFile.css'
import {Modal} from 'react-bootstrap'
import dream from '../images/dream.png'



export default class LoginForm extends Component {
	constructor(props) {
		super(props) 
	}




	render() {

	  return (
	  <div className="LForm">
	  <Modal show ={true}>
    <Modal.Header className="Header1"><img src={dream}/> </Modal.Header>
    <Modal.Body>	
	   <Form onSubmit={this.props.loggingUser}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label >Username</Form.Label>
    <Form.Control  name="username" type="text"  />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label >Password</Form.Label>
    <Form.Control name="password" type="password"  />
  </Form.Group>
  <Modal.Footer className='Footer1'>
  <Button variant="success" type="submit">
    Submit
  </Button>
  <Button variant="success" onClick={(e)=> {
  	this.props.exit()
  }} type="submit">
    exit
  </Button>
  </Modal.Footer>
</Form>
</Modal.Body>
</Modal>
	    </div>
	  );
	}






}