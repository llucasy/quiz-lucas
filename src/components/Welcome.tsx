'use client'

import Image from 'next/image'

import quizImg from '@/img/quiz.svg'
import { Dispatch, useContext, useEffect, useRef, useState } from 'react'
import { QuizContext } from '@/contexts/Quiz'

const Welcome = ({ name }: { name: string }) => {
  const [quizState, dispatch] = useContext<any>(QuizContext)
  const [subjects, setSubjects] = useState<[{ subject: string }]>([{ subject: '' }])
  const nameRef = useRef(name)

  useEffect(() => {
    ;(async () => {
      const response = await fetch(`api/subject/${nameRef.current}`)
      const data: [{ subject: string }] = await response.json()
      return data
    })().then((data) => setSubjects(data))
  }, [])

  return (
    <div className="flex flex-col justify-center items-center max-w-[500px]">
      <h2 className="text-4xl font-bold mb-4">
        Seja bem-vinda, <span className="text-purple-500 capitalize">{name}</span>!
      </h2>
      <p className="mb-4 text-[#8435de]">Clique no botão abaixo para começar:</p>
      <div className="flex gap-6">
        {subjects.map((subject) => (
          <button
            key={subject.subject}
            onClick={() => dispatch({ type: 'CHANGE_STATE' })}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {subject.subject}
          </button>
        ))}
      </div>
      {/* <button
        onClick={() => dispatch({ type: 'CHANGE_STATE' })}
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Iniciar
      </button> */}
      <Image className="mt-8" src={quizImg} alt="Inicio do Quiz" />
    </div>
  )
}

export default Welcome
