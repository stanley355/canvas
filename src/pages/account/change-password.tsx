import { GetServerSideProps } from "next";
import Image from "next/image";

import NextHead from "@/common/components/NextHead";
import { IDatoPagesSchema } from "@/common/lib/api/dato/interfaces";
import { getChangePasswordServerSideProps } from "@/modules/account/change-password/lib/getChangePasswordServerSideProps";
import ChangePasswordMain from "@/modules/account/change-password/components/ChangePasswordMain";

export const getServerSideProps: GetServerSideProps =
  getChangePasswordServerSideProps;

const ChangePassword = () => {
  const pageSchema: IDatoPagesSchema = {
    _updatedAt: "",
    slug: "/account/change-password",
    keywords:
      "languageai, translate, checkbot, text to speech, speech to text, change password ",
    seo: {
      title: `Change password`,
      description: "Change password",
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
      <ChangePasswordMain />
      <div className="items-center justify-center flex-1 hidden lg:flex bg-brand-primary">
        <Image
          src="/images/account/change-password.png"
          alt="Change password"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default ChangePassword;
