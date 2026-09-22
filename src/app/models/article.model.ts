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

export interface ArticleSection {
  id: string;
  subHeading: string;
  paragraph: string;
  imageLarge: string;
  imageSmall: string;
  slug: string;
}
