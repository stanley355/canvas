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
  faq: Record<string, string>[];
}