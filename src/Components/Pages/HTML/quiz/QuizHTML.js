import React from 'react'
import Quiz from '../../../Shared/Quiz/Quiz'
import { questionsHTML } from '../../../store'

const QuizHTML = () => {
  return (
	<div><Quiz questions={questionsHTML} /></div>
  )
}

export default QuizHTML