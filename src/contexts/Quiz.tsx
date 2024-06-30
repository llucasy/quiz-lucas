'use client'

import { createContext, useReducer } from 'react'
import questions from '@/data/questions'

const STAGES = ['Start', 'Playing', 'End']

const initialState = {
  gameStage: STAGES[0],
  questions,
}

const quizReducer = (state: any, action: any) => {
  console.log(state, action)
  switch (action.type) {
    case 'CHANGE_STATE':
      return state
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
