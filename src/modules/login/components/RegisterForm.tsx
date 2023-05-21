import React from 'react';
import { SiTaichilang } from 'react-icons/si';
import GoogleLoginBtn from './GoogleLoginBtn';

const RegisterForm = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="flex flex-row items-center mb-2">
        <SiTaichilang className="text-3xl"/>
        <span className="ml-2 text-2xl ">Registration</span>
      </h1>
      <h2 className="text-2xl mb-2">Don't worry, it's always free !</h2>
      <div>Direct Login via Google</div>
      <GoogleLoginBtn />
      <form action="">
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id='email_input' />
      </div>
      </form>

    </div>
  )
};

export default RegisterForm;