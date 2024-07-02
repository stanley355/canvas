import { createContext } from "react";
import { IAppReducerAction } from "../lib/appReducer";
import { APP_STATES, IAppStates } from "../lib/appStates";

interface IAppContext {
  appStates: IAppStates;
  appDispatch: React.Dispatch<IAppReducerAction>;
}

export const AppContext = createContext<IAppContext>({
  appStates: APP_STATES,
  appDispatch: () => {},
});
