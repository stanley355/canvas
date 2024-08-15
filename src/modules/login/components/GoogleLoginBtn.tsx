import React from "react";
import { toast } from "react-toastify";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { handleGoogleLogin } from "../lib/handleGoogleLogin";
import { LOGIN_FAIL_MESSAGE } from "../lib/constant";

const GoogleLoginBtn = () => {
  return (
    <GoogleOAuthProvider
      clientId={String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)}
    >
      <GoogleLogin
        locale="en-US"
        onSuccess={handleGoogleLogin}
        onError={() => toast.error(LOGIN_FAIL_MESSAGE)}
        text="continue_with"
        theme="filled_blue"
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginBtn;
