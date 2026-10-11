export interface CardData {
  id: number;
  name: string;
  type: string;
  frameType: string;
  humanReadableCardType: string;
  desc: string;
  race: string;
  attribute?: string;
  atk?: number;
  def?: number;
  level?: number;
  scale?: number;
  linkval?: number;
  linkmarkers?: string[];
  archetype?: string;
  card_images: { image_url: string; image_url_small: string }[];
}
