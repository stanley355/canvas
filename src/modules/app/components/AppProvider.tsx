import dynamic from "next/dynamic";
import Script from "next/script";
import { useReducer } from "react";
import { AppContext } from "./AppContext";
import { appReducer } from "../lib/appReducer";
import { APP_STATES } from "../lib/appStates";

const LoginModal = dynamic(() => import("../../login/components/LoginModal"), {
  ssr: false,
});
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
      <Script
        type="text/javascript"
        id="microsoft-clarity"
        strategy="afterInteractive"
      >
        {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "m0voqp1w10");`}
      </Script>
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
