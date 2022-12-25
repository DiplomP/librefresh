import React from 'react'
import Quiz from '../../../Shared/Quiz/Quiz'
import { questionsJS } from '../../../store'

const QuizJS = () => {
  return (
	<div><Quiz questions={questionsJS} /></div>
  )
}

export default QuizJS