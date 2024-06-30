import Link from "next/link";
import Image from "next/image";
import {
  TbCopyright,
  TbLanguage,
  TbPhotoAi,
  TbQuestionMark,
  TbSpeakerphone,
} from "react-icons/tb";
import { FaRobot, FaRupiahSign } from "react-icons/fa6";
import { PiStudentDuotone } from "react-icons/pi";

const Footer = () => (
  <div className="container p-4 pb-0 mx-auto">
    <div className="flex justify-between grid-cols-2 gap-4 mb-4 lg:grid">
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
          <FaRobot />
          <span>AI Checkbot</span>
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
      </div>

      <div>
        <div className="text-lg font-bold">Company</div>

        <Link
          href="/plans/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          <FaRupiahSign />
          <span>Pricing</span>
        </Link>
        <Link
          href="/plans/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          <PiStudentDuotone />
          <span>Student Pricing</span>
        </Link>
        <Link
          href="/support/"
          className="flex items-center gap-1 py-2 hover:font-bold"
        >
          <TbQuestionMark />
          Help and support
        </Link>
      </div>
    </div>
    <div className="flex items-center justify-between py-4 pb-6">
      <Link href="/">
        <Image
          src="/images/languageai/logo.png"
          alt="languageai.id"
          width={150}
          height={65}
          className="h-full"
        />
      </Link>

      <div className="flex items-center text-brand-primary pt-2">
        <span>{new Date().getFullYear()}</span>
        <TbCopyright className="hidden lg:flex" />
        <span className="hidden lg:flex">languageai.id</span>
      </div>
    </div>
  </div>
);

export default Footer;
