import GoogleLoginBtn from "./GoogleLoginBtn";

const LoginCard = () => {
  return (
    <div className="p-4 py-6 bg-blue-100 border border-blue-400 rounded-lg lg:w-[400px] mt-[5%] mx-auto">
      <div className="p-1 mb-4 text-sm bg-blue-200 rounded-md">We are experiencing issues with Password login, but you can login with your Gmail Account</div>
      <h1 className="mb-6 text-2xl font-semibold text-center text-brand-primary">Login in one click</h1>
      <div className="flex items-center justify-center mb-4 animate-bounce">
        <GoogleLoginBtn />
      </div>

      <div>
        By signing up, you agree to the <b>Terms and Conditions</b> and <b> Privacy Policy</b>.
      </div>
    </div>
  );
};

export default LoginCard;
