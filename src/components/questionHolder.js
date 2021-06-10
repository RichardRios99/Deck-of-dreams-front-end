import React, { useState, useEffect} from 'react';
import '../questions.css'
import Button from 'react-bootstrap/Button';
import {Modal} from 'react-bootstrap'
import '../questions.css'
import Question from './questions.js'
import Ready from './ready.js'


export default function Qholder(props) {

	console.log('exit function',props.exit)
  const [show, setShow] = useState(true);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true) ;

 

  console.log('the value of unconditional',show)
  return (
  	<>
  	

  	 
  	
    </>
  );

}

