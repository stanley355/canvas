import dynamic from "next/dynamic";
import Script from "next/script";
import { useReducer } from "react";
import { AppContext } from "./AppContext";
import { appReducer } from "../lib/appReducer";
import { APP_STATES } from "../lib/appStates";

const LoginModal = dynamic(
  () => import("../../account/login/components/LoginModal"),
  {
    ssr: false,
  }
);
const MonthlyLimitModal = dynamic(
  () => import("../../../common/components/MonthlyLimitModal"),
  { ssr: false }
);

interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider = (props: IAppProvider) => {
  const [appStates, appDispatch] = useReducer(appReducer, APP_STATES);
  return (
    <AppContext.Provider value={{ appStates, appDispatch }}>
      {props.children}
      {appStates.showLoginModal && <LoginModal />}
      {appStates.showMonthlyLimitModal && (
        <MonthlyLimitModal
          onCloseClick={() =>
            appDispatch({ key: "showMonthlyLimitModal", value: false })
          }
        />
      )}
    </AppContext.Provider>
  );
};

export default AppProvider;
