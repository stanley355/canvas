import { useReducer } from "react"
import { AppContext } from "./AppContext"
import { appReducer } from "../lib/appReducer"
import { APP_STATES } from "../lib/appStates"

interface IAppProvider {
  children: React.ReactNode
}

const AppProvider = (props: IAppProvider) => {
  const [appStates, appDispatch] = useReducer(appReducer, APP_STATES)
  return (
    <AppContext.Provider value={{ appStates, appDispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider