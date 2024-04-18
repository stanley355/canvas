import Link from "next/link";
import Image from "next/image";
import {
  TbCopyright,
  TbLanguage,
  TbBrandGoogle,
  TbPhotoAi,
  TbSpeakerphone,
} from "react-icons/tb";
import { FaRupiahSign } from "react-icons/fa6";
import { PiStudentDuotone } from "react-icons/pi";

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
        <Link
          href="/image-to-text/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          <TbPhotoAi />
          <span>AI Image to Text</span>
        </Link>
        <Link
          href="/text-to-speech/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          <TbSpeakerphone />
          <span>AI Text to Speech</span>
        </Link>
        <Link
          href="/plans/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          <FaRupiahSign />
          <span>Pricing</span>
        </Link>
        <Link
          href="/plans/students/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          <PiStudentDuotone />
          <span>Student Pricing</span>
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
          Help
        </Link>
      </div>
    </div>
    <div className="flex items-center justify-between py-4">
      <Link href="/" className="flex items-center justify-between gap-1">
        <Image
          src="/images/languageai.png"
          alt="LanguageAI Footer"
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
