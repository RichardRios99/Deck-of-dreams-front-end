
// sourcing the code in this file here https://github.com/chrisblakely01/quiz-app

import React, { useState } from 'react';
import '../questions.css'
import Button from 'react-bootstrap/Button';
import {Modal} from 'react-bootstrap'
import '../questions.css'
import q1 from '../images/q1.png'
import '../App.css'

export default function App(props) {
	console.log('props in question',props.exit)
	const questions = [
		{
			questionText: 'How many strikes is a strikeout?',
			answerOptions: [
				{ answerText: '4', isCorrect: false },
				{ answerText: '9', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '1', isCorrect: false },
			],
		},
		{
			questionText: 'Who was the last caption of the yankees?',
			answerOptions: [
				{ answerText: 'Babe Ruth', isCorrect: false },
				{ answerText: 'Derek Jeter', isCorrect: true },
				{ answerText: 'Alex Rodriguez', isCorrect: false },
				{ answerText: 'Aron Judge', isCorrect: false },
			],
		},
		{
			questionText: 'the following is the defintion for which baseball term? an illegal motion made by a pitcher that may deceive a base runner',
			answerOptions: [
				{ answerText: 'a balk', isCorrect: true },
				{ answerText: 'a walk ', isCorrect: false },
				{ answerText: 'a bunt', isCorrect: false },
				{ answerText: 'a strikeout', isCorrect: false },
			],
		},
		{
			questionText: 'how many outs are there in one inning?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '3', isCorrect: true },
			],
		},
	];
	let baseUrl = "http://localhost:3003"
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [show, setShow] = useState(false)

	const addMoney = async(event) => {
		const url = baseUrl + '/users/addMoney'
     		
     
       			const response = await fetch(url, {
        		 method: 'PATCH',
         
         		headers: {
           		'Content-Type': 'application/json'
         		},
        	 credentials: "include" // SENDING COOKIES
       			})

       			if (response.status === 200) {
         		console.log('add MONEYYYYY ')
         		}
         		else{
         			console.log('')
         		}
	}

	const handleAnswerOptionClick =  (isCorrect) => {
		if (isCorrect === true) {
			setScore(score + 1)
			addMoney()
        } 

     	
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}

	 const handleClose = () => {setShow(false)
	 	console.log('closing modal')

	 }


		

   
	return (
		<div className='app'>
			{showScore ? (
			<Modal show={true}>
			<Modal.Header className='q'>
			</Modal.Header>
			<Modal.Body>
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			</Modal.Body>
			<Modal.Footer>
			<Button onClick={()=> props.exit()}>exit</Button> 
			</Modal.Footer>
			</Modal>

			) : (
				<>
			<Modal show={true}>
			


						<div className='question-count'>
								<Modal.Header className='q'>
										<span>Question {currentQuestion + 1}</span>/{questions.length}
										<img src={q1}/>
								</Modal.Header>	
						</div>
			<Modal.Body>	
						<div className='question-section'>
					
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
					<div className='answer-section'>

						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<Button className='choices' variant="outline-info" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
						))}

					</div>
			</Modal.Body>
			<Modal.Footer className='q'> <Button variant="info"onClick={()=> props.exit()}>exit</Button> </Modal.Footer>
			</Modal>
				</>
			
			)}
		</div>
	);
}
