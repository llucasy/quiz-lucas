'use client'

import { createContext, useReducer } from 'react'
import questions from '@/data/questions'

const STAGES = ['Start', 'Playing', 'End']

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
}

const quizReducer = (state: any, action: any) => {
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
        answerSelected: false,
      }
    case 'NEW_GAME':
      return initialState
    case 'CHECK_ANSWER':
      if (state.answerSelected) return state
      const option = action.payload.option
      return {
        ...state,
        score: action.payload.answer === option ? state.score + 1 : state.score,
        answerSelected: option,
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
