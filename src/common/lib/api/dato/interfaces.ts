export interface IDatoPagesSchemaSeo {
  title: string;
  description: string;
  image: {
    alt: string;
    url: string;
    width: number;
    height: number;
  };
}

export interface IDatoPagesSchema {
  _updatedAt: string;
  slug: string;
  keywords: string;
  seo: IDatoPagesSchemaSeo;
}

interface IDatoBlog extends IDatoPagesSchema {
  content: string;
  relatedArticles: { title: string; slug: string; _createdAt: string }[];
}

export interface IDatoBlogSchema {
  blog: IDatoBlog;
}
