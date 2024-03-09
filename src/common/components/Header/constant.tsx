import {
  TbBrandGrammarly,
  TbLanguage,
  TbUserCircle,
  TbFileDots,
  TbRobotFace,
  TbRobot,
} from "react-icons/tb";
import { FaRupiahSign } from "react-icons/fa6";

export const HEADER_MENU = [
  {
    title: "AI Translate",
    url: "/translate/",
    icon: <TbLanguage />,
  },
  {
    title: "AI Checkbot",
    url: "/checkbot/",
    icon: <TbRobotFace />,
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
