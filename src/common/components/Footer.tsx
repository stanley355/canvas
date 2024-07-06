import Link from "next/link";
import Image from "next/image";
import {
  TbCopyright,
} from "react-icons/tb";


const Footer = () => (
  <div className="container p-4 mx-auto flex items-center justify-between">
      <Link href="/">
        <Image
          src="/images/languageai/logo.png"
          alt="languageai.id copyright"
          width={100}
          height={50}
          className="h-full w-auto"
        />
      </Link>

      <div className="flex items-center">
        <span>{new Date().getFullYear()}</span>
        <TbCopyright className="hidden lg:flex" />
        <span className="hidden lg:flex">languageai.id</span>
      </div>
  </div>
);

export default Footer;
