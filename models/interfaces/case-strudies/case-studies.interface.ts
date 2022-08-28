export interface ICaseStudyInfo {
  title: string;
  text?: string[];
  list?: string[];
}

export interface ICaseStudyMainInfo extends ICaseStudyInfo {
  imgUrl?: string;
}

export interface ICaseStudyQuote {
  text: string;
  author?: string;
}

export interface ICaseStudy {
  id: string;
  categories: string[];
  title: string;
  previewUrl?: string;
  imgUrl: string;
}

export interface ICaseStudyFull extends ICaseStudy {
  customer?: string;
  technologies?: string[];
  generalInfo: ICaseStudyMainInfo;
  quote?: ICaseStudyQuote;
  additionalInfo?: ICaseStudyInfo[];
}
