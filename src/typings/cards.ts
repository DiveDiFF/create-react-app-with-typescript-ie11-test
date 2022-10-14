export interface CardData {
  id: string;
  thumbnailURL: string;
  title: string;
  rating?: number;
}

export interface VerticalCardData extends CardData {
  label: string;
  originValue: string;
  hilightValue: string;
  ratingDesc?: string;
}

export interface HorizontalCardData extends CardData {
  description: string;
  writer: string;
}
