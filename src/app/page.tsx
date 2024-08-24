'use client'

import Image from 'next/image'
import Link from 'next/link'

import quizImg from '@/img/quiz.svg'
import { useContext } from 'react'
import { QuizContext } from '@/contexts/Quiz'

export default function Home() {
  const [quizState, dispatch] = useContext<any>(QuizContext)

  return (
    <main className="flex flex-col items-center justify-center text-center pt-12">
      <h1 className="text-3xl font-bold underline mb-8">Quiz Lucas</h1>
      <div className="flex flex-col justify-center items-center max-w-[500px]">
        <h2 className="text-4xl font-bold mb-4">Perguntas e Respostas</h2>
        <p className="mb-4 text-[#8435de]">Escolha um nome abaixo para começar:</p>
        <div className="flex gap-6">
          <Link href="/stella">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch({ type: 'NEW_GAME' })}
            >
              Stella
            </button>
          </Link>
          <Link href="/stefany">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch({ type: 'NEW_GAME' })}
            >
              Stefany
            </button>
          </Link>
        </div>
        <Image className="mt-8" src={quizImg} alt="Inicio do Quiz" />
      </div>
    </main>
  )
}
