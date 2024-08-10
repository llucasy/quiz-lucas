import Image from 'next/image'
import { useContext } from 'react'
import { QuizContext } from '@/contexts/Quiz'

import WellDone from '@/img/welldone.svg'

const GameOver = () => {
  const [quizState, dispatch] = useContext<any>(QuizContext)

  return (
    <div className='text-center max-w-lg flex flex-col [&>p]:mb-4 [&>p]:text-[#8435de]'>
      <h2 className='mb-4'>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
      <Image className='m-8' height={200} src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: 'NEW_GAME' })} type='button'>Reiniciar o Quiz</button>
    </div>
  )
}

export default GameOver