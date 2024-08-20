export interface RecipeType {
  externalId: string;
  url: string;
  label: string;
  images: Images;
  ingredients: Ingredient[];
}

export interface Images {
  REGULAR?: Image;
  SMALL?: Image;
  THUMBNAIL?: Image;
}

export interface Image {
  height: number;
  width: number;
  url: string;
}

export interface Ingredient {
  food: string;
  foodCategory: string;
  foodId: string;
  image: string;
  measure: string;
  quantity: number;
  text: string;
  weight: number;
}
