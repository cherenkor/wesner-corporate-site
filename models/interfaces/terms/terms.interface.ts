export interface ITextWithLink {
  text: string;
  hasLink?: boolean;
  link?: string;
}

interface ITermsContent {
  text?: (string | ITextWithLink)[];
  list?: (string | ITextWithLink)[];
}

export interface ITermsBlock {
  title: string;
  content: ITermsContent;
}

export interface ITerms {
  title: string;
  lastUpdated: string;
  description: string[];
  content?: ITermsBlock[];
}
