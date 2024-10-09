'use client'

import { QuizContext } from '@/contexts/Quiz'
import { useContext, useEffect } from 'react'

import GameOver from '@/components/GameOver'
import Question from '@/components/Question'
import Welcome from '@/components/Welcome'

export default function Home() {
  const [quizState, dispatch] = useContext<any>(QuizContext)

  useEffect(() => {
    ;(async () => {
      const response = await fetch('api/stella')
      const data = await response.json()
      dispatch({ type: 'SET_QUESTIONS', payload: { questions: data } })
      dispatch({ type: 'REORDER_QUESTIONS' })
    })()
  }, [dispatch])

  return (
    <main className="flex flex-col items-center justify-center text-center pt-12">
      <h1 className="text-3xl font-bold underline mb-8">Quiz Lucas</h1>
      {quizState.gameStage === 'Start' && <Welcome name="stella" />}
      {quizState.gameStage === 'Playing' && <Question />}
      {quizState.gameStage === 'End' && <GameOver />}
    </main>
  )
}
