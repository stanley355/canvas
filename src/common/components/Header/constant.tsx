import { TbBrandGrammarly, TbLanguage, TbUserCircle } from "react-icons/tb";

export const HEADER_MENU = [
  {
    title: "AI Translate",
    url: "/translate/",
    icon: <TbLanguage />,
  },
  {
    title: "AI Grammar",
    url: "/document/",
    icon: <TbBrandGrammarly />,
  },
  {
    title: "Account",
    url: "/profile/",
    icon: <TbUserCircle />,
  },
  {
    title: "Login",
    url: "/login/",
    icon: <TbUserCircle />,
  },
];
