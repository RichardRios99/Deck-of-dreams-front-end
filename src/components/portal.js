import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
// import NewTeam from './newTeam.js'
import NewPack from './newPack'
import NewImg from './newImg.js'
import a1 from '../images/b1.png'
import a2 from '../images/b2.png'
import a3 from '../images/b3.png'
import a4 from '../images/b4.png'
import a5 from '../images/b5.png'
import a6 from '../images/b6.png'
import a7 from '../images/b7.png'
import a8 from '../images/b8.png'
import a9 from '../images/b9.png'
import a10 from '../images/b10.png'
import a11 from '../images/woman.png'
import a12 from '../images/man (1).png'

import Avatar from '../images/user.png'
import Post from './post'
import '../post.css'




let baseUrl=''
if (process.env.NODE_ENV === 'development') {
   baseUrl = 'http://localhost:3003'
    
 } else {
   baseUrl = 'heroku url here'
     
 }

export default class Portal extends Component {
constructor(props) {
	super(props)
	this.state={
		newTeam: false,
    seePack: false,
    userImg: '',
    seeFileUp: false,
    profileImage:'',
    seePost:false
	}
}

handleChange = async(profileImage) => {
  
  await this.setState({
    profileImage: profileImage
  })

  console.log('DANNY', this.state.profileImage)

  
}

	

createTeam = async (event) => {
	event.preventDefault()
     // this.setState({
     //  seeLoginForm: true
     // })
     const url = baseUrl + '/team'
     const teamBody = {
       name: event.target.name.value,
       
     }
     try {
       const response = await fetch(url, {
         method: 'POST',
         body: JSON.stringify(teamBody),
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: "include" // SENDING COOKIES
       })

       if (response.status === 200) {
         console.log('created team ')
         this.props.getTeam()
         // this.setState({
         //  user:logindBody.username,
         //  seeLoginForm: false,
         //  userLoggedIn: true,
         // })
       }
     }
     catch (err) {
       console.log('Error => ', err);
     }    
   }

   newTeam = async (event) => {

   		await this.setState({newTeam:true})
   		console.log('seeing form')

   }

   showNewFile = () => {
  this.setState({
    seeFileUp: true
  })
}

savePic=async() => {
 
  this.setState({
    seeFileUp: false
  })
            
     }
     
 getUser = async() => {
   const url = baseUrl + '/users/current/img'
     
     try {
          fetch(url, {
               headers: {
                 'Content-Type': 'application/json'
               },
               credentials: "include" 
         })
          .then(res=>res.json())
          .then(data=> {
            console.log('final atempt',data)

            this.setState({
              profileImage:data
            })
            
          })
                 

      }

                   
                   
                 

               
             catch (err) {
       console.log('Error => ', err);
     }  
 }    
 
 componentDidMount() {
  this.props.getImage()
 }


render() {

	return (
		<div id='portal'>
    <img id='main-img'src={this.props.profileImage} />
     
    {(this.state.seeFileUp)
      ? <NewImg getImg={this.props.getImage} save={this.props.save}exit={this.savePic} a1={a1} a2={a2}a3={a3}a4={a4}a5={a5} a6={a6} a7={a7}a8={a8}a9={a9}a10={a10}a11={a11}a12={a12}selectImg={this.props.handleChange} profileImage={this.props.profileImage}/>
      :''

    }
			<Dropdown as={ButtonGroup}>
		  <Button variant="success">welcome {this.props.user}</Button>

		  <Dropdown.Toggle split variant="success"  drop='up' id="dropup-split-basic" />

		  <Dropdown.Menu>
		    <Dropdown.Item onClick={(event)=> {
          this.props.getPack()
        }}href="#/action-1">New Pack</Dropdown.Item>
		    <Dropdown.Item onClick={(event)=> {
          this.props.seeDeck()
        }}>view Deck</Dropdown.Item>
		    <Dropdown.Item onClick={(event)=> {
		    	this.props.newTeam()
		    }}href="#/action-3">add a Team name</Dropdown.Item>
		  
      <Dropdown.Item onClick={(event)=> {
          this.props.showQuestions()
        }}>Questions</Dropdown.Item>
        <Dropdown.Item onClick={(event)=> {
          this.showNewFile()
        }}href="#/action-3">New Profile Pic</Dropdown.Item>
        <Dropdown.Item onClick={(event)=> {
          this.props.logOut()
        }}>Log Outs</Dropdown.Item>
      
      </Dropdown.Menu>
			</Dropdown>
		

			
      
      
		</div>

	)



}



}