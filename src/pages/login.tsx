import React, { useState } from "react";
import Layout from "@/common/components/Layout";
import LoginForm from "@/modules/login/components/LoginForm";
import RegisForm from "@/modules/login/components/RegisForm";
import ForgotPasswordForm from "@/modules/login/components/ForgotPasswordForm";

const LoginPage = () => {
  const [formType, setFormType] = useState("login");

  const ActiveForm = () => {
    const forms: any = {
      login: () => {
        return (
          <LoginForm
            onRegisClick={() => setFormType("register")}
            onForgotPassClick={() => setFormType("forgot_password")}
          />
        );
      },
      register: () => {
        return <RegisForm />;
      },
      forgot_password: () => {
        return <ForgotPasswordForm />;
      },
    };

    return forms[formType]();
  };

  return (
    <Layout>
      <div className="container mx-auto flex items-center justify-center my-20 px-4">
        <ActiveForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
