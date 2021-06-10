import Button from 'react-bootstrap/Button';
import {Modal} from 'react-bootstrap'
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';



export default class Stats extends Component {
	constructor(props) {
		super()


	}

	render() {
		return(
			<Modal show={true}>
				<Modal.Header>

				<img src={this.props.img}/><span><h1>{this.props.stats.Name}</h1></span>
				<h3>{this.props.stats.Team}</h3>
				<h3>{this.props.stats.Position}</h3>
				

				</Modal.Header>

				<Modal.Body>

				 <Table striped bordered size="sm"> 
              <thead>
               <tr>
    				<th>Total Value</th>
    				<th>Batting avg</th>
   					 <th>ERA</th>
  				</tr>
  				</thead>
    			<tbody>

 				 <tr>
    
    <td>{this.props.stats.FantasyPoints}</td>
    <td>{this.props.stats.BattingAverage}</td>
    <td>{this.props.stats.EarnedRunAverage}</td>
    </tr>
   
    </tbody>
  </Table>

				</Modal.Body>

				<Modal.Footer>

				<Button onClick={(event)=>{this.props.exit()}}> exit </Button>
				</Modal.Footer>





			</Modal>



		)
	}


}