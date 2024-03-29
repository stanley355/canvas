import {
  TbBrandGrammarly,
  TbLanguage,
  TbUserCircle,
  TbFileDots,
  TbRobotFace,
  TbRobot,
  TbBrandGoogle,
  TbHelp,
  TbPhotoAi,
} from "react-icons/tb";
import { FaRupiahSign } from "react-icons/fa6";

export const HEADER_MENU = [
  {
    title: "AI Translate",
    url: "/translate/",
    icon: <TbLanguage />,
  },
  {
    title: "AI Grammar Check",
    url: "/grammar-check/",
    icon: <TbBrandGoogle />,
  },
  {
    title: "AI Image to Text",
    url: "/image-to-text/",
    icon: <TbPhotoAi />,
  },
  {
    title: "Pricing",
    url: "/plans/",
    icon: <FaRupiahSign />,
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
