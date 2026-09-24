export interface Article {
  id: string;
  publicationDate: string;
  name: string;
  image: string;
  path: string;
  lead: string;
  summaryItems: ArticleSummaryItem[];
  tableOfContentItems: ArticleTableOfContentItem[];
  sections: ArticleSection[];
}

export interface ArticleSummaryItem {
  id: string;
  name: string;
}

export interface ArticleTableOfContentItem {
  id: string;
  name: string;
  link: string;
}

export type MobileImageMode = 'SAME' | 'CUSTOM' | 'HIDDEN';

export interface ArticleSection {
  id: string;
  subHeading: string;
  paragraph: string;
  imageLarge: string;
  imageSmall: string;
  mobileImageMode: MobileImageMode;
  slug: string;
}

export interface ArticleSaveRequest {
  id: string;
  name: string;
  image: string;
  lead: string;

  summaryItems: {
    id: string | null;
    name: string;
  }[];

  tableOfContentItems: {
    id: string | null;
    name: string;
    link: string;
  }[];

  sections: {
    id: string | null;
    subHeading: string;
    paragraph: string;
    imageLarge: string;
    imageSmall: string;
    mobileImageMode: MobileImageMode;
    slug: string;
  }[];
}
