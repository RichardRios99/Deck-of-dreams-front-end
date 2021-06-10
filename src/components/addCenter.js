import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'

export default class AddCenter extends Component {

	constructor(props){
        super(props)
        this.state = {
            
        }
	}





render() {
		return (
			<Button variant="success" onClick={(event, player)=> {
				this.props.addCenter(this.props.selected)
			}}>add to team</Button>
		)
	}
}

