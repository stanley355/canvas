import GoogleLoginBtn from "../../account/login/components/GoogleLoginBtn";

const LoginCard = () => {
  return (
    <div className="p-4 py-6 lg:w-[400px] mt-[10%] mx-auto lg:mt-0 border border-brand-primary rounded-lg bg-white">
      <h1 className="mb-6 text-2xl font-semibold text-center ">
        Login to continue
      </h1>
      <div className="flex items-center justify-center mb-4">
        <GoogleLoginBtn />
      </div>

      <div className="text-center">
        By signing up, you agree to the <b>Terms and Conditions</b> and{" "}
        <b> Privacy Policy</b>.
      </div>
    </div>
  );
};

export default LoginCard;
