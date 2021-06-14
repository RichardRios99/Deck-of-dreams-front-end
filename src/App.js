import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import SigninForm from './components/SigninForm.js'
import NavBar from './components/Navbar'
import LoginForm from './components/LogInForm'
import Card from './components/Cards'
import Team from './components/Team'
import NewPack from './components/newPack'
import Deck from './components/deck'
// import Carousel from 'react-bootstrap/Carousel'
import Slider from './components/Carousel.js'
import img1 from './images/seats.jpg'
import Options from './components/options'
import Pagination from './pageination.js'
import Question from './components/questions.js'
import NewTeam from './components/newTeam.js'
import Carousel from 'react-bootstrap/Carousel'
import Stats from './components/stats'
import Games from './components/games'
import Post from './components/post'

import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import Qholder from './components/questionHolder'
// import NewTeam from './components/newTeam'



let baseUrl=''
if (process.env.NODE_ENV === 'development') {
   baseUrl = 'http://localhost:3003'
    
 } else {
   baseUrl = 'heroku url here'
     
 }
export default class App extends Component {

  constructor(props) {
    super()
  this.state= {
    seeLoginForm: false,
    seeSigninForm: false,
    userLoggedIn: false,
    
    newTeam: false,
    team: [],
    seePack: false,
    newPack:'',
    deck:[],
    seeDeck: false,
    seeTeam: true,
    seeOptions: false,
    currentPage: 1,
    cardsPerPage: 9,
    showQuestions: false,
    creatingTeam: false,
    seePost: true,
    profileImgage:''

    
    

  }

  }
    getTeam = () => {
     // fetch to the backend
     fetch(baseUrl + "/team",{
       credentials: "include" // SENDING COOKIES
     })
     .then(res => { 
       if (res.status===200){
         return res.json()
       }
       else {
         return []
       }
     }).then(data => {
      console.log('before turning data into state',data)
       this.setState({
         teamName: data.name,
         seePack: false,
         C: data.C,
         first: data.first,
         second: data.second,
         third: data.third,
         SS: data.SS,
         LF: data.LF,
         CF: data.CF,
         RF: data.RF
        
       })
      })
     
   }
   getDeck = () => {
     // fetch to the backend
     fetch(baseUrl + "/users/deck",{
       credentials: "include" // SENDING COOKIES
     })
     .then(res => { 
       if (res.status===200){
         return res.json()
       }
       else {
         return []
       }
     }).then(data => {
      console.log('before turning data into state',data)
       this.setState({
         deck: data,
         seePack: false,
         seeDeck: false,
         
       })
      })
     console.log('current user',this.state.usersDeck)
   }

   seeDeck = async(e) => {
    await this.setState({
      seeDeck:true,
      seeTeam: false,
      newPack: false

    })
   }

   exitDeck = () => {
    this.setState({
      seeDeck:false,
      seeTeam: true,
    })
   }

   exitOptions = async(e) => {
    await this.setState({
      seeOptions: false
    })
  }


   


  

  
  loggingUser = async (e) => {
     e.preventDefault()
     this.setState({
      seeLoginForm: true,
      userLoggedIn: true

     })
     const url = baseUrl + '/users/login'
     const logindBody = {
       username: e.target.username.value,
       password: e.target.password.value
     }
     try {
       const response = await fetch(url, {
         method: 'POST',
         body: JSON.stringify(logindBody),
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: "include" // SENDING COOKIES
       })

       if (response.status === 200) {

         console.log('what is the ursers img when they log in?,' , response.logo)
         await this.setState({
          user:logindBody.username,
          seeLoginForm: false,
          userLoggedIn: true,
          seeTeam: true,
          profileImage: response.logo
          
          

         })
         this.getTeam()
         this.getDeck()
         // this.getTeam()
       }
     }
     catch (err) {
       console.log('Error => ', err);
     }    
   }

   register = async (e) => {
     e.preventDefault()
     const url = baseUrl + '/users/signup'
     try {
       const response = await fetch(url, {
         method: 'POST',
         body: JSON.stringify({
           username: e.target.username.value,
           password: e.target.password.value,
           
         }),
         headers: {
           'Content-Type': 'application/json'
         },
         credentials:"include"
       })
       if (response.status === 200) {

       }
     }
     catch (err) {
       console.log('Error => ', err);
     }
     this.setState({
      seeSigninForm:false,
      seeLoginForm:true
     })

   }

    seeLoginForm = async(event) => {
      
              
              await this.setState({
                  seeLoginForm: true,
                  seeSigninForm: false
              })
            

    }
    seeSigninForm = async(event) => {
      
              
              await this.setState({
                  seeSigninForm: true,
                   seeLoginForm: false
              })
            

    }
     exitSigninForm = async(event) => {
      
              
              await this.setState({
                  
                   seeSigninForm: false
              })
            

    }

    exitLogInForm =  async(event)=> {
      await this.setState({
        seeLoginForm: false
      })
    }


    logOut = async (e) => {
     // e.preventDefault()
     
     const url = baseUrl + '/users/logout'
     
     try {
       const response = await fetch(url, {
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: "include" 
       })
       

       if (response.status === 200) {
         console.log('user bye')
         this.setState({
        user:'',
        teamName: '',
        team: [],
        seePack: false,
        seeDeck: false,
        seeTeam: false,
        userLoggedIn: false,
        teamName:'',
        C: '',
        first: '',
         second: '',
         third: '',
         SS: '',
         LF: '',
         CF: '',
         RF: '',
         newTeam: false,
         seeQuestions: false,
          profileImgage: ''
         
          // usersDeck:[]
        
         })
       }
     }
     catch (err) {
       console.log('Error => ', err);
     }    
   }

   getPack = async(event) => {
      
              const players = await fetch('https://fly.sportsdata.io/api/mlb/fantasy/json/Players?key=fdfb6aaf36ca42769797ad0f59cb276a')
              const parsedPlayers = await players.json()
              

              await this.setState({
                  newPack: parsedPlayers,
                  seePack: true,
                  seeDeck: false,
                  seeTeam: false

              })

            

    }

    

    // seePack = async(event)=> {
    //     this.setState({
    //       seePack: true
    //     })
    
    // }

    addToDeck = async (data) => {
      let joined = this.state.deck.concat(data);
      console.log('this is joined', joined)
      await this.setState({
        seePack:false,
        seeTeam: true,
        deck: joined
      })
       const url = baseUrl + '/users/deck'

       console.log('this is what is being used for fetch', this.state.deck)
     
     try {
       const response = await fetch(baseUrl +'/users/deck',{
         method: 'POST',
         body: JSON.stringify(this.state.deck

       ),headers: {
           'Content-Type': 'application/json'
         },
         credentials:"include"
       })
       if (response.status === 200) {
          console.log('added to deck')
          }  
     }
     catch (err) {
       console.log('Error => ', err);
     }

}
     addCatcher = async (player) => {
     // const slot = position
      await this.setState({
        C: player
      })
      const url = baseUrl + '/team/update'
     const playerBody = {
       C: player,
       
     }
     try {
       const response = await fetch(url, {
         method: 'PUT',
         body: JSON.stringify(playerBody),
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: "include" // SENDING COOKIES
       })

       if (response.status === 200) {
         console.log('catcher added in front')
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

     addFirst = async (player) => {
     // const slot = position
      await this.setState({
        first: player
      })
            const url = baseUrl + '/team/update'
     const playerBody = {
       first: player,
       
     }
     try {
       const response = await fetch(url, {
         method: 'PUT',
         body: JSON.stringify(playerBody),
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: "include" // SENDING COOKIES
       })

       if (response.status === 200) {
         console.log('1b added in front')
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

     addSecond = async (player) => {
     // const slot = position
      await this.setState({
        second: player
      })
            const url = baseUrl + '/team/update'
     const playerBody = {
       second: player,
       
     }
     try {
       const response = await fetch(url, {
         method: 'PUT',
         body: JSON.stringify(playerBody),
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: "include" // SENDING COOKIES
       })

       if (response.status === 200) {
         console.log('2b added in front')
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
     addThird = async (player) => {
     // const slot = position
      await this.setState({
        third: player
      })
            const url = baseUrl + '/team/update'
     const playerBody = {
       third: player,
       
     }
     try {
       const response = await fetch(url, {
         method: 'PUT',
         body: JSON.stringify(playerBody),
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: "include" // SENDING COOKIES
       })

       if (response.status === 200) {
         console.log('3rd added in front')
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
     addShort = async (player) => {
     // const slot = position
      await this.setState({
        SS: player
      })
            const url = baseUrl + '/team/update'
     const playerBody = {
       SS: player,
       
     }
     try {
       const response = await fetch(url, {
         method: 'PUT',
         body: JSON.stringify(playerBody),
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: "include" // SENDING COOKIES
       })

       if (response.status === 200) {
         console.log(' added in javi')
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

     addCenter = async (player) => {
     // const slot = position
      await this.setState({
        CF: player
      })
            const url = baseUrl + '/team/update'
     const playerBody = {
       CF: player,
       
     }
     try {
       const response = await fetch(url, {
         method: 'PUT',
         body: JSON.stringify(playerBody),
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: "include" // SENDING COOKIES
       })

       if (response.status === 200) {
         console.log('1b added in front')
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

     addRight= async (player) => {
     // const slot = position
      await this.setState({
        RF: player
      })
            const url = baseUrl + '/team/update'
     const playerBody = {
       RF: player,
       
     }
     try {
       const response = await fetch(url, {
         method: 'PUT',
         body: JSON.stringify(playerBody),
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: "include" // SENDING COOKIES
       })

       if (response.status === 200) {
         console.log('1b added in front')
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

     addLeft = async (player) => {
     // const slot = position
      await this.setState({
        LF: player
      })
            const url = baseUrl + '/team/update'
     const playerBody = {
       LF: player,
       
     }
     try {
       const response = await fetch(url, {
         method: 'PUT',
         body: JSON.stringify(playerBody),
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: "include" // SENDING COOKIES
       })

       if (response.status === 200) {
         console.log('1b added in front')
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

     addDh = async (player) => {
     // const slot = position
      await this.setState({
        SP: player
      })
            const url = baseUrl + '/team/update'
     const playerBody = {
       SP: player,
       
     }
     try {
       const response = await fetch(url, {
         method: 'PUT',
         body: JSON.stringify(playerBody),
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: "include" // SENDING COOKIES
       })

       if (response.status === 200) {
         console.log('1b added in front')
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

     createTeam = async (event) => {
      
      event.preventDefault()
     this.setState({
      seeNewTeam: false
     })
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
        return response.json()
         console.log('created team ')
         await this.setState({
          
          teamName: event.target.newTeam.value,
          
         })
        
         console.log('see if its Pending!!!!!!',this.state.teamName)
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

    exitNewTeam = async (event) => {

      await this.setState({newTeam:false})
      console.log('seeing form')

   }


  exitQ = async (event) => {

    console.log('before funtion',this.state.seeQuestions)
    await this.setState({
      
      showQuestions: false
    })
    console.log('AF',this.state.seeQuestions)
  }

  filterPlayers = async (pos) => {
    
      let groupOfPlayers = this.state.deck.filter(function(player) {
        return player.Position === pos
      })
      console.log('this is the group of players', groupOfPlayers)
      await this.setState({
        options: groupOfPlayers,
        seeOptions: true,
      
      })
}

  saveTeam = () => {
    let newTeam = this.state.team.push(this.state.C)

  }

  getUser = async(event) => {
   const url = baseUrl + '/users/current'
     
     try {
       const response = await fetch(url, {
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: "include" 
       })
       

       if (response.status === 200) {
         return response.json()
         console.log('2nd ??????',response.logo)
         await this.setState({

          user: response.username,
          userLoggedIn: true,
          seeTeam: true,
          seeDeck: false,
          seeQuestions: false,
          seePost: true,
          
          deck: response.deck,
          teamName: response.teamName



          // usersDeck:[]
        
         })
         console.log('here is the url at the inital app render', response.logo)
         this.getTeam()
         this.getDeck()
       } else {
        this.setState({
          user:'',
          userLoggedIn: false

        })
        console.log('no LUUUUUUUCCCCCK')
       }

     
   } catch (err) {
       console.log('Error => ', err);
     }  
 }

 getStats = async(id, photo) => {
      
              const playersStats = await fetch(`https://fly.sportsdata.io/v3/mlb/stats/json/PlayerSeasonStatsByPlayer/2021/${id}?key=8bf7f1bbf712435ba355a0d8b778052a`)
              const stats = await playersStats.json()
              

              await this.setState({
                stats: stats,
                img: photo,
                seeStats: true,
                // seePack: true,
                 
              })

              console.log('STATS', this.state.stats)

            
              

    }

    exitStats = async() => {
      await this.setState({
        seePack: true,
        seeStats: false,
        
      })
      console.log('exiting')
    }

    getImage = async() => {
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
 
 savePic=async() => {
   let data = {
    img: this.state.profileImage
  }

  try {
       const response = await fetch(baseUrl +'/users/img',{
         method: 'POST',
         body: JSON.stringify(data

       ),headers: {
           'Content-Type': 'application/json'
         },
         credentials:"include"
       })
       if (response.status === 200) {
          console.log('added to logo')
  this.setState({
    seeFileUp: false
  })
          }  
     }
     catch (err) {
       console.log('Error => ', err);
     }
}

  
  

  componentDidMount() {
  
       this.getUser()
      // this.getImage()
      this.getTeam()
    }

 
 
 
   

  showQuestions = () => {
    this.setState({
      showQuestions: true,
    })
   }

   fileChange = async(e) => {
    let file = document.getElementById("file-id").files[0].path; 
    


    await this.setState({
      userImg: file
    })

    console.log('imggggg',this.state.userImg)
   }
   
   
   handleChange = async(profileImage) => {
  
  await this.setState({
    profileImage: profileImage
  })

  console.log('DANNY', this.state.profileImage)

  
}
    





  render() {
        const {currentPage, cardsPerPage, deck} = this.state
        const indexOfLastCard = currentPage * cardsPerPage
        const indexOfFirstCard = indexOfLastCard - cardsPerPage
        const currentCards = deck.slice(indexOfFirstCard, indexOfLastCard)
        const paginate = pageNum => this.setState({currentPage:pageNum})
        const nextPage = () => this.setState({currentPage:currentPage + 1})
        const prevPage = () => this.setState({currentPage: currentPage-1})
        console.log('in front end', this.state.team)

    return(
    <div className="App">

    


   
   
    <Games/>
  <NavBar className='main-nav'save={this.savePic}getImage={this.getImage}handleChange={this.handleChange} profileImage={this.state.profileImage} user={this.state.user}style={{position:'sticky'}}showQuestions={this.showQuestions} newTeam={this.newTeam} createTeam={this.createTeam}Sticky="top" logOut={this.logOut} user={this.state.user}stateForm={this.state.seeLoginForm} seeLoginForm={this.seeLoginForm} seeUser={this.state.user} userLoggedIn={this.state.userLoggedIn} seeRegister={this.seeSigninForm} register={this.register} seePack={this.seePack} getPack={this.getPack} seePack={this.seePack} addToDeck={this.addToDeck} seePack={this.state.seePack} getTeam={this.getTeam} seeDeck={this.seeDeck} exitDeck={this.exitDeck} addFirst={this.addFirst}/>
    {(this.state.seeLoginForm === true)
      ? <LoginForm exit={this.exitLogInForm}loggingUser={this.loggingUser} />
      :''
    }
    
    <Slider/>
    
    {(this.state.seeSigninForm === true)

      ? <SigninForm userImg={this.state.userImg} change={this.fileChange} exit={this.exitSigninForm}loggingUser={this.loggingUser} register={this.register}/>
      :''
    }
    
   

    {(this.state.seePack === true )
      ? <NewPack exit={this.exitStats} img={this.state.img} seeStats={this.state.seeStats} stats={this.state.stats} getStats={this.getStats} newPack={this.state.newPack} addToDeck={this.addToDeck} getStats={this.getStats}/>
      :''
    }
    
     { (this.state.seeTeam=== true && this.state.userLoggedIn === true && this.state.seePost=== true)
        
      ?<div className='home-page'>
    <Team id='team'  right={this.state.RF} addRight={this.addRight} center={this.state.CF} addCenter={this.addCenter} left={this.state.LF} addLeft={this.addLeft} teamName={this.state.teamName} catcher={this.state.C} second={this.state.second} team={this.state.team} options={this.filterPlayers} possible={this.state.options} seeOptions={this.state.seeOptions} exitOptions={this.exitOptions} addCatcher={this.addCatcher}    addFirst={this.addFirst}  addSecond={this.addSecond} short={this.state.SS}addShort={this.addShort} third={this.state.third} addThird={this.addThird} addLeft={this.addLeft}  addCenter={this.addCenter}  addRight={this.addRight}  addDh={this.addDh}/>
   <Post savepic={this.savePic} pic={this.state.profileImage} user={this.state.user}/>
      </div>
      :''
    }

     {(this.state.seeDeck === true)
      ?  <Deck usersDeck={this.state.deck} exitDeck={this.exitDeck} page={currentCards}/>
    
      :''
    }

    {(this.state.seeDeck === true && this.state.deck.length > 9)

        ? <Pagination cardsPerPage={cardsPerPage} totalCards={deck.length} paginate={paginate} prevPage={prevPage} nextPage={nextPage}/>
          : '' 
    }
      {(this.state.newTeam)
        ? <NewTeam submit={this.createTeam} exit={this.exitNewTeam} />
        :''
      }
       {(this.state.showQuestions === true)
        ? <Question exit={this.exitQ} sq={this.state.seeQuestions}/>
        :''
      }
      {(this.state.seeStats === true)
                ? <Stats img={this.state.img} stats={this.state.stats} exit={this.exitStats}/>

                :''

            }







      

  
             
      
      
    </div>
  );
}
}

