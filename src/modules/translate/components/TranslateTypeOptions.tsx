import { FaLanguage, FaImage } from "react-icons/fa6";

export const TRANSLATE_TYPE_OPTIONS = [
  {
    label: (
      <div className="flex items-center gap-2">
        <FaLanguage className="text-xl" />
        <span>Text Translate</span>
      </div>
    ),
    value: "text",
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <FaImage className="text-xl" />
        <span>Image Translate</span>
      </div>
    ),
    value: "image",
  },
];
