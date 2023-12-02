import { FaLanguage, FaRobot, FaCircleUser, FaPlus } from "react-icons/fa6";

export const HEADER_MENU = [
  {
    title: "Pricing",
    url: "/plans/",
    icon: <FaPlus />,
  },
  {
    title: "AI Checkbot",
    url: "/checkbot/",
    icon: <FaRobot />,
  },
  {
    title: "AI Translate",
    url: "/translate/",
    icon: <FaLanguage />,
  },
  {
    title: "Profile",
    url: "/profile/",
    icon: <FaCircleUser />,
  },
  {
    title: "Login",
    url: "/login/",
    icon: <FaCircleUser />,
  },
];
