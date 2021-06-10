import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class AddRight extends Component {

	constructor(props){
        super(props)
        this.state = {
            
        }
	}





render() {
		return (
			<Button variant="success"onClick={(event, player)=> {
				this.props.addRight(this.props.selected)
			}}>add to team</Button>
		)
	}
}