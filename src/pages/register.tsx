import React, { useEffect } from "react";
import Layout from "@/common/components/Layout";
import RegisterForm from "@/modules/login/components/RegisterForm";
import Cookies from "js-cookie";

const Register = () => {
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      window.location.href = "/";
    }
  });

  return (
    <Layout>
      <div className="container mx-auto h-screen p-4">
        <RegisterForm />
      </div>
    </Layout>
  );
};

export default Register;
