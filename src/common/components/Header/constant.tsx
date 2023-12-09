import { FaLanguage, FaRobot, FaCircleUser, FaRupiahSign } from "react-icons/fa6";

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
