import React from 'react';
import Layout from '@/common/components/Layout';
import RegisterForm from '@/modules/login/components/RegisterForm'; 

const Register = () => {
  return (
    <Layout>
      <div className="container mx-auto h-screen p-4">
    <RegisterForm />

      </div>
    </Layout>
  )
};

export default Register;