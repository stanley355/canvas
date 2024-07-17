export interface IDatoPagesSchemaSeo {
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

export interface IDatoBlogSchema {
  blog: IDatoBlog
}

interface IDatoBlog extends IDatoPagesSchema {
  content: string
  heroImage: IDatoBlogHeroImage
}

interface IDatoBlogHeroImage {
  title: any
  url: string
  width: number
  height: number
}

