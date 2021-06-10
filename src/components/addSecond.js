import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class AddSecond extends Component {

	constructor(props){
        super(props)
        this.state = {
            
        }
	}





render() {
		return (
			<Button variant="success" onClick={(event, player)=> {
				this.props.addSecond(this.props.selected)
				this.setState({seeOptions:false})
			}}>add to team</Button>
		)
	}
}
