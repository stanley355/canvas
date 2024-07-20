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
    title: "AI SPEECH TO TEXT",
    url: "/speech-to-text/",
    icon: <TbMicrophone />,
  },
  {
    title: "AI STUDENTS",
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
