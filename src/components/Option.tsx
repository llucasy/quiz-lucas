import { QuizContext } from '@/contexts/Quiz'
import { useContext } from 'react'

const Option = ({ option, selectOption, answer }: any) => {
  const [quizState, dispatch] = useContext<any>(QuizContext)

  const correctCSS = '!bg-[#0bfc03] font-bold'
  const wrongCSS = 'bg-[#3c0e70] opacity-100'

  console.log(option)

  return (
    <div
      onClick={() => selectOption()}
      className={
        'bg-[#3c0e70] rounded-lg p-4 mb-4 cursor-pointer opacity-80 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 ' +
        (quizState.answerSelected && option === answer
          ? correctCSS
          : ""
        ) + (quizState.answerSelected && option !== answer ? wrongCSS : "")
      }
    >
      <p>{option}</p>
    </div>
  )
}

export default Option
