import React from "react";
import Layout from "@/common/components/Layout";
import RegisForm from "@/modules/login/components/RegisForm";

const Register = () => {
  return (
    <Layout>
      <div className="container mx-auto h-min-screen p-4">
        <div className="flex items-center justify-center">
          <RegisForm />
        </div>
      </div>
    </Layout>
  );
};

export default Register;
