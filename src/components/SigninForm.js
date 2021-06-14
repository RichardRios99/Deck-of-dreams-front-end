
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import '../loginFile.css'
import {Modal} from 'react-bootstrap'
import 'antd/dist/antd.css'
// import {Avatar} from 'antd'

import Avatar from '../images/user.png'
import dream from '../images/dream.png'


export default class SigninForm extends Component {
	constructor(props) {
		super(props) 
	}

  
     
 
  




	render() {

	  return (
	  	
	  <div className="LForm">

        	  <Modal show ={true}>
            <Modal.Header className='header'>

          
             <img src={dream}/>


            

           

            </Modal.Header>
          
                          <Modal.Body>  
                           <Form onSubmit={this.props.register}>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label >Username</Form.Label>
                          <Form.Control  name="username" type="text"  />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Label >Password</Form.Label>
                          <Form.Control name="password" type="password"  />
                        </Form.Group>
                       
                      
                       
                         
                          
                        
                        <Modal.Footer className='footer'>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                       
                        <Button onClick={(e)=> {
                          this.props.exit()
                        }}variant="primary" type="submit">
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
