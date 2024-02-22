import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { TbCopyright } from "react-icons/tb";

const Footer = () => (
  <div className="container mx-auto">
    <div>

    </div>
    <div className='flex items-center justify-between p-2'>
      <Link href="/" className="flex items-center gap-1 justify-between">
        <Image
          src="/images/languageai.png"
          alt="LanguageAI"
          width={30}
          height={30}
          className='border border-black'
        />
        <span>LanguageAI</span>
      </Link>

      <div className="flex items-center gap-1">
        <span>{new Date().getFullYear()}</span>
        <TbCopyright />
        <span>LanguageAI</span>
      </div>
    </div>
    {/* <FaRegCopyright className="mr-2" />
    <span>winatastanley355@gmail.com</span> */}
  </div>
);

export default Footer;
