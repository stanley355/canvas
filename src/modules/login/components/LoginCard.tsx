import GoogleLoginBtn from "./GoogleLoginBtn";

const LoginCard = () => {
  return (
    <div className="p-4 py-6 lg:w-[400px] mt-[5%] mx-auto lg:mt-0 border border-brand-primary rounded-lg bg-white">
      <div className="p-2 text-white text-center mb-4 text-sm bg-brand-primary rounded-md">
        We are experiencing issues with Password login, but you can login with
        your Gmail Account
      </div>
      <h1 className="mb-6 text-2xl font-semibold text-center ">
        Click to continue
      </h1>
      <div className="flex items-center justify-center mb-4">
        <GoogleLoginBtn />
      </div>

      <div className="text-center">
        By signing up, you agree to the <b className="text-brand-primary">Terms and Conditions</b> and{" "}
        <b className="text-brand-primary"> Privacy Policy</b>.
      </div>
    </div>
  );
};

export default LoginCard;
