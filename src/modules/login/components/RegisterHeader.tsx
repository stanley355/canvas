import React from "react";
import Image from "next/image";
import Button from "@/common/components/Button";

const RegisterHeader = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center text-2xl gap-1">
        <span>Language</span>
        <Image
          src="/images/languageai.png"
          alt="Language AI"
          width={30}
          height={30}
        />
      </h1>
      <h2 className="text-center">Pendaftaran Pengguna</h2>
    </div>
  );
};

export default RegisterHeader;
