import { useContext } from 'react'
import { TranslateContext } from './TranslateContext'
import TranslateFirstLanguageTextarea from './TranslateFirstLanguageTextarea'
import TranslateSecondLanguageTextarea from './TranslateSecondLanguageTextarea'

const TranslateTextarea = () => {
  const { translateStates, translateDispatch } = useContext(TranslateContext)
  const { firstLanguageText, secondLanguageTexts } = translateStates;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
      <TranslateFirstLanguageTextarea
        firstLanguageText={firstLanguageText}
        translateDispatch={translateDispatch}
      />
      {secondLanguageTexts.length > 0 ?
        secondLanguageTexts.map((text, index) => 
        <TranslateSecondLanguageTextarea secondLanguageText={text} key={`secondLangugageText_${index}`} />) :
        <TranslateSecondLanguageTextarea key='' secondLanguageText='' />
      }
    </div>
  )
}

export default TranslateTextarea