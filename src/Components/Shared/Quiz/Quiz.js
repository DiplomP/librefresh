import { Button } from '@mui/material';
import React, { useState } from 'react'
import './quiz.css'

const Quiz = ({questions}) => {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	const handleReset = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
	};
  return (
	<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<span className='result'>Вы набрали {score} из {questions.length}</span>
					<Button variant="outlined" onClick={() => handleReset()}>Пройти тест снова</Button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Вопрос {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<Button key={answerOption.answerText} color="info" variant="contained" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
							// <button key={answerOption.answerText} className='button-quiz' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
  )
}

export default Quiz