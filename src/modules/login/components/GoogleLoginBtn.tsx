import React from "react";
import { toast } from "react-toastify";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { handleGoogleLogin } from "../lib/handleGoogleLogin";

const GoogleLoginBtn = () => {
  return (
    <GoogleOAuthProvider
      clientId={String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)}
    >
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={() => toast.error("Something went wrong, please try again")}
        logo_alignment="left"
        shape="rectangular"
        size="large"
        text="signin_with"
        width="350"
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginBtn;
