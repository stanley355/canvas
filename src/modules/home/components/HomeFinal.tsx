import { useEffect, useState, memo } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import LoginMain from "@/modules/account/login/components/LoginMain";

const HomeFinal = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) setIsLogin(true);
  }, [isLogin]);

  if (isLogin) {
    return <></>;
  }

  return (
    <section className="container h-screen py-4 mx-auto lg:py-12">
      <h3 className="text-3xl font-semibold text-center">
        Skip the talk and use it directly
      </h3>
      <div className="mx-auto lg:w-1/2">
        <LoginMain onBackClick={() => router.back()} />
      </div>
    </section>
  );
};

export default memo(HomeFinal);
