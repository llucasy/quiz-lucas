'use client'

import { QuizContext } from '@/contexts/Quiz'
import { useContext } from 'react'

const Question = () => {
  const [quizState, dispatch] = useContext<any>(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  console.log(quizState)

  return (
    <div className='text-center max-w-lg bg-[#8435de] rounded-2xl p-8'>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2 className='mb-8'>{currentQuestion.question}</h2>
      <div>
        <p className='mb-4'>Opções</p>
      </div>
      <button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })} type='button'>Continuar</button>
    </div>
  )
}

export default Question
