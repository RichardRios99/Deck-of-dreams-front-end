import React, { Component, useState } from 'react'
import PostNav from './post-nav'
import { Feed, Icon } from 'semantic-ui-react'
import '../post.css'
import NewPost from './newPost.js'





export default class Post extends Component {
 	constructor(props){
        super(props)
        this.state = {
            post: [],
            seeNewPost: false
            
            
       }
    }

    getPost = async() => {

      
              const post = await fetch('https://deck-of-dreams-backend.herokuapp.com/post',{
       credentials: "include" })
              const allPost = await post.json()
           

              await this.setState({
                post: allPost.reverse()
                // seePack: true,
                 
              })

              console.log('POOOOOOSSSSSTTTTT', this.state.post)
    }

    createPost = (event) => {
    console.log('author', this.props.user)
    console.log('this is the message', event.target.message.value)
    event.preventDefault()
    const url = 'http://localhost:3003/post'
     const postBody = {
       message: event.target.message.value,
       author: this.props.user,
       img: this.props.pic
       
     }
     
        fetch(url, {
         method: 'POST',
         body: JSON.stringify(postBody),
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: "include" // SENDING COOKIES
       })

        .then(data=>data.json())

        .then(parsedData=> {
          let joined = [parsedData].concat(this.state.post)
         console.log('total post array right after last post is created', joined)
          this.setState({
          seeNewPost:false,
          post:joined
         })
         

        })
        
          
         // this.setState({
         //  user:logindBody.username,
         //  seeLoginForm: false,
         //  userLoggedIn: true,
         // })
       
     }
       
    

    seeNewPost = async(e) => {
      this.setState({
        seeNewPost: true
      })
    }
    
    exitPost = async(e) => {
      this.setState({
        seeNewPost: false
      })
    }
    

   componentDidMount() {
    this.getPost()
    
   }

   shouldComponetUpdate(prevState) {
    if (this.state.post !== this.prevState.post) {
      return true
    }

   }


    render() {
      console.log('P2qwdsaqwdas', this.state.post)
    	return (

    		<div className='post-container'>
            <PostNav Sticky="top"seeNewPost={this.seeNewPost}/>

            <div className='feed'>
            {this.state.post.map(eachPost=> {
                return(
                <Feed.Event>
      <Feed.Label>
       <img id='feedimg'src={eachPost.img} />
       </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <a id='user-name'>{(eachPost.author)}</a> posted an Update
          
        </Feed.Summary>
        <Feed.Extra text>
          {(eachPost.message)}
        </Feed.Extra>
        
      </Feed.Content>
    </Feed.Event>
    )
            })}
            </div>

            {(this.state.seeNewPost)
              ?<NewPost makePost={this.createPost} exit={this.exitPost}/>
              :''
            }
            


    		</div>
    	)
    }



}

