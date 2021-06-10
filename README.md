# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



right={this.state.RF} addRight={this.addRight} center={this.state.CF} addCenter={this.addCenter} left={this.state.LF} addLeft={this.addLeft} teamName={this.state.teamName} catcher={this.state.C} second={this.state.second} team={this.state.team} options={this.filterPlayers} possible={this.state.options} seeOptions={this.state.seeOptions} exitOptions={this.exitOptions} addCatcher={this.addCatcher}    addFirst={this.addFirst}  addSecond={this.addSecond} short={this.state.SS}addShort={this.addShort} third={this.state.third} addThird={this.addThird} addLeft={this.addLeft}  addCenter={this.addCenter}  addRight={this.addRight}  addDh={this.addDh}



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
    user:'',
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
    creatingTeam: false

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
         
         await this.setState({
          user:logindBody.username,
          seeLoginForm: false,
          userLoggedIn: true,
          seeTeam: true
          

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
           password: e.target.password.value
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
         seeQuestions: false
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
         await this.setState({
          seeTeam: true,
          teamName: event.target.newTeam.value,
          newTeam:false
         })
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


  exitNewTeam = async (event) => {
    await this.setState({
      
      newTeam: false
    })
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
         await this.setState({
          user: response.username,
          userLoggedIn: true,
          seeTeam: false,
          seeDeck: false,
          seeQuestions: false,


          // usersDeck:[]
        
         })
         console.log('found the wefsdcwedscxzwes')
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
  
  

  componentDidMount() {
  
    
       this.getUser()
  }

 
 
   

  showQuestions = () => {
    this.setState({
      showQuestions: true,
      seeTeam: false,
      seePack: false,
      seeDeck: false
    })
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

    


   
   
  <NavBar showQuestions={this.showQuestions} newTeam={this.newTeam} createTeam={this.createTeam}sticky="top" logOut={this.logOut} user={this.state.user}stateForm={this.state.seeLoginForm} seeLoginForm={this.seeLoginForm} seeUser={this.state.user} userLoggedIn={this.state.userLoggedIn} seeRegister={this.seeSigninForm} register={this.register} seePack={this.seePack} getPack={this.getPack} seePack={this.seePack} addToDeck={this.addToDeck} seePack={this.state.seePack} getTeam={this.getTeam} seeDeck={this.seeDeck} exitDeck={this.exitDeck} addFirst={this.addFirst}/>
    {(this.state.seeLoginForm === true)
      ? <LoginForm exit={this.exitLogInForm}loggingUser={this.loggingUser} />
      :''
    }
    

    
    {(this.state.seeSigninForm === true)

      ? <SigninForm exit={this.exitSigninForm}loggingUser={this.loggingUser} register={this.register}/>
      :''
    }
    
    {(this.state.userLoggedIn === false)
      ? <Card/>
      :''
    }

    {(this.state.seePack === true )
      ? <NewPack exit={this.exitStats} img={this.state.img} seeStats={this.state.seeStats} stats={this.state.stats} getStats={this.getStats} newPack={this.state.newPack} addToDeck={this.addToDeck} getStats={this.getStats}/>
      :''
    }
    
     {(this.state.teamName!== '' && this.state.seeTeam=== true && this.state.userLoggedIn === true)
      ?  <Team  right={this.state.RF} addRight={this.addRight} center={this.state.CF} addCenter={this.addCenter} left={this.state.LF} addLeft={this.addLeft} teamName={this.state.teamName} catcher={this.state.C} second={this.state.second} team={this.state.team} options={this.filterPlayers} possible={this.state.options} seeOptions={this.state.seeOptions} exitOptions={this.exitOptions} addCatcher={this.addCatcher}    addFirst={this.addFirst}  addSecond={this.addSecond} short={this.state.SS}addShort={this.addShort} third={this.state.third} addThird={this.addThird} addLeft={this.addLeft}  addCenter={this.addCenter}  addRight={this.addRight}  addDh={this.addDh}/>
    
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
        ? <NewTeam submit={this.createTeam} exit={this.exitNewTeam}/>
        :''
      }
       {(this.state.showQuestions)
        ? <Question/>
        :''
      }
      {(this.state.seeStats === true)
                ? <Stats img={this.state.img} stats={this.state.stats} exit={this.exitStats}/>

                :''

            }





      
    <Games/>

  
             
      
      
    </div>
  );
}
}
/////////////

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
        return response.json()
         console.log('created team ')
        
         await this.setState({
          
          teamName: event.target.newTeam.value,
          newTeam:false
         })
         console.log('see if its Pending!!!!!!',this.state.teamName)
       }
     }
     catch (err) {
       console.log('Error => ', err);
     }    
   }
