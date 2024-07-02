import { useReducer } from "react"
import { TranslateContext } from "./TranslateContext"
import { translateReducer } from "../lib/translateReducer"
import { TRANSLATE_STATES } from "../lib/translateStates"

interface ITranslateProvider {
  children: React.ReactNode
}

const TranslateProvider = (props: ITranslateProvider) => {
  const [translateStates, translateDispatch] = useReducer(translateReducer, TRANSLATE_STATES);
  return (
    <TranslateContext.Provider value={{ translateStates, translateDispatch }}>
      {props.children}
    </TranslateContext.Provider>
  )
}

export default TranslateProvider