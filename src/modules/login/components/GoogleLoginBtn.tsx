import React from "react";
import { toast } from "react-toastify";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

interface IGoogleLoginBtn {
    text: "continue_with" | "signup_with" | "signin_with"
}

const GoogleLoginBtn = (props: IGoogleLoginBtn) => {
    const {text} = props;
    const isDesktop = useDesktopScreen();
  return (
    <div className="flex items-center justify-center">
      <GoogleOAuthProvider
        clientId={String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)}
      >
        <GoogleLogin
          onSuccess={(cred) => console.log(cred)}
          onError={() => toast.error("Something went wrong, please try again")}
          logo_alignment="left"
          shape="rectangular"
          size="large"
          text={text}
          width={isDesktop ? "400" : "300"}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleLoginBtn;
