import React from "react";
import { toast } from "react-toastify";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleLoginBtn = () => {
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
          width="300"
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleLoginBtn;
