import React, { useContext } from 'react'
import {QuizContext} from '../context/quiz'
import Answer from './Answer'

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]


  return (
    <div >
        <div >
            {currentQuestion.question}
        </div>

        <Answer 
         currentAnswer={quizState.currentAnswer}
         correctAnswer={currentQuestion.correctAnswer}
         correctStatus={quizState.correctStatus}
         incorrectStatus={quizState.incorrectStatus}
         selected={quizState.selected}
         

        onSelectAnswer={(answer) => 
             dispatch ({ type: 'SELECT_ANSWER', payload: answer})} />
    </div>
  )
}

export default Question
