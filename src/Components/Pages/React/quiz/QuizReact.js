import React from 'react'
import Quiz from '../../../Shared/Quiz/Quiz'
import { questionsReact } from '../../../store'

const QuizReact = () => {
  return (
	<div><Quiz questions={questionsReact} /></div>
  )
}

export default QuizReact