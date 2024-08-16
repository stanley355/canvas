import Image from "next/image";
import { useRouter } from "next/router";
import { TbArrowLeft } from "react-icons/tb";

import NextHead from "@/common/components/NextHead";
import Button from "@/common/components/Button";

import { IDatoPagesSchema } from "@/common/lib/api/dato/interfaces";
import { copyToClipboard } from "@/common/lib/copyToClipboard";

const ForgotPassword = () => {
  const router = useRouter();
  const pageSchema: IDatoPagesSchema = {
    _updatedAt: "",
    slug: "/account/forgot-password",
    keywords:
      "languageai, translate, checkbot, text to speech, speech to text, forgot password ",
    seo: {
      title: `Forgot password`,
      description: "Forgot password",
      image: {
        alt: "Languageai.id",
        url: "/images/languageai/logo.png",
        width: 400,
        height: 400,
      },
    },
  };

  return (
    <div className="w-full h-screen lg:flex">
      <NextHead pagesSchema={pageSchema} />
      <div className="lg:max-w-[33%] my-auto py-4 lg:px-4">
        <Button
          variant="link"
          className="p-2 ml-2 text-xl border border-transparent rounded-full hover:border-black"
          onClick={() => router.push("/account/login")}
        >
          <TbArrowLeft />
        </Button>

        <div className="p-4">
          <h1 className="mb-2 text-2xl font-bold">Forgot password</h1>

          <div>Email the system admin at:</div>
          <Button className="my-4" onClick={() => copyToClipboard('winatastanley355@gmail.com')}>winatastanley355@gmail.com</Button>

          <ol className="leading-8 list-decimal list-inside">
            <li>Please use your <b>registered email account</b> </li>
            <li>Put the subject <b>&quot;Reset password&quot; </b> </li>
            <li>System admin will reply with a new password, and please <b>change your password after login </b> </li>
            <li>We don&apos;t to use automatic password reset because of <b>(1) security reasons</b>, and by sending us an email, <b> (2) we can know that it&apos;s you</b>!  </li>
          </ol>
        </div>
      </div>
      <div className="items-center justify-center flex-1 hidden lg:flex bg-brand-primary">
        <Image
          src="/images/account/forgot-password.png"
          alt="Forgot password"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default ForgotPassword;