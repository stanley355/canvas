import { useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FaRupiahSign } from "react-icons/fa6";
import GoogleLoginBtn from "@/modules/login/components/GoogleLoginBtn";
import CanvasLink from "@/common/components/ui/CanvasLink";

const HomeHero = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) setIsLogin(true);
  }, [router]);

  return (
    <>
      <div
        style={{ backgroundColor: "rgba(255, 255, 255 , 0.5)" }}
        className="bg-[url('/images/home/hero-background.webp')] bg-cover py-4 mb-4 lg:bg-blend-overlay"
      >
        <Image
          src={"/images/languageai.png"}
          alt="LanguageAi"
          width={200}
          height={200}
          className="p-2 mx-auto bg-white border-4 rounded-full shadow-lg lg:border-black"
        />
      </div>

      <div className="px-4">
        <h1 className="mb-4 text-4xl font-bold text-center lg:text-5xl">
          Solve all language problems
        </h1>
        <h2 className="mb-8 text-xl text-center">
          Multilanguage writing and translation, our AI gets it all covered{" "}
        </h2>
        <div className="flex items-center justify-center h-12 mb-8 ">
          {isLogin ? (
            <CanvasLink
              href="/plans/"
              variant="primary"
              className="w-1/2 gap-2 text-lg"
            >
              <FaRupiahSign />
              See Pricing
            </CanvasLink>
          ) : (
            <GoogleLoginBtn />
          )}
        </div>
      </div>
    </>
  );
};

export default HomeHero;
