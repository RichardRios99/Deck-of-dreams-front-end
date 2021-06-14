import {Modal} from 'react-bootstrap'

import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'
import Avatar from '../images/user.png'



export default class NewImg extends Component {

constructor(props){
super(props)
this.state={
	picArray:[this.props.a1,this.props.a2,this.props.a3,this.props.a4,this.props.a5, this.props.a6,this.props.a7,this.props.a8,this.props.a9,this.props.a10,this.props.a11,this.props.a12]
}


}

showNewFile = () => {
	this.setState({

	})
}

uploadImg = async (e) => {
   


    let formData = new FormData()

    formData.append("image", e.target.files[0])




    try {
       const response = await fetch('https://deck-of-dreams-backend.herokuapp.com/single', {
         method: 'POST',
         body: formData,
         
         credentials: "include" // SENDING COOKIES
       })

       if (response.status === 200) {
         console.log('multer u suck', response.json())
         
         
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





render() {
	const options = this.state.picArray.map((image,index)=> {
		return (
			<img src={image}
				onClick={async(e)=>this.props.selectImg(image)}/>
		)
	})
	return(

		<Modal show ={true}>
            <Modal.Header className='final-nav' >Select your Avatar

            
            <img src={this.props.profileImage}/>
           

            </Modal.Header>



          
                          <Modal.Body>  
                          
                       	{options} 
                       		
                         
                         </Modal.Body>
                        
                        <Modal.Footer className='Header1'>
                        <Button onClick={(e)=> {
                          this.props.save()}}variant="success">
                          Select this image
                        </Button>
                        <Button onClick={(e)=> {
                          this.props.exit()
                        }}variant="success" type="submit">
                          exit
                        </Button>
                        </Modal.Footer>
                      
                      
        </Modal>
	)
}


}