import {
  TbBrandGrammarly,
  TbLanguage,
  TbUserCircle,
  TbReportMoney,
} from "react-icons/tb";
import { FaRupiahSign } from "react-icons/fa6";

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
    title: "Pricing",
    url: "/plans/",
    icon: <FaRupiahSign />,
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
