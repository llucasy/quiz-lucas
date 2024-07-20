import WellDone from '@/img/welldone.svg'
import Image from 'next/image'

const GameOver = () => {
  return (
    <div className='text-center max-w-lg flex flex-col [&>p]:mb-4 [&>p]:text-[#8435de]'>
      <h2 className='mb-4'>Fim de jogo!</h2>
      <p>Pontuação: x</p>
      <p>Você acertou Y de Z perguntas.</p>
      <Image className='m-8' height={200} src={WellDone} alt="Fim do Quiz" />
      <button type='button'>Reiniciar o Quiz</button>
    </div>
  )
}

export default GameOver