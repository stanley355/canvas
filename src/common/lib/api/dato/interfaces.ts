interface IDatoPagesSchemaSeo {
  title: string;
  description: string;
  image: {
    alt: string;
    url: string;
  };
}

export interface IDatoPagesSchema {
  _updatedAt: string;
  slug: string;
  keywords: string;
  seo: IDatoPagesSchemaSeo;
}

interface IDatoBlogHeroImage {
  title: any;
  url: string;
  width: number;
  height: number;
}

interface IDatoBlog extends IDatoPagesSchema {
  content: string;
  heroImage: IDatoBlogHeroImage;
  relatedArticles: {
    id: string;
    title: string;
    slug: string;
    _updatedAt: string;
  }[];
}

export interface IDatoBlogSchema {
  blog: IDatoBlog;
}
