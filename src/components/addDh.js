import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class AddDh extends Component {

	constructor(props){
        super(props)
        this.state = {
            
        }
	}





render() {
		return (
			<Button variant="success"  onClick={(event, player)=> {
				this.props.addDh(this.props.selected)
			}}>add to team</Button>
		)
	}
}