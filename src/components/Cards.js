import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import '../Cards.css'
import Num1 from '../images/num1.png'
import Num2 from '../images/num2.png'
import Num3 from '../images/num3.png'


export default class Cards extends Component {
	render() {

	  return (
	    <div id ="rules"className= "B-card-container">
	    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Num1} />
  <Card.Body>
    <Card.Title>Collect Cards</Card.Title>
    <Card.Text>
 Answer baseball travia questions and earn points to collect baseball cards.    </Card.Text>
    
  </Card.Body>
</Card>

 <Card id='center-card'style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Num2}/>
  <Card.Body>
    <Card.Title>Build your team</Card.Title>
    <Card.Text>
     Use the cards stored in your deck to build your very own diamond dynesty
    </Card.Text>
    
  </Card.Body>
</Card>

 
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Num3}/>
  <Card.Body>
    <Card.Title>Connect with other players</Card.Title>
    <Card.Text>
      Use the community board to share your team buildinig progress
    </Card.Text>
    
  </Card.Body>
</Card>


	             
	      
	      
	    </div>
	  );
	}



}