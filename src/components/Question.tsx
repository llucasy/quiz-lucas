'use client'

import { QuizContext } from '@/contexts/Quiz'
import { useContext } from 'react'

import Option from '@/components/Option'

const Question = () => {
  const [quizState, dispatch] = useContext<any>(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (option: string) => {
    dispatch({ type: 'CHECK_ANSWER', payload: { answer: currentQuestion.answer, option } })
  }

  return (
    <div className="text-center max-w-lg bg-[#8435de] rounded-2xl p-8">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length} - Score: {quizState.score}
      </p>
      <h2 className="mb-4">{currentQuestion.question}</h2>
      <div>
        <p className="mb-4">
          {currentQuestion.options.map((option: any) => (
            <Option
              key={option.id}
              option={option.text}
              answer={currentQuestion.answer}
              selectOption={() => onSelectOption(option)}
            />
          ))}
        </p>
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })} type="button">
          Continuar
        </button>
      )}
    </div>
  )
}

export default Question
