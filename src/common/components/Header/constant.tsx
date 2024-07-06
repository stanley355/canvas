import {
  TbLanguage,
  TbUserCircle,
  TbHelp,
  TbPhotoAi,
  TbSpeakerphone,
} from "react-icons/tb";
import { FaRobot, FaRupiahSign } from "react-icons/fa6";
import { PiStudentDuotone } from "react-icons/pi";

export const MOBILE_HEADER_MENU = [
  {
    title: "AI TRANSLATE",
    url: "/translate/",
    icon: <TbLanguage />,
  },
  {
    title: "AI CHECKBOT",
    url: "/checkbot/",
    icon: <FaRobot />,
  },
  {
    title: "AI TEXT TO SPEECH",
    url: "/text-to-speech/",
    icon: <TbSpeakerphone />,
  },
  {
    title: "SUPPORT AND HELP",
    url: "/support/",
    icon: <TbHelp />,
  },
  {
    title: "FOR STUDENTS",
    url: "/students/",
    icon: <PiStudentDuotone />,
  },
  {
    title: "PRICING",
    url: "/plans/",
    icon: <FaRupiahSign />,
  },


  {
    title: "ACCOUNT",
    url: "/account/",
    icon: <TbUserCircle />,
  },
  {
    title: "LOGIN",
    url: "/login/",
    icon: <TbUserCircle />,
  },
];
