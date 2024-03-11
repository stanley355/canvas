import Link from "next/link";
import Image from "next/image";
import { TbCopyright, TbLanguage, TbBrandGoogle } from "react-icons/tb";

const Footer = () => (
  <div className="container pt-4 mx-auto">
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <div className="text-lg font-bold">Features</div>
        <Link
          href="/translate/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          <TbLanguage />
          <span>AI Translate</span>
        </Link>
        <Link
          href="/grammar-check/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          <TbBrandGoogle />
          <span>AI Grammar Check</span>
        </Link>
      </div>

      <div>
        <div className="text-lg font-bold">Company</div>
        <Link
          href="/login/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          About
        </Link>
        <Link
          href="/support/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          Support
        </Link>
      </div>
    </div>
    <div className="flex items-center justify-between py-4">
      <Link href="/" className="flex items-center justify-between gap-1">
        <Image
          src="/images/languageai.png"
          alt="LanguageAI"
          width={30}
          height={30}
          className="border border-black"
        />
        <span>LanguageAI</span>
      </Link>

      <div className="flex items-center">
        <span>{new Date().getFullYear()}</span>
        <TbCopyright />
        <span>LanguageAI</span>
      </div>
    </div>
  </div>
);

export default Footer;
