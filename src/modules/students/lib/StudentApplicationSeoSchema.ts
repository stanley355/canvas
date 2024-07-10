import { IDatoPagesSchema } from "@/common/lib/api/dato/interfaces";

export const STUDENT_APPLICATION_SEO_SCHEMA: IDatoPagesSchema = {
  _updatedAt: "",
  slug: "/students/application",
  keywords: "",
  seo: {
    title: `Student Plan Application`,
    description:
      "Enter your student information to get free & unlimited use of Languageai",
    image: {
      alt: "Languageai.id",
      url: "/images/languageai/logo.png",
    },
  },
};
