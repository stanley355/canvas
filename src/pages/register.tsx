import React from "react";
import Layout from "@/common/components/Layout";
import RegisForm from "@/modules/login/components/RegisForm";

const Register = () => {
  return (
    <Layout>
      <div className="container mx-auto h-screen p-4 lg:w-1/3">
        <RegisForm />
      </div>
    </Layout>
  );
};

export default Register;
