export interface Article {
  id: string;
  date: string;
  name: string;
  img: string;
  path: string;
  lead: string;
  summaryList: ArticleSummaryItem[];
  contentList: ArticleContentItem[];
  articleStructure: ArticleSection[];
}

export interface ArticleSummaryItem {
  id: number;
  name: string;
}

export interface ArticleContentItem {
  id: number;
  name: string;
  link: string;
}

export interface ArticleSection {
  id: number;
  subHeading: string;
  paragraph: string;
  imageLarge: string;
  imageSm: string;
  slug: string;
}