import React from 'react'
import Quiz from '../../../Shared/Quiz/Quiz'
import { questionsCSS } from '../../../store'

const QuizCSS = () => {
  return (
	<div><Quiz questions={questionsCSS} /></div>
  )
}

export default QuizCSS