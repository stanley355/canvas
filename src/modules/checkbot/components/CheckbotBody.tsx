import { useContext } from 'react'
import { CheckbotContext } from './CheckbotContext'
import CheckbotInstructionSelect from './CheckbotInstructionSelect'
import CheckbotUserTextarea from './CheckbotUserTextarea';

const CheckbotBody = () => {
  const { checkbotStates, checkbotDispatch } = useContext(CheckbotContext);

  return (
    <div className='lg:grid grid-cols-2 h-screen'>
      <div>
        <CheckbotInstructionSelect checkbotDispatch={checkbotDispatch} />
        <CheckbotUserTextarea
          userText={checkbotStates.userText}
          checkbotDispatch={checkbotDispatch}
        />
      </div>
    </div>
  )
}

export default CheckbotBody