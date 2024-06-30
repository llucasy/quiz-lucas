'use client'

import Image from 'next/image'

import quizImg from '@/img/quiz.svg'
import { Dispatch, useContext } from 'react'
import { QuizContext } from '@/contexts/Quiz'

const Welcome = () => {
  const [quizState, dispatch] = useContext<any>(QuizContext)

  return (
    <div className="flex flex-col justify-center items-center max-w-[500px]">
      <h2 className="text-5xl font-bold mb-4">Seja bem-vindo!</h2>
      <p className="mb-4 text-[#8435de]">Clique no botão abaixo para começar:</p>
      <button
        onClick={() => dispatch({ type: 'CHANGE_STATE' })}
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Iniciar
      </button>
      <Image className="mt-8" src={quizImg} alt="Inicio do Quiz" />
    </div>
  )
}

export default Welcome
