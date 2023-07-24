import {
  FaDochub,
  FaLanguage,
  FaRobot,
  FaUserCircle,
} from "react-icons/fa";

export const HEADER_MENU = [
  {
    title: "Document Translate",
    url: "/document/",
    icon: <FaDochub />,
  },
  {
    title: "Premium Checkbot",
    url: "/premium/checkbot/",
    icon: <FaRobot />,
  },
  {
    title: "Premium Translate",
    url: "/premium/translate/",
    icon: <FaLanguage />,
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
    icon: <FaUserCircle />,
  },
  {
    title: "Login",
    url: "/login/",
    icon: <FaUserCircle />,
  },
];
