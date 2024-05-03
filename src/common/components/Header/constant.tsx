import {
  TbLanguage,
  TbUserCircle,
  TbBrandGoogle,
  TbHelp,
  TbPhotoAi,
  TbSpeakerphone,
} from "react-icons/tb";
import { FaRupiahSign } from "react-icons/fa6";
import { PiStudentDuotone } from "react-icons/pi";

export const HEADER_MENU = [
  {
    title: "Translate",
    url: "/translate/",
    icon: <TbLanguage />,
  },
  {
    title: "Grammar Check",
    url: "/grammar-check/",
    icon: <TbBrandGoogle />,
  },
  {
    title: "Image to Text",
    url: "/image-to-text/",
    icon: <TbPhotoAi />,
  },
  {
    title: "Text to Speech",
    url: "/text-to-speech/",
    icon: <TbSpeakerphone />,
  },
  {
    title: "Pricing",
    url: "/plans/",
    icon: <FaRupiahSign />,
  },
  {
    title: "Student Pricing",
    url: "/plans/students/",
    icon: <PiStudentDuotone />,
  },
  {
    title: "For Students",
    url: "/students/",
    icon: <PiStudentDuotone />,
  },
  {
    title: "Help",
    url: "/support/",
    icon: <TbHelp />,
  },
  {
    title: "Account",
    url: "/account/",
    icon: <TbUserCircle />,
  },
  {
    title: "Login",
    url: "/login/",
    icon: <TbUserCircle />,
  },
];
