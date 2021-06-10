import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import '../loginFile.css'
import {Modal} from 'react-bootstrap'
import DD from '../images/dream.png'



export default class NewPost extends Component {
	constructor(props) {
		super(props) 
	}




	render() {

	  return (
	  <div className="create-post">
	  <Modal show ={true}>
    <Modal.Header className='Header1'> <img src={DD}/></Modal.Header>
    <Modal.Body>	
	   <Form onSubmit={this.props.makePost}>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Whats New?</Form.Label>
    <Form.Control as='textarea' name="message" rows={6}type="text"  />
  </Form.Group>

  
  <Modal.Footer className='Header1'>
  <Button variant="success" type="submit">
    Submit
  </Button>
  <Button onClick={(e)=> {
  	this.props.exit()
  }}variant="success">
    exit
  </Button>
  </Modal.Footer>
</Form>
</Modal.Body>
</Modal>
	    </div>
	  );
	}}
