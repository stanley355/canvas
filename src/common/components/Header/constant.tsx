import { FaDochub, FaLanguage, FaNewspaper, FaRobot, FaUserCircle } from "react-icons/fa";

export const HEADER_MENU = [
  {
    title: "DocTrans",
    url: "/document/",
    icon: <FaDochub />,
    desc:
      [
        "Translate All Languages",
        "Keep Translations in Documents",
        "100% Free",
      ]
  },
  {
    title: "NewsLetter",
    url: "/media/",
    icon: <FaNewspaper />,
    desc:
      [
        "AI News Around The World",
        "Updated Everyday",
        "News in All Languages",
      ]
  },
  {
    title: "AI Checkbot",
    url: "/checkbot/",
    icon: <FaRobot />,
    desc:
      [
        "Correct Grammar in All Languages",
        "10x Better than Grammarly",
        "100% Free",
      ]
  },
  {
    title: "AI Checkbot+",
    url: "/premium/checkbot/",
    icon: <FaRobot />,
    desc:
      [
        "Correct Grammar in All Languages",
        "20x Better than Grammarly",
        "Rp1 per word",
      ]
  },
  {
    title: "AI Translate",
    url: "/translate/",
    icon: <FaLanguage />,
    desc:
      [
        "Translate All Languages",
        "10x Better than Google Translate",
        "100% Free",
      ]
  },
  {
    title: "AI Translate+",
    url: "/premium/translate/",
    icon: <FaLanguage />,
    desc:
      [
        "Translate All Languages",
        "20x Better than Google Translate",
        "Rp1 per word",
      ]
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
