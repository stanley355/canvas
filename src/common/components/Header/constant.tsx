import {
  FaLanguage,
  FaRobot,
  FaCircleUser,
  FaRupiahSign,
  FaFileCircleQuestion,
  FaFileWord,
} from "react-icons/fa6";

export const HEADER_MENU = [
  {
    title: "Harga",
    url: "/plans/",
    icon: <FaRupiahSign />,
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
    title: "(NEW) Document",
    url: "/document/",
    icon: <FaFileWord />,
  },
  {
    title: "Akun",
    url: "/profile/",
    icon: <FaCircleUser />,
  },
  {
    title: "Masuk",
    url: "/login/",
    icon: <FaCircleUser />,
  },
];
