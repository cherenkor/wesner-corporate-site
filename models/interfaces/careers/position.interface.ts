export interface IPositionSection {
  title?: string;
  text?: string;
  list?: string[];
}

export interface IPosition {
  id: string;
  title: string;
  location: string;
}

export interface IPositionFull extends IPosition {
  alocation?: string;
  role?: string;
  generalInfo?: IPositionSection;
  otherInfo?: IPositionSection[];
}
