import React, { Component } from 'react'
import AddC from './addC'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import AddFirst from './addFirst.js'
import AddSecond from './addSecond.js'
import AddShort from './addShort.js'
import AddThird from './addThird.js'
import AddLeft from './addLeft.js'
import AddCenter from './addCenter.js'
import AddRight from './newRight.js'
import AddDh from './addDh.js'
import DD from '../images/dream.png'
import {Modal} from 'react-bootstrap'



export default class Options extends Component {
constructor(props){
        super(props)
        this.state = {
            
        }
	}

selectPlayer = async (event,person) => {
	this.setState({
		player: person,
		selected: true
	})
}	     




render(){
	// console.log('in options catcher',this.props.options)
	return (
        <>
            <Modal show={true}>
            <Modal.Header style={{backgroundColor:"#DE9151"}}><img src={DD}/></Modal.Header>
            <Modal.Body className='m-bod'>

		      
      
        
    		{this.props.options.map(players => {
				return (

					<Card className='each-option'>

						
						<img src={players.PhotoUrl}/>
                        <Card.Body>
						<Card.Title> {players.DraftKingsName} </Card.Title>
                        <h1> {players.Position}</h1>
                        {(players.Position === 'C')
                            ? <AddC addCatcher={this.props.addCatcher} selected={players.DraftKingsName} />
                            :''
                        }
                        {(players.Position === '1B')
                            ? <AddFirst addCatcher={this.props.addFirst} selected={players.DraftKingsName}/>
                            :''
                        }
                        {(players.Position === '2B') 
                        	? <AddSecond addSecond={this.props.addSecond} selected={players.DraftKingsName}/>
                        	:''
                        }
                        	{(players.Position === 'SS') 
                        	? <AddShort addShort={this.props.addShort} selected={players.DraftKingsName}/>
                        	:''
                        }
                        	{(players.Position === '3B') 
                        	? <AddThird addThird={this.props.addThird} selected={players.DraftKingsName}/>
                        	:''
                        }
                        	{(players.Position === 'LF') 
                        	? <AddLeft addLeft={this.props.addLeft} selected={players.DraftKingsName}/>
                        	:''
                        }
                            {(players.Position === 'CF') 
                            ? <AddCenter addCenter={this.props.addCenter} selected={players.DraftKingsName}/>
                            :''
                        }
                            {(players.Position === 'RF') 
                            ? <AddRight addRight={this.props.addRight} selected={players.DraftKingsName}/>
                            :''
                        }
                        {(players.Position === 'SP') 
                            ? <AddDh addDh={this.props.addDh} selected={players.DraftKingsName}/>
                            :''
                        }

                        </Card.Body>
                        
                            </Card>

                     



                     

				)
			})}
            </Modal.Body>

                    <Modal.Footer style={{backgroundColor:"#DE9151"}}>
                    <Button onClick={async (event)=> {
                        await this.props.exit()
                    }}> exit </Button>
                    </Modal.Footer>
                    </Modal>
                    </>
	)
}


}