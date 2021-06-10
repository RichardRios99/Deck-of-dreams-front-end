import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';

export default class AddThird extends Component {
	 constructor(props){
        super(props)
        this.state = {
           
         }
     }       
          





	render() {
		return (
			<Button variant="success" onClick={(event, player)=> {
				this.props.addThird(this.props.selected)
			}}>add to team</Button>
		)
	}
}