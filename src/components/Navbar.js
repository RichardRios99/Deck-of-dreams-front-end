import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Portal from './portal.js'
import LogOut from './logOut.js'
import '../nav.css'
import SigninForm from './SigninForm.js'
import Modal from 'react-bootstrap/Modal'
import of from '../images/of.png'

export default class NavBar extends Component {
	constructor(props) {
		super(props) 
		this.state= {

			
		}
	
	
	}



	render() {
		console.log(this.props.userLoggedIn, this.props.seeRegister)
	  return (
	    <React.Fragment>
	     <Navbar className='final-nav'sticky="top" >
    		<Nav className="mr-auto">
      		
	      		{(this.props.userLoggedIn === false)

	      			? <Nav.Link onClick={(event)=>{this.props.seeLoginForm()}}> Sign In</Nav.Link>
	      			:''
	      		}
	      			
	      		<Nav.Item>
	      		{(this.props.seeUser)

	      			? <Portal logOut={this.props.logOut} save={this.props.save}getImage={this.props.getImage} handleChange={this.props.handleChange}profileImage={this.props.profileImage}user={this.props.user}showQuestions={this.props.showQuestions}newTeam={this.props.newTeam} createTeam={this.props.createTeam}user={this.props.user} seePack={this.props.seePack} getPack={this.props.getPack} seeDeck={this.props.seeDeck} exitDeck={this.props.exitDeck}/>


	      			
	      			:	''
	      		}
	      		{(this.props.userLoggedIn === false)
	      		?<Button  variant="success" style={{backgroundColor:'render'}} className='s-bttn'onClick={(event)=>{this.props.seeRegister()}}>Sign Up</Button>
	      		: ''
	      		}
   				<Navbar.Brand className='Brand'> Deck of Dreams </Navbar.Brand>

	      			
	      		
	      		</Nav.Item>
      
    		</Nav>
    
  		</Navbar>
	    
	             
	      
	      
	    </React.Fragment>
	  );
	}






}