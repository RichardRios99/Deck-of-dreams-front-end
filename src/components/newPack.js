import Card from 'react-bootstrap/Card';
import React, { Component } from 'react'
import '../newPack.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Modal} from 'react-bootstrap'
import Stats from './stats'
import DD from '../images/dream.png'





export default class NewPack extends Component {
    constructor(props){
        super(props)
        this.state = {

            openModal: false
            
       }
    }

   

    shouldComponentUpdate() {
     {
      return false 
    }
  }
    

    
    render() {
    	// THIS BLOCK OF CODE SEPERATES THE ACTIVE PLAYERS FROM THE JSON OBJECT TO BE USED LATER 
    	let activePlayers = []
    	for (let i = 0; i < this.props.newPack.length; i++) {
    		if (this.props.newPack[i].Status === 'Active') {
    			activePlayers.push(this.props.newPack[i])
    			
    		}
    	}
    	// ----------------------------------------------------------------------------------------
    	
    	//  THIS LINE OF CODE PULLS A RANDOM SET OF 7 PLAYERS FROM THE ARRAY OF ACTIVE PLAYERS
    	let pack = activePlayers.sort(() => .5 - Math.random()).slice(0,7)
        let yankees = 'https://upload.wikimedia.org/wikipedia/en/2/25/NewYorkYankees_PrimaryLogo.svg'
        console.log('this is pack', pack)
    	

    	return (


    		<React.Fragment>
            <Modal show={true}>
            <Modal.Header className='final-nav' style={{backgroundColor:"#DE9151"}}><img src={DD}/></Modal.Header>
            <Modal.Body className='m-bod'>

    		{pack.map(player => {
						return (

							<Card className='main'style={{ width: '15rem' }}>
                             {(player.Team === 'NYY')
                                
                                ? <div className='NYY'><Card.Img id="NYY" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/><span><h2>#{player.Jersey}</h2></span></div>

                                :''

                            }
                            {(player.Team === 'NYM')
                                
                                ? <div className='NYM'><Card.Img id="NYM" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            }
                             {(player.Team === 'WAS')
                                
                                ? <div className='WAS'><Card.Img id="WAS" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            }
                             {(player.Team === 'SD')
                                
                                ? <div className='SD'><Card.Img id="SD" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            }
                              {(player.Team === 'MIL')
                                
                                ? <div className='MIL'><Card.Img id="MIL" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            }
                             {(player.Team === 'STL')
                                
                                ? <div className='STL'><Card.Img id="STL" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            }
                             {(player.Team === 'TEX')
                                
                                ? <div className='TEX'><Card.Img id="TEX" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            }
                            {(player.Team === 'TOR')
                                
                                ? <div className='TOR'><Card.Img id="TOR" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            }
                             {(player.Team === 'TB')
                                
                                ? <div className='TB'><Card.Img id="TB" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'SEA')
                                
                                ? <div className='SEA'><Card.Img id="SEA" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'SF')
                                
                                ? <div className='SF'><Card.Img id="SF" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'HOU')
                                
                                ? <div className='HOU'><Card.Img id="HOU" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'PIT')
                                
                                ? <div className='PIT'><Card.Img id="PIT" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'PHI')
                                
                                ? <div className='PHI'><Card.Img id="PHI" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'OAK')
                                
                                ? <div className='OAK'><Card.Img id="OAK" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'MIA')
                                
                                ? <div className='MIA'><Card.Img id="MIA" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'LAD')
                                
                                ? <div className='LAD'><Card.Img id="LA" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'ANA')
                                
                                ? <div className='ANA'><Card.Img id="ANA" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'KC')
                                
                                ? <div className='KC'><Card.Img id="KC" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            }  {(player.Team === 'DET')
                                
                                ? <div className='DET'><Card.Img id="DET" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'COL')
                                
                                ? <div className='COL'><Card.Img id="COL" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'CIN')
                                
                                ? <div className='CIN'><Card.Img id="CIN" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'CHC')
                                
                                ? <div className='CHC'><Card.Img id="CHC" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'CWS')
                                
                                ? <div className='CWS'><Card.Img id="CWS" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'BOS')
                                
                                ? <div className='BOS'><Card.Img id="BOS" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'BAL')
                                
                                ? <div className='BAL'><Card.Img id="BAL" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'ATL')
                                
                                ? <div className='ATL'><Card.Img id="ATL" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            } {(player.Team === 'ARI')
                                
                                ? <div className='ARI'><Card.Img id="ARI" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            }
                            {(player.Team === 'WAS')
                                
                                ? <div className='WAS'><Card.Img id="WAS" style={{height:'5rem'},{width:'5rem'}} variant="top" src={player.PhotoUrl}/></div>

                                :''

                            }


  <Card.Body>
    <Card.Title>{player.DraftKingsName}</Card.Title>
    <Card.Text>
      <h1>{player.Position} </h1>
    </Card.Text>
    <Button variant="outline-success" onClick={(event)=>{this.props.getStats(player.PlayerID, player.PhotoUrl)}}>See player stats</Button>
  </Card.Body>
</Card>


						)
					})}
            </Modal.Body>
            <Modal.Footer style={{backgroundColor:"#DE9151"}}>
    		<Button variant="success" onClick={async(event)=> {
    			await this.props.addToDeck(pack)
    			await console.log('state', this.state.deck)
    			
 				}
    		
    			

    		}>Add to deck</Button>
            </Modal.Footer>
            </Modal>

            {(this.state.openModal === true)
                ? <Stats img={this.state.img} stats={this.state.stats} openModal={this.state.openModal}/>

                :''

            }
    		
    		
    		</React.Fragment>
    		
    	)
    }

}