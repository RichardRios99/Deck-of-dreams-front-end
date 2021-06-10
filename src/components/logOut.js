import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import '../logout.css'




export default class LogOut extends Component {

	constructor(props) {
		super()
	}

	render() {
		return (

			<Button className='logout'style={{backgroundcolor:'214, 30, 38'}}onClick={(e)=> {
  	this.props.logOut()
  }} variant="danger">Log Out</Button>
		)
	}
}