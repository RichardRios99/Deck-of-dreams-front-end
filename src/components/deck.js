import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';


export default class Deck extends Component {
    constructor(props){
        super(props)
        this.state = {
          deck: [],
          currentPage: 1,
          cardsPerPage: 9,
        }
    }
     handleCLick = (data) => {
      
          this.setState({
            seeDeck:false
          })
      
    }
    render() {
        
      return (
        <div>
                <h1> {this.props.usersDeck.length} cards </h1>
                <Table striped bordered size="sm"> 
                    <thead>
                         <tr>
                        
                            <th>Slot</th>
                            <th> Player </th>
                            <th>Name</th>
                            <th>action</th>
                        </tr>
                    </thead>
            
                    <tbody>
                            
                {this.props.page.map(player => {
                                
                                return(

                            <tr>
                                
                                <td>{player.Position}</td>
                                <td><img style={{height:'40px' ,width:'40px'}}src={player.PhotoUrl}/></td>
                                <td>{player.DraftKingsName}</td>
                                <td><Button variant="success">view Stats</Button></td>

            
                            </tr>
                            
            )
          })}


             </tbody>
  </Table>

        <Button onClick={async(event)=> {
          await this.props.exitDeck()
        
          
        }
        
          

      
        }variant="danger">exit</Button>{' '}
        </div>

        )



    }




}



