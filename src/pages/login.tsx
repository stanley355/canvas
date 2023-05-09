import React from "react";
import Layout from "@/common/components/Layout";
import LoginForm from "@/modules/login/components/LoginForm";
import RegisForm from "@/modules/login/components/RegisForm";
import ForgotPasswordForm from "@/modules/login/components/ForgotPasswordForm";


const LoginPage = () => {
  return (
    <Layout>
      <div className="container mx-auto flex items-center justify-center my-20 px-4">
        {/* <LoginForm /> */}
        {/* <RegisForm /> */}
        <ForgotPasswordForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
