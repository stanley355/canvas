import { useContext } from 'react'
import CheckbotInstructionSelect from './CheckbotInstructionSelect'
import { CheckbotContext } from './CheckbotContext'

const CheckbotBody = () => {
  const { checkbotStates, checkbotDispatch } = useContext(CheckbotContext);

  return (
    <div className='h-screen grid grid-cols-2'>
      <div>
        <CheckbotInstructionSelect checkbotDispatch={checkbotDispatch} />
      </div>
    </div>
  )
}

export default CheckbotBody