import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import Button from "./Button";
import { sendFirebaseEvent } from "../lib/firebase/sendFirebaseEvent";

interface ISocialShare {
  url: string;
}

const SocialShare = (props: ISocialShare) => {
  const { url } = props;

  const SOCIAL_LIST = [
    {
      title: "facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: <FaFacebookSquare className="text-blue-700 bg-white" />,
    },
    {
      title: "twitter",
      url: `https://twitter.com/intent/tweet?text=LanguageAI&url=${url}`,
      icon: <FaTwitterSquare className="text-blue-500 bg-white" />,
    },
    {
      title: "linkedin",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
      icon: <FaLinkedin className="text-blue-600 bg-white" />,
    },
    {
      title: "whatsapp",
      url: `https://api.whatsapp.com/send?text=${url}`,
      icon: <FaWhatsappSquare className="text-green-500 bg-white" />,
    },
  ];

  return (
    <div className="flex flex-row items-center my-8">
      <span className="text-xl mr-2">Share to others: </span>
      <span className="flex flex-row gap-2 text-3xl">
        {SOCIAL_LIST.map((social: any) => (
          <Button
            type="link"
            href={social.url}
            title={social.title}
            key={social.title}
            onClick={() => sendFirebaseEvent("social_share", {})}
          >
            {social.icon}
          </Button>
        ))}
      </span>
    </div>
  );
};

export default SocialShare;
