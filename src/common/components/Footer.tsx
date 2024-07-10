import Link from "next/link";
import Image from "next/image";
import { TbCopyright } from "react-icons/tb";

const Footer = () => (
  <div className="p-4 flex items-center justify-between">
    <Link href="/">
      <Image
        src="/images/languageai/logo.png"
        alt="languageai.id copyright"
        width={100}
        height={50}
        className="h-full w-auto"
      />
    </Link>

    <div>{new Date().getFullYear()}</div>
  </div>
);

export default Footer;
