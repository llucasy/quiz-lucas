'use client'

import { createContext, useReducer } from 'react'
import questions from '@/data/questions'

const STAGES = ['Start', 'Playing', 'End']

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
}

const quizReducer = (state: any, action: any) => {
  console.log(state, action)
  switch (action.type) {
    case 'CHANGE_STATE':
      return {
        ...state,
        gameStage: STAGES[1],
      }
    case 'REORDER_QUESTIONS':
      return {
        ...state,
        questions: questions.sort(() => Math.random() - 0.5),
      }
    case 'CHANGE_QUESTION':
      const nextQuestion = state.currentQuestion + 1
      const endGame = nextQuestion >= state.questions.length
      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
      }
    default:
      return state
  }
}

export const QuizContext = createContext({})

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QuizContext.Provider value={useReducer(quizReducer, initialState)}>
      {children}
    </QuizContext.Provider>
  )
}
