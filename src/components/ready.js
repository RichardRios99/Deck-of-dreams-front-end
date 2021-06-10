import React, { useState } from 'react';
import '../questions.css'
import Button from 'react-bootstrap/Button';
import {Modal} from 'react-bootstrap'
import '../questions.css'

export default function App(props) {
	
	return (
		<div className='app'>
			
			<Modal show={true}>
			<Modal.Header className='q-header'>
			</Modal.Header>
			<Modal.Body>
				<div className='score-section'>
				are you ready>
				</div>
			</Modal.Body>
			<Modal.Footer>
			<Button onClick={props.open()}>hi</Button> 
			</Modal.Footer>
			</Modal>

			
		</div>
	);
}
