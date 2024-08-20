import {
  TbLanguage,
  TbUserCircle,
  TbHelp,
  TbPhotoAi,
  TbSpeakerphone,
  TbMicrophone,
} from "react-icons/tb";
import { FaRobot, FaRupiahSign } from "react-icons/fa6";
import { PiStudentDuotone } from "react-icons/pi";

export const HEADER_MENU = [
  {
    title: "Checkbot",
    url: "/checkbot/",
    icon: <FaRobot />,
  },
  {
    title: "Translate",
    url: "/translate/",
    icon: <TbLanguage />,
  },
  {
    title: "Translate Audio",
    url: "/translate/audio/",
    icon: <TbLanguage />,
  },
  {
    title: "Text to Speech",
    url: "/text-to-speech/",
    icon: <TbSpeakerphone />,
  },
  {
    title: "Speech to text",
    url: "/speech-to-text/",
    icon: <TbMicrophone />,
  },
  {
    title: "Free for student",
    url: "/students/",
    icon: <PiStudentDuotone />,
  },
  {
    title: "Pricing",
    url: "/plans/",
    icon: <FaRupiahSign />,
  },
  {
    title: "Account",
    url: "/account/",
    icon: <TbUserCircle />,
  },
  {
    title: "Login",
    url: "/account/login/",
    icon: <TbUserCircle />,
  },
];
