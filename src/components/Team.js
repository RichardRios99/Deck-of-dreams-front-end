import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Options from './options'
import'../team.css'
import Button from 'react-bootstrap/Button';


export default class  Team extends Component {

	constructor(props) {
   		super(props)
	  	this.state= {
		    seeLoginForm: false,
		    seeSigninForm: false,
		    userLoggedIn: false,
		    user:'',
		    newTeam: false,
        seeOptions: false

      }
  }
    
  exitOptions = async(e) => {
    this.setState({
      seeOptions: false
    })
  }

  
  
  

  	render() {
 
  		return(
        <React.Fragment>
                        <Table id='main-table' className='table'striped bordered size="sm"> 
              <thead>
          <h1 id='teamName'>{this.props.teamName} </h1>
               <tr>
    <th>Slot</th>
    <th>Player</th>
    <th>Name</th>
    <th>action</th>
  </tr>
  </thead>
    <tbody>

  <tr>
    
    <td>C</td>
    <td></td>
    <td>{this.props.catcher}</td>
    <td><Button variant="success"onClick={async(evnet)=> {
      await this.props.options('C')
      
    }}>Change</Button></td>

  </tr>
  <tr>
    <td>1B</td>
    <td></td>
    <td>{this.props.first}</td>
    <td><Button variant="success"onClick={async(evnet)=> {
      await this.props.options('1B')
      
    }}>Change</Button></td>
  </tr>
   <tr>
    <td>2B</td>
    <td></td>
    <td>{this.props.second}</td>
    <td><Button variant="success"onClick={async(evnet)=> {
      await this.props.options('2B')
      await this.setState({
        seeOptions: true
      })
    }}>Change</Button></td>
  </tr>
   <tr>
    <td>SS</td>
    <td></td>
    <td>{this.props.short}</td>
    <td><Button variant="success"onClick={async(evnet)=> {
      await this.props.options('SS')
      
    }}>Change</Button></td>
  </tr>
   <tr>
    <td>3B</td>
    <td></td>
    <td>{this.props.third}</td>
    <td><Button variant="success"onClick={async(evnet)=> {
      await this.props.options('3B')
      
    }}>Change</Button></td>
  </tr>
   <tr>
    <td>LF</td>
    <td></td>
    <td>{this.props.left}</td>
    <td><Button variant="success"onClick={async(evnet)=> {
      await this.props.options('LF')
      await this.setState({
        seeOptions: true
      })
    }}>Change</Button></td>
   
  </tr>
   <tr>
    <td>CF</td>
    <td></td>
    <td>{this.props.center}</td>
    <td><Button variant="success"onClick={async(evnet)=> {
      await this.props.options('CF')
      
    }}>Change</Button></td>
  </tr>
   <tr>
    <td>RF</td>
    <td></td>
    <td>{this.props.right}</td>
    <td><Button variant="success"onClick={async(evnet)=> {
      await this.props.options('RF')
      await this.setState({
        seeOptions: true
      })
    }}>Change</Button></td>
  </tr>
   <tr>
    <td>DH</td>
    <td>{this.props.dh}</td>
    <td></td>
    <td><Button variant="success"onClick={async(evnet)=> {
      await this.props.options('SP')
      
    }}>Change</Button></td>
  </tr>
    </tbody>
  </Table>

  {(this.props.seeOptions=== true)
      ?  <Options team={this.state.team} options={this.props.possible} exit={this.props.exitOptions} addCatcher={this.props.addCatcher} addFirst={this.props.addFirst} addSecond={this.props.addSecond} addThird={this.props.addThird}  addCenter={this.props.addCenter} addRight={this.props.addRight} addLeft={this.props.addLeft} addShort={this.props.addShort} />
    
      :''
    }
    
  
</React.Fragment>
  		)
  	}
}


