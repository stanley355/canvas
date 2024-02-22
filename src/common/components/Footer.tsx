import Link from "next/link";
import Image from "next/image";
import { TbCopyright, TbLanguage, TbBrandGrammarly } from "react-icons/tb";
import { FaRupiahSign } from "react-icons/fa6";

const Footer = () => (
  <div className="container mx-auto pt-4 px-4 lg:px-0">
    <div className="grid grid-cols-2 mb-4">
      <div>
        <div className="font-bold text-lg">Features</div>
        <Link
          href="/login/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          <TbLanguage />
          <span>AI Translate</span>
        </Link>
        <Link
          href="/login/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          <TbBrandGrammarly />
          <span>AI Grammar</span>
        </Link>
        <Link
          href="/plans/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          <FaRupiahSign />
          <span>Pricing</span>
        </Link>
      </div>

      <div>
        <div className="font-bold text-lg">Company</div>
        <Link
          href="/login/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          About
        </Link>
        <Link
          href="/login/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          Support
        </Link>
      </div>
    </div>
    <div className="flex items-center justify-between py-4">
      <Link href="/" className="flex items-center gap-1 justify-between">
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
