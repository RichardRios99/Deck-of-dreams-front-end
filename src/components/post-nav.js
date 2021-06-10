import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react'
import Share from '../images/post.png'
import '../post.css'
import DD from '../images/dream.png'



export default class  PostNav extends Component {

	render() {
		return(
			<Navbar Sticky="top"className='p-nav'fixed="sticky">
    <Navbar.Brand><img onClick={(e)=>{this.props.seeNewPost()}} src={DD}/></Navbar.Brand>
    
  </Navbar>
		)
	}




}